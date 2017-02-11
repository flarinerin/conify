import actionTypes from '../constants/reduxActionTypes';
import { createAction } from 'redux-actions';

export const toggleSidebar = createAction(actionTypes.SIDEBAR_TOGGLE);
