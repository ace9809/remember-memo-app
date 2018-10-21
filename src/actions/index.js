/**
 * Created by Ace on 2018. 10. 13..
 */
import axios from 'axios';

export const addLabel = title => dispatch => {
  return axios.post(`http://114.207.113.7:18888/labels`, {
    title : title
  }).then(res => {
    dispatch(addLabelSuccess(res.data));
  }).catch(error => {
    dispatch(apiFailure(error));
    throw error;
  })
};

export const getLabels = () => dispatch => {
  return axios.get(`http://114.207.113.7:18888/labels`)
    .then(res => {
      dispatch(getLabelsSuccess(res.data));
    }).catch(error => {
      dispatch(apiFailure(error));
      throw error;
    })
};

export const getLabel = id => dispatch => {
  return axios.get(`http://114.207.113.7:18888/labels/${id}`)
    .then(res => {
      dispatch(getLabelSuccess(res.data));
    }).catch(error => {
      dispatch(apiFailure(error));
      throw error;
    })
};

export const updateLabel = (id, title) => dispatch => {
  return axios.put(`http://114.207.113.7:18888/labels/${id}`, {
    title : title
  }).then(res => {
      dispatch(updateLabelSuccess(res.data));
    }).catch(error => {
      dispatch(apiFailure(error));
      throw error;
    })
};

export const deleteLabel = id => dispatch => {
  return axios.delete(`http://114.207.113.7:18888/labels/${id}`)
    .then(res => {
      dispatch(deleteLabelSuccess(res.data));
    }).catch(error => {
      dispatch(apiFailure(error));
      throw error;
    })
};

export const removeLabelMemo = (labelId, removeMemos) => (dispatch, getState) => {
  const state = getState();
  if (state.labels.checkedMemos.length === 0) {
    alert('체크한 메모가 없습니다');
  }
  return axios.delete(`http://114.207.113.7:18888/labels/${labelId}/memos`, {
    data: { memoIds: removeMemos}
  }).then(res => {
      dispatch(removeLabelMemoSuccess(res.data));
    }).catch(error => {
      dispatch(apiFailure(error));
      throw error;
    })
};

export const getMemos = () => dispatch => {
  return axios.get(`http://114.207.113.7:18888/memos`)
    .then(res => {
      dispatch(getMemosSuccess(res.data));
    }).catch(error => {
      dispatch(apiFailure(error));
      throw error;
    })
};

export const addMemo = () => dispatch => {
  return axios.post(`http://114.207.113.7:18888/memos`, {
    title: 'New Memo',
    content: '내용을 입력해주세요.'
  }).then(res => {
    dispatch(addMemoSuccess(res.data));
  }).catch(error => {
    dispatch(apiFailure(error));
    throw error;
  })
};

export const getMemo = id => dispatch => {
  return axios.get(`http://114.207.113.7:18888/memos/${id}`)
    .then(res => {
      dispatch(getMemoSuccess(res.data));
    }).catch(error => {
      dispatch(apiFailure(error));
      throw error;
    })
};

export const deleteMemo = id => (dispatch, getState) => {
  const state = getState();
  let deleteLabelMemoLabels;
  return axios.delete(`http://114.207.113.7:18888/memos/${id}`)
    .then(res => {
      state.labels.labels.map(
        (label) => {
          label.memos.map(memo => {
            if (memo.id === res.data.id) {
              label.memos = label.memos.filter(memo => memo._id !== res.data._id);
              deleteLabelMemoLabels = label;
            }
          });
        });
      dispatch(deleteMemoSuccess(res.data));
      dispatch(deleteLabelMemoSuccess(deleteLabelMemoLabels));
    }).catch(error => {
      dispatch(apiFailure(error));
      throw error;
    })
};

export const updateMemo = (id, params, currentLabel) => dispatch => {
  return axios.put(`http://114.207.113.7:18888/memos/${id}`, {
    title : params.title,
    content : params.content
  }).then(res => {
    dispatch(updateMemoSuccess(res.data));
    if (currentLabel !== 'all') {
      dispatch(updateLabelMemoSuccess(res.data));
    }
  }).catch(error => {
    dispatch(apiFailure(error));
    throw error;
  })
};

export const checkedMemos = (Memo, checked) => dispatch => {
  if (checked) {
    dispatch(checkedMemosSuccess(Memo._id))
  }
};

export const addLabelMemo = (id, addMemos) => dispatch => {
  return axios.post(`http://114.207.113.7:18888/labels/${id}/memos`, {
    memoIds: addMemos
  }).then(res => {
    dispatch(addLabelMemoSuccess(res.data));
  }).catch(error => {
    dispatch(apiFailure(error));
    throw error;
  })
};

export const getCurrentLabel = id => ({
  type: 'GET_CURRENT_LABEL',
  payload: id
});


const apiFailure = error => ({
  type: 'API_FAILURE',
  payload: {
    error
  }
});

const addLabelSuccess = data => ({
  type: 'ADD_LABEL_SUCCESS',
  payload: {
    ...data
  }
});

const getLabelsSuccess = data => ({
  type: 'GET_LABELS_SUCCESS',
  payload: data
});

const getLabelSuccess = data => ({
  type: 'GET_LABEL_SUCCESS',
  payload: {
    ...data
  }
});

const updateLabelSuccess = data => ({
  type: 'UPDATE_LABEL_SUCCESS',
  payload: {
    ...data
  }
});

const deleteLabelSuccess = data => ({
  type: 'DELETE_LABEL_SUCCESS',
  payload: {
    ...data
  }
});

const removeLabelMemoSuccess = data => ({
  type: 'REMOVE_LABEL_MEMO_SUCCESS',
  payload: {
    ...data
  }
});

const getMemosSuccess = data => ({
  type: 'GET_MEMOS_SUCCESS',
  payload: data
});

const addMemoSuccess = data => ({
  type: 'ADD_MEMO_SUCCESS',
  payload: {
    ...data
  }
});

const getMemoSuccess = data => ({
  type: 'GET_MEMO_SUCCESS',
  payload: data
});

const deleteMemoSuccess = data => ({
  type: 'DELETE_MEMO_SUCCESS',
  payload: {
    ...data
  }
});

const deleteLabelMemoSuccess = data => ({
  type: 'DELETE_LABEL_MEMO_SUCCESS',
  payload: {
    ...data
  }
});

const updateMemoSuccess = data => ({
  type: 'UPDATE_MEMO_SUCCESS',
  payload: {
    ...data
  }
});

const updateLabelMemoSuccess = data => ({
  type: 'UPDATE_LABEL_MEMO_SUCCESS',
  payload: {
    ...data
  }
});

const checkedMemosSuccess = data => ({
  type: 'CHECKED_MEMOS_SUCCESS',
  payload: data
});

const addLabelMemoSuccess = data => ({
  type: 'ADD_LABEL_MEMO_SUCCESS',
  payload: {
    ...data
  }
});