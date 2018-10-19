/**
 * Created by Ace on 2018. 10. 13..
 */
import axios from 'axios';

export const addLabel = title => dispatch => {
  dispatch(addLabelStarted());
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
  dispatch(getLabelsStarted());
  return axios.get(`http://114.207.113.7:18888/labels`)
    .then(res => {
      dispatch(getLabelsSuccess(res.data));
    }).catch(error => {
      dispatch(apiFailure(error));
      throw error;
    })
};

export const getLabel = (id) => dispatch => {
  dispatch(getLabelStarted());
  return axios.get(`http://114.207.113.7:18888/labels/${id}`)
    .then(res => {
      dispatch(getLabelSuccess(res.data));
    }).catch(error => {
      dispatch(apiFailure(error));
      throw error;
    })
};

export const updateLabel = (id, title) => dispatch => {
  dispatch(updateLabelStarted());
  return axios.put(`http://114.207.113.7:18888/labels/${id}`, {
    title : title
  }).then(res => {
      dispatch(updateLabelSuccess(res.data));
    }).catch(error => {
      dispatch(apiFailure(error));
      throw error;
    })
};

export const deleteLabel = (id) => dispatch => {
  dispatch(deleteLabelStarted());
  return axios.delete(`http://114.207.113.7:18888/labels/${id}`)
    .then(res => {
      dispatch(deleteLabelSuccess(res.data));
    }).catch(error => {
      dispatch(apiFailure(error));
      throw error;
    })
};

export const deleteLabelMemo = (labelId, deleteMemos) => dispatch => {
  dispatch(deleteLabelMemoStarted());
  return axios.delete(`http://114.207.113.7:18888/labels/${labelId}/memos`, {
    data: { memoIds: deleteMemos}
  }).then(res => {
      dispatch(deleteLabelMemoSuccess(res.data));
    }).catch(error => {
      dispatch(apiFailure(error));
      throw error;
    })
};

export const getMemos = () => dispatch => {
  dispatch(getMemosStarted());
  return axios.get(`http://114.207.113.7:18888/memos`)
    .then(res => {
      dispatch(getMemosSuccess(res.data));
    }).catch(error => {
      dispatch(apiFailure(error));
      throw error;
    })
};

export const addMemo = () => dispatch => {
  dispatch(addMemoStarted());
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

export const getMemo = (id) => dispatch => {
  dispatch(getMemoStarted());
  return axios.get(`http://114.207.113.7:18888/memos/${id}`)
    .then(res => {
      dispatch(getMemoSuccess(res.data));
    }).catch(error => {
      dispatch(apiFailure(error));
      throw error;
    })
};

export const deleteMemo = (id) => dispatch => {
  dispatch(deleteMemoStarted());
  return axios.delete(`http://114.207.113.7:18888/memos/${id}`)
    .then(res => {
      dispatch(deleteMemoSuccess(res.data));
    }).catch(error => {
      dispatch(apiFailure(error));
      throw error;
    })
};

export const updateMemo = (id, params) => dispatch => {
  dispatch(updateMemoStarted());
  return axios.put(`http://114.207.113.7:18888/memos/${id}`, {
    title : params.title,
    content : params.content
  }).then(res => {
    dispatch(updateMemoSuccess(res.data));
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

const addLabelStarted = () => ({
  type: 'ADD_LABEL_STARTED',
});

const addLabelSuccess = data => ({
  type: 'ADD_LABEL_SUCCESS',
  payload: {
    ...data
  }
});

const getLabelsStarted = () => ({
  type: 'GET_LABELS_STARTED',
});

const getLabelsSuccess = data => ({
  type: 'GET_LABELS_SUCCESS',
  payload: data
});

const getLabelStarted = () => ({
  type: 'GET_LABEL_STARTED',
});

const getLabelSuccess = data => ({
  type: 'GET_LABEL_SUCCESS',
  payload: {
    ...data
  }
});

const updateLabelStarted = () => ({
  type: 'UPDATE_LABEL_STARTED',
});

const updateLabelSuccess = data => ({
  type: 'UPDATE_LABEL_SUCCESS',
  payload: {
    ...data
  }
});

const deleteLabelStarted = () => ({
  type: 'DELETE_LABEL_STARTED',
});

const deleteLabelSuccess = data => ({
  type: 'DELETE_LABEL_SUCCESS',
  payload: {
    ...data
  }
});

const deleteLabelMemoStarted = () => ({
  type: 'DELETE_LABEL_MEMO_STARTED',
});

const deleteLabelMemoSuccess = data => ({
  type: 'DELETE_LABEL_MEMO_SUCCESS',
  payload: {
    ...data
  }
});

const getMemosStarted = () => ({
  type: 'GET_MEMOS_STARTED',
});

const getMemosSuccess = data => ({
  type: 'GET_MEMOS_SUCCESS',
  payload: data
});

const addMemoStarted = () => ({
  type: 'ADD_MEMO_STARTED',
});

const addMemoSuccess = data => ({
  type: 'ADD_MEMO_SUCCESS',
  payload: {
    ...data
  }
});

const getMemoStarted = () => ({
  type: 'GET_MEMO_STARTED',
});

const getMemoSuccess = data => ({
  type: 'GET_MEMO_SUCCESS',
  payload: data
});

const deleteMemoStarted = () => ({
  type: 'DELETE_MEMO_STARTED',
});

const deleteMemoSuccess = data => ({
  type: 'DELETE_MEMO_SUCCESS',
  payload: {
    ...data
  }
});

const updateMemoStarted = () => ({
  type: 'UPDATE_MEMO_STARTED',
});

const updateMemoSuccess = data => ({
  type: 'UPDATE_MEMO_SUCCESS',
  payload: {
    ...data
  }
});