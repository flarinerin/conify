import React from 'react';
import ReactOnRails from 'react-on-rails';
import { Provider } from 'react-redux';

/* Components */
import Main from 'components/Main';
import Events from 'events/component';
import Event from 'components/Event';
import Bookmarks from 'components/Bookmarks';
import Categories from 'components/Categories';
import Challenges from 'components/Challenges';
import EventMap from 'components/EventMap';

import createStore from 'store/conifyStore';

import { Router, Route, IndexRedirect, browserHistory } from 'react-router';

import 'styles/app.scss';

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
          <IndexRedirect to="events"/>
          <Route path="events" component={Events} />
          <Route path="events/:eventId" component={Event} />
          <Route path="bookmarks" component={Bookmarks} />
          <Route path="categories" component={Categories} />
          <Route path="challenges" component={Challenges} />
          <Route path="map" component={EventMap} />
        </Route>
      </Router>
    </Provider>
  );

  return reactComponent;
};

// This is how react_on_rails can see the HelloWorldApp in the browser.
ReactOnRails.register({ App });
