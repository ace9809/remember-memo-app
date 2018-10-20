const initialState = {
  memos: [],
  memo: {},
  checkMemos: []
};

const memos = (state = initialState, action) => {
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
};

export default memos;