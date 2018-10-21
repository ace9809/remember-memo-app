/**
 * Created by Ace on 2018. 10. 13..
 */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { getLabels, getMemos } from '../../actions';
import LabelList from '../../components/LabelList'

const LabelWrapper = styled.div`
  width: 100%:
  height: 100%;
`;

class LabelTab extends Component {
  componentDidMount() {
    //mount될 때 getLabels와 getMemos를 dispatch하여 state의 라벨 리스트와 메모 리스트를 업데이트 해준다.
    this.props.getLabels();
    this.props.getMemos();
  }
  render() {
    const  {
      labels,
      memos,
      currentLabel
    } = this.props;

    return (
      <LabelWrapper>
        <LabelList labels={labels} memos={memos} currentLabel={currentLabel} />
      </LabelWrapper>
    );
  }
}

LabelTab.propTypes = {
  memos: PropTypes.array,
  labels: PropTypes.array,
  currentLabel: PropTypes.string,
  getLabels: PropTypes.func,
  getMemos: PropTypes.func,
};

//reducer의 state를 props로 바꿔준다.
function mapStateToProps(state) {
  return {
    labels: state.labels.labels,
    memos: state.memos.memos,
    currentLabel: state.labels.currentLabel
  }
}

export default connect(mapStateToProps, { getLabels, getMemos })(LabelTab);