
const initialState = {
  memos: [],
  memo: {}
};

const memos = (state = initialState, action) => {
  switch(action.type) {
    case 'GET_MEMOS_SUCCESS':
      return {
        ...state,
        memos: action.payload,
      };

    case 'ADD_MEMO_SUCCESS':
      return {
        ...state,
        memos: [action.payload, ...state.memos]
      };

    case 'GET_MEMO_SUCCESS':
      return {
        ...state,
        memo: action.payload,
        isLoading: false
      };

    case 'DELETE_MEMO_SUCCESS':
      return {
        ...state,
        memos: state.memos.filter(memo => memo._id !== action.payload._id)
      };

    case 'UPDATE_MEMO_SUCCESS':
      return {
        ...state,
        memos: state.memos.map(
          (memo, i) => memo._id === action.payload._id ? {...memo, ...action.payload}
            : memo
        )
      };

    default:
      return state;
  }
};

export default memos;