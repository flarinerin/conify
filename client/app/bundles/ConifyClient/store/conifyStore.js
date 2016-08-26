import { compose, createStore, applyMiddleware, combineReducers } from 'redux';

// See
// https://github.com/gaearon/redux-thunk and http://redux.js.org/docs/advanced/AsyncActions.html
// This is not actually used for this simple example, but you'd probably want to use this
// once your app has asynchronous actions.
import thunkMiddleware from 'redux-thunk';

import reducers from '../reducers';
import initialState from './initialState';

export default (props) => {
  /* props are from rails, TODO: merge initial props into app on load */
  // This is how we get initial props Rails into redux.

  const reducer = combineReducers(reducers);
  const composedStore = compose(
    applyMiddleware(thunkMiddleware)
  );
  const storeCreator = composedStore(createStore);
  const store = storeCreator(reducer, initialState);

  return store;
};

/*****
 *
 * Events req:
 * {
 *   comments: {
 *     collection: {
 *       unique id: {
 *         meta: {
 *           isFetching: ...,
 *           ...
 *         },
 *         content: {
 *           label: string,
 *           description: string,
 *           ...
 *         },
 *         relationships: {
 *           author: author id,
 *           event: event id,
 *         }
 *       },
 *       ...
 *     },
 *     pages: {
 *      ... see below
 *     }
 *   },
 *   events: {
 *     collection: {
 *       unique id: {
 *         meta: {
 *           isFetching: ...,
 *           ...
 *         },
 *         content: {
 *           label: string,
 *           description: string,
 *           ...
 *         },
 *         relationships: {
 *           location: location id,
 *           comments: {
 *             meta: {
 *               isFetching: boolean,
 *               ...
 *             },
 *             content: [
 *               comment id,
 *               ...
 *             ]
 *           }
 *         }
 *       }
 *     }
 *     pages: {
 *       unique page id: {
 *         id: unique page id
 *         currentPageLink: ...,
 *         nextPageLink: ...,
 *         previousPageLink: ...,
 *
 *         meta: {
 *           isFetching: ...,
 *         },
 *         content: [
 *           unique id,
 *           unique id,
 *           ...
 *         ]
 *       }
 *     }
 *   },
 *   ...
 * }
 *
 *
 *
 *****/

export function mergeObjectPayload(resourceName, payload, immutableStore) {
  const id = payload.id;

  return Object.keys(payload).reduce((immutableMap, key) => {
    if (key.includes('_ids')) {
      const relationshipName = key.split('_ids')[0];

      return immutableMap.setIn(
        [resourceName, 'collection', id, 'relationships', relationshipName, 'content'],
        Immutable.Set(payload[key])
      );
    } else if (key.includes('_id')) {
      const relationshipName = key.split('_id')[0];

      return immutableMap.setIn(
        [resourceName 'collection', id, 'relationships', relationshipName],
        payload[key]
      );
    } else {
      return immutableMap.setIn(
        [resourceName, 'collection', id, 'content', key],
        payload[key]
      );
    }
  }, immutableStore)
}

export function mergeCollectionPayload(resourceName, arrayPayload, immutableStore) {
  return arrayPayload.reduce((immutableStore, objectPayload) => {
    return mergeObjectPayload(resourceName, objectPayload, immutableStore);
  }, immutableStore);
}

// TODO: Update api_me pagination to include inside the page hash the resource name of the pagination data
export function mergePageMeta(pagePayload, immutableStore) {
  const resourceName = pagePayload.resource_name;
  const pageId = pagePayload.

  if (resourceName && pageId) {
    return immutableStore.setIn(
      [resourceName, 'pages' pageId, 'current_page_link'],
      pagePayload.link
    ).setIn(
      [resourceName, 'pages', pageId, 'previous_page_link],
      pagePayload.previous
    ).setIn(
      [resourceName, 'pages', pageId, 'next_page_link],
      pagePayload.next
    ).setIn(
      [resourceName, 'pages', pageId, 'meta', 'is_fetching'],
      false
    );
  } else {
    return immutableStore;
  }
}

const META_KEY = 'meta';
const PAGE_KEY = 'page';

export function mergeResourceRequest(payload, immutableStore) {
  return Object.keys(payload).reduce((immutableStore, key) {
    if (key === META_KEY && payload[META_KEY][PAGE_KEY]) {
      return mergePageMeta(payload[key][PAGE_KEY], immutableStore);
    } else {
      return mergeCollectionPayload(key, payload[key], immutableStore);
    }
  });
}

