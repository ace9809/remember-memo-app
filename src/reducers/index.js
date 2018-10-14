/**
 * Created by Ace on 2018. 10. 13..
 */

import { combineReducers } from 'redux';

const rootReducer = combineReducers({
  labels,
  memos
});

function labels(state = {labels: [], label: {}}, action) {
  switch(action.type) {
    case 'GET_LABELS_STARTED':
      return {
        ...state
      };
    case 'GET_LABELS_SUCCESS':
      return {
        ...state,
        labels: action.payload
      };
    case 'ADD_LABEL_STARTED':
      return {
        ...state
      };
    case 'ADD_LABEL_SUCCESS':
      return {
        ...state,
        labels: [...state.labels, action.payload]
      };
    case 'GET_LABEL_STARTED':
      return {
        ...state
      };
    case 'GET_LABEL_SUCCESS':
      return {
        ...state,
        label: action.payload
      };

  }
  return state;
}

function memos(state = {memos: []}, action) {
  switch(action.type) {
    case 'GET_MEMOOS_STARTED':
      return {
        ...state
      };
    case 'GET_MEMOS_SUCCESS':
      return {
        ...state,
        memos: action.payload
      };
  }
  return state;
}

export default rootReducer;