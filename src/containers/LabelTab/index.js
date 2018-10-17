/**
 * Created by Ace on 2018. 10. 13..
 */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import { getLabels, getMemos } from '../../actions';
import LabelList from '../../components/LabelList'

const LabelWrapper = styled.div`
  width: 100%:
  height: 100%;
  border-right: 1px solid #F3F1F1;
`;

class LabelTab extends Component {
  componentDidMount() {
    this.props.getLabels();
    this.props.getMemos();
  }
  render() {
    return (
      <LabelWrapper>
        <LabelList labels={this.props.labels} memos={this.props.memos} />
      </LabelWrapper>
    );
  }
}

function mapStateToProps(state) {
  return {
    labels: state.labels.labels,
    memos: state.memos.memos
  }
}


export default connect(mapStateToProps, { getLabels, getMemos })(LabelTab);