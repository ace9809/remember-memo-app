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

export const updateLabel = (id) => dispatch => {
  dispatch(updateLabelStarted());
  return axios.put(`http://114.207.113.7:18888/${id}`)
    .then(res => {
      dispatch(updateLabelSuccess(res.data));
    }).catch(error => {
      dispatch(apiFailure(error));
      throw error;
    })
};

export const deleteLabel = (id, title) => dispatch => {
  dispatch(deleteLabelStarted());
  return axios.delete(`http://114.207.113.7:18888/labels/${id}`, {
    title : title
  }).then(res => {
      dispatch(deleteLabelSuccess(res.data));
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

const getMemosStarted = () => ({
  type: 'GET_MEMOS_STARTED',
});

const getMemosSuccess = data => ({
  type: 'GET_MEMOS_SUCCESS',
  payload: data
});