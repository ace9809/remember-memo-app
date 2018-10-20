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

    case 'UPDATE_LABEL_MEMO_SUCCESS':
      return {
        ...state,
        label: {
          ...state.label,
          memos: state.label.memos.map(
            (memo, i) => memo._id === action.payload._id ? {...memo, ...action.payload}
              : memo
          )
      }
      };

    case 'DELETE_LABEL_MEMO_STARTED':
      return {
        ...state
      };
    case 'DELETE_LABEL_MEMO_SUCCESS':
      return {
        ...state,
        label: action.payload,
        currentLabel: action.payload._id,
        labels: state.labels.map(
          (label, i) => label._id === action.payload._id ? {...label, ...action.payload}
            : label
        )
      };
    case 'ADD_LABEL_MEMO_SUCCESS':
      return {
        ...state,
        labels: state.labels.map(
          (label, i) => label._id === action.payload._id ? {...label, ...action.payload}
            : label
        )
      };

  }
  return state;
}

function memos(state = {memos: [], memo: {}, isLoading: true, checkedMemos: []}, action) {
  console.log('액션 타입', action.type);
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
        ...state,
        isLoading: true
      };
    case 'GET_MEMO_SUCCESS':
      return {
        ...state,
        memo: action.payload,
        isLoading: false
      };
    case 'DELETE_MEMO_STARTED':
      return {
        ...state
      };
    case 'DELETE_MEMO_SUCCESS':
      return {
        ...state,
        memos: state.memos.filter(memo => memo._id !== action.payload._id)
      };
    case 'UPDATE_MEMO_STARTED':
      return {
        ...state
      };
    case 'UPDATE_MEMO_SUCCESS':
      return {
        ...state,
        memos: state.memos.map(
          (memo, i) => memo._id === action.payload._id ? {...memo, ...action.payload}
            : memo
        )
      };
    case 'CHECKED_MEMOS_SUCCESS':
      return {
        ...state,
        checkedMemos: [...state.checkedMemos, action.payload]
      };
  }
  return state;
}

export default rootReducer;