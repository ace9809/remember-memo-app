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

function mapStateToProps(state) {
  return {
    labels: state.labels.labels,
    memos: state.memos.memos,
    currentLabel: state.labels.currentLabel
  }
}

export default connect(mapStateToProps, { getLabels, getMemos })(LabelTab);