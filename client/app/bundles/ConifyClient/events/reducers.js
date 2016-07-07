import { combineReducers } from 'react';
import { EVENTS_REQUEST, EVENTS_SUCCESS, EVENTS_FAILURE } from './actions';
import Immutable from 'immutable';

export const initialEventsState = Immutable.fromJS({
  isFetching: false,
  eventTable: new Immutable.OrderedMap(),
});

function events(state = {}, action) {
  switch(action.type) {
    case EVENTS_SUCCESS:
      const eventsMap = events.reduce((map, event) => map.set(event.id, Immutable.fromJS(event)), new Immutable.Map());
      const eventsState = state.store.get('events').merge({
        isFetching: actions.isFetching,
        eventTable: state.store.get('events').get('eventTable').merge(eventsMap)
      });

      return Object.assign({}, state, {
        store: state.store.merge({
          events: eventsState
        }),
      });
    default:
      return state;
  }
}
