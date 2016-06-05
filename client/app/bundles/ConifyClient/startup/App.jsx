import React from 'react';
import ReactOnRails from 'react-on-rails';
import { Provider } from 'react-redux';

/* Components */
import Main from '../components/Main';
import Events from '../components/Events';
import Event from '../components/Event';

import createStore from '../store/conifyStore';

import { Router, Route, IndexRoute, browserHistory } from 'react-router';

// See documentation for https://github.com/reactjs/react-redux.
// This is how you get props from the Rails view into the redux store.
// This code here binds your smart component to the redux store.
// railsContext provides contextual information especially useful for server rendering, such as
// knowing the locale. See the React on Rails documentation for more info on the railsContext
const App = (props/*, _railsContext*/) => {
  const store = createStore(props);
  const reactComponent = (
    <Provider store={store}>
      <Router history={browserHistory}>
        <Route path="/" component={Main}>
          <IndexRoute component={Events} />
          <Route path="/events/:eventId" component={Event} />
        </Route>
      </Router>
    </Provider>
  );

  return reactComponent;
};

// This is how react_on_rails can see the HelloWorldApp in the browser.
ReactOnRails.register({ App });
