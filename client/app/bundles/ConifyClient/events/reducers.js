import { combineReducers } from 'react';
import { EVENTS_REQUEST, EVENTS_SUCCESS, EVENTS_FAILURE } from './actions';
import Immutable from 'immutable';
import { createStoreTypeMap } from '../store/initialState';
import { mergeResourceRequest } from '../store/conifyStore';

function events(store = {}, action) {
  switch(action.type) {
    case EVENTS_SUCCESS:
      const immutableStore = mergeResourceRequest(action.payload, store.immutableStore);

      return Object.assign({}, state, {
        immutableStore: immutableStore
      });
    default:
      return state;
  }
}
