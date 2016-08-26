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
 *       id 1: {
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
 *       id 2: {
 *         ...
 *       },
 *       ...
 *     },
 *     pages: {
 *      ... see below
 *     }
 *   },
 *   events: {
 *     collection: {
 *       id: {
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
 *               comment id 1,
 *               comment id 2,
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
 *           event id 1,
 *           event id 2,
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

export function mergeObjectPayload(payload, immutableStore) {
  const id = payload.id;

  return Object.keys(payload).reduce((immutableMap, key) => {
    if (key.includes('_ids') {
      const relationshipName = key.split('_ids')[0];

      return immutableMap.setIn(
        [id, 'relationships', relationshipName, 'content'],
        Immutable.Set(payload[key])
      );
    } else if (key.includes('_id') {
      const relationshipName = key.split('_id')[0];

      return immutableMap.setIn(
        [id, 'relationships', relationshipName],
        payload[key]
      );
    } else {
      return immutableMap.setIn(
        [id, 'content', key],
        payload[key]
      );
    }
  }, Immutable.Map({}));
}

