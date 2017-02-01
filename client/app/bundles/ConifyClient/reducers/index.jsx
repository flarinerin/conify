// This file is our manifest of all reducers for the app.
// See also /client/app/bundles/HelloWorld/store/helloWorldStore.jsx
// A real world app will likely have many reducers and it helps to organize them in one file.
import helloWorldReducer from './helloWorldReducer';
import { $$initialState as $$helloWorldState } from './helloWorldReducer';

export default {
  $$helloWorldStore: helloWorldReducer,
};

export const initialStates = {
  $$helloWorldState,
};

let stateExample = {
  sidebar: {
    open: false,
    docked: false,
  },
  eventList: {
    status: 'success',
    cached: new Date(),
    start: new Date(),
    end: new Date(),
    items: [
      {
        id: '1',
        title: 'Title',
        time: {
          start: '2017-02-01T03:57:35Z',
          end: '2017-02-01T03:57:35Z',
        },
        venue: {
          id: 'a',
          name: 'Venue'
        },
        category: {
          id: '1c',
          name: 'Cat'
        }
      }
    ],
  },
  events: {
    '1': {
      status: 'success',
      cached: new Date(),
      value: {
        id: '1',
        title: 'Title',
        venue: {
          id: 'a',
          name: 'Venue'
        },
        category: {
          id: '1c',
          name: 'Cat'
        }
      }
    }
  },
  venues: {
    '1': {
      status: 'success',
      cached: new Date(),
      value: {
        id: '1c',
        name: 'Venue',
        address: '',
      }
    }
  },
  user: {
    loggedIn: false,
    bookmarks: [
      {
        eventId: '1',
        saved: false,
      }
    ],
  }
};