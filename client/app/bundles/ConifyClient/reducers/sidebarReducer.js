import { Map } from 'immutable';

import actionTypes from '../constants/reduxActionTypes';

export const $$initialState = new Map({
  open: false,
});

export default function sidebarReducer($$state = $$initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case actionTypes.SIDEBAR_TOGGLE:
    {
      //Use provided state or invert if none provided
      const open = (payload === undefined) ? !$$state.get(open) : payload;
      return $$state.set('open', open);
    }
    default:
      return $$state;
  }
}
