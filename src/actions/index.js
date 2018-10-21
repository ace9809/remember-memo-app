/**
 * Created by Ace on 2018. 10. 13..
 */
import axios from 'axios';

//라벨을 추가하는 액션
export const addLabel = title => dispatch => {
  if (title === '') {
    alert('라벨이름을 입력해주세요');
    return;
  }
  return axios.post(`http://114.207.113.7:18888/labels`, {
    title : title
  }).then(res => {
    dispatch(addLabelSuccess(res.data));
  }).catch(error => {
    dispatch(apiFailure(error));
    throw error;
  })
};

//라벨들을 가져오는 액션
export const getLabels = () => dispatch => {
  return axios.get(`http://114.207.113.7:18888/labels`)
    .then(res => {
      dispatch(getLabelsSuccess(res.data));
    }).catch(error => {
      dispatch(apiFailure(error));
      throw error;
    })
};

//라벨리스트를 가져오는 액션
export const getLabel = id => dispatch => {
  return axios.get(`http://114.207.113.7:18888/labels/${id}`)
    .then(res => {
      dispatch(getLabelSuccess(res.data));
    }).catch(error => {
      dispatch(apiFailure(error));
      throw error;
    })
};

//라벨을 수정하는 액션
export const updateLabel = (id, title) => dispatch => {
  if (title === '') {
    alert('변경할 라벨 이름을 입력해주세요.');
    return;
  }
  return axios.put(`http://114.207.113.7:18888/labels/${id}`, {
    title : title
  }).then(res => {
    dispatch(updateLabelSuccess(res.data));
  }).catch(error => {
    dispatch(apiFailure(error));
    throw error;
  })
};

//라벨을 삭제하는 액션
export const deleteLabel = id => dispatch => {
  return axios.delete(`http://114.207.113.7:18888/labels/${id}`)
    .then(res => {
      dispatch(deleteLabelSuccess(res.data));
    }).catch(error => {
      dispatch(apiFailure(error));
      throw error;
    })
};

//라벨에 속해있는 메모를 해제하도록 함
export const removeLabelMemo = (labelId, removeMemos, removeModal) => (dispatch, getState) => {
  const state = getState();
  if (state.labels.checkedMemos.length === 0 && removeModal) {
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

//메모리스트를 가져오는 액션
export const getMemos = () => dispatch => {
  return axios.get(`http://114.207.113.7:18888/memos`)
    .then(res => {
      dispatch(getMemosSuccess(res.data));
    }).catch(error => {
      dispatch(apiFailure(error));
      throw error;
    })
};

//메모를 추가하는 액션
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

//메모를 가져오는 액션
export const getMemo = id => dispatch => {
  return axios.get(`http://114.207.113.7:18888/memos/${id}`)
    .then(res => {
      dispatch(getMemoSuccess(res.data));
    }).catch(error => {
      dispatch(apiFailure(error));
      throw error;
    })
};

//메모를 삭제하는 액션
export const deleteMemo = id => (dispatch, getState) => {
  const state = getState();
  let deleteLabelMemoLabels;
  return axios.delete(`http://114.207.113.7:18888/memos/${id}`)
    .then(res => {
      //현재 속해 있는 메모가 라벨에 포함되어 있을 시 해당 라벨을 업데이트 해주기 위해 삭제된 메모가 속해 있는 라벨을 리턴한뒤 dispatch 해줌
      deleteLabelMemoLabels = state.labels.labels.map(
        (label) => {
          label.memos.map(memo => {
            if (memo.id === res.data.id) {
              label.memos = label.memos.filter(memo => memo._id !== res.data._id);
            }
            return memo;
          });
          return label;
        });
      dispatch(deleteMemoSuccess(res.data));
      dispatch(deleteLabelMemoSuccess(deleteLabelMemoLabels));
    }).catch(error => {
      dispatch(apiFailure(error));
      throw error;
    })
};

//메모를 수정하는 액션
export const updateMemo = (id, params, currentLabel) => dispatch => {
  return axios.put(`http://114.207.113.7:18888/memos/${id}`, {
    title : params.title,
    content : params.content
  }).then(res => {
    dispatch(updateMemoSuccess(res.data));
    if (currentLabel !== 'all') {
      //현재라벨이 all이 아닐경우 label의 memos에도 업데이트를 해주기 위해 한번 더 dispatch 해줌
      dispatch(updateLabelMemoSuccess(res.data));
    }
  }).catch(error => {
    dispatch(apiFailure(error));
    throw error;
  })
};

//메모 체크 액션
export const checkedMemos = (Memo, checked) => dispatch => {
  dispatch(checkedMemosSuccess(Memo._id));
};

//메모 체크 해제 액션
export const unCheckedMemos = (Memo, checked) => dispatch => {
  dispatch(unCheckedMemosSuccess(Memo._id));
};

//메모에 라벨 지정해주는 액션
export const addLabelMemo = (id, addMemos) => (dispatch, getState) => {
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

const unCheckedMemosSuccess = data => ({
  type: 'UNCHECKED_MEMOS_SUCCESS',
  payload: data
});

const addLabelMemoSuccess = data => ({
  type: 'ADD_LABEL_MEMO_SUCCESS',
  payload: {
    ...data
  }
});