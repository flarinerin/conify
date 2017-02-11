import { compose, createStore, applyMiddleware, combineReducers } from 'redux';
import { reducer as responsive, mediaQueryTracker } from 'redux-mediaquery';

// See
// https://github.com/gaearon/redux-thunk and http://redux.js.org/docs/advanced/AsyncActions.html
// This is not actually used for this simple example, but you'd probably want to use this
// once your app has asynchronous actions.
import thunkMiddleware from 'redux-thunk';

import reducers from '../reducers';

// props is provided by Ruby On Rails in:
// /app/controllers/client_application_controller.rb
export default (/*props*/) => {
  const reducer = combineReducers({ responsive, ...reducers });

  const middleware = compose(
    applyMiddleware(thunkMiddleware)
  );

  const store = createStore(reducer, middleware);

  store.dispatch(mediaQueryTracker({
    isPhone: "screen and (max-width: 767px)",
    isTablet: "screen and (max-width: 1024px)",
    //innerWidth: true,
    //innerHeight: true,
  }));

  return store;
};
