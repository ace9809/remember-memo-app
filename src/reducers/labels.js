/**
 * Created by Ace on 2018. 10. 20..
 */

const initialState = {
  labels: [],
  label: {},
  currentLabel: 'all',
  checkedMemos: []
};

const labels = (state = initialState, action) => {
  console.log('state', state);
  switch(action.type) {
    case 'GET_LABELS_SUCCESS':
      return {
        ...state,
        labels: action.payload
      };

    case 'ADD_LABEL_SUCCESS':
      return {
        ...state,
        labels: [...state.labels, action.payload]
      };

    case 'GET_LABEL_SUCCESS':
      return {
        ...state,
        label: action.payload
      };

    case 'DELETE_LABEL_SUCCESS':
      return {
        ...state,
        labels: state.labels.filter(label => label._id !== action.payload._id),
        label: {}
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

    case 'REMOVE_LABEL_MEMO_SUCCESS':
      return {
        ...state,
        label: action.payload,
        currentLabel: action.payload._id,
        labels: state.labels.map(
          (label, i) => label._id === action.payload._id ? {...label, ...action.payload}
            : label
        ),
        checkedMemos: []
      };

    case 'ADD_LABEL_MEMO_SUCCESS':
      return {
        ...state,
        labels: state.labels.map(
          (label, i) => label._id === action.payload._id ? {...label, ...action.payload}
            : label
        ),
        label: action.payload,
        checkedMemos: []
      };

    case 'DELETE_LABEL_MEMO_SUCCESS':
      console.log('리듀서action', action)
      return {
        ...state,
        labels: state.labels.map(
          (label, i) => label._id === action.payload._id ? {...label, ...action.payload}
            : label
        )
      };

    case 'CHECKED_MEMOS_SUCCESS':
      return {
        ...state,
        checkedMemos: [...state.checkedMemos, action.payload]
      };

    case 'UNCHECKED_MEMOS_SUCCESS':
      return {
        ...state,
        checkedMemos: state.checkedMemos.filter(id => id !== action.payload),
      };

    default:
      return state;
  }
};

export default labels;