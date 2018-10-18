/**
 * Created by Ace on 2018. 10. 13..
 */

import { combineReducers } from 'redux';

const rootReducer = combineReducers({
  labels,
  memos
});

function labels(state = {labels: [], label: {}, currentLabel: 'all'}, action) {
  // console.log(action);
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
    case 'DELETE_LABEL_STARTED':
      return {
        ...state
      };
    case 'DELETE_LABEL_SUCCESS':
      return {
        ...state,
        labels: state.labels.filter(label => label._id !== action.payload._id),
        label: {}
      };
    case 'UPDATE_LABEL_STARTED':
      return {
        ...state
      };
    case 'GET_CURRENT_LABEL':
      return {
        ...state,
        currentLabel: action.payload
      };

    case 'UPDATE_LABEL_SUCCESS':
      return {
        ...state,
        labels: state.labels.map(
          (label, i) => label._id === action.payload._id ? {...label, ...action.payload}
            : label
        ),
        label: action.payload
      };
  }
  return state;
}

function memos(state = {memos: [], memo: {}}, action) {
  console.log(action);
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
    case 'ADD_MEMO_STARTED':
      return {
        ...state
      };
    case 'ADD_MEMO_SUCCESS':
      return {
        ...state,
        memos: [...state.memos, action.payload]
      };
    case 'GET_MEMO_STARTED':
      return {
        ...state
      };
    case 'GET_MEMO_SUCCESS':
      return {
        ...state,
        memo: action.payload
      };

  }
  return state;
}

export default rootReducer;