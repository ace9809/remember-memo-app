/**
 * Created by Ace on 2018. 10. 14..
 */
/**
 * Created by Ace on 2018. 10. 13..
 */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import { getMemos, getLabel} from '../../actions';

const MemoWrapper = styled.div`
  width: 100%:
`;

const LabelInfoWrapper = styled.div`
  height: 140px;
  padding: 10px;
  border-left: 1px solid #F3F1F1;
  border-bottom: 1px solid #F3F1F1;
`;

const TitleWrapper = styled.div`
  margin-top: 15px;
  font-size: 20px;
`;

const CountWrapper = styled.div`
  color: #a6a6a6;
`

class MemoTab extends Component {

  componentDidMount() {
    if (this.props.id === 'all') {
      this.props.getMemos();
    } else {
      this.props.getLabel(this.props.id);
    }
  }

  render() {
    const {
      title,
      memos
    } = this.props.label;
    return (
      <MemoWrapper>
        <LabelInfoWrapper>
          <TitleWrapper>
            {title}
          </TitleWrapper>
          <CountWrapper>
          </CountWrapper>
        </LabelInfoWrapper>
      </MemoWrapper>
    );
  }
}

function mapStateToProps(state) {
  return {
    label: state.labels.label,
    memos: state.labels.memos
  }
}

export default connect(mapStateToProps, { getMemos, getLabel })(MemoTab);