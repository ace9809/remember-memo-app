/**
 * Created by Ace on 2018. 10. 15..
 */
/**
 * Created by Ace on 2018. 10. 13..
 */
import React, { Component } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import Memo from '../Memo';

const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
  overflow:scroll; 
  border-bottom: 1px solid #F3F1F1;
  border-left: 1px solid #F3F1F1;
  position:relative;
  -ms-overflow-style: none; // IE에서 스크롤바 감춤
  &::-webkit-scrollbar { 
    display: none !important; // 윈도우 크롬 스크롤바 감춤
  }
`;

class MemoList extends Component {
  render () {
    if (this.props.memos.length === 0) {
      return (
        <Wrapper>
          메모가 없습니다.
        </Wrapper>
      )
    }

    const {
      memos,
      currentLabel
    } = this.props;

    return (
      <Wrapper>
        {
          memos.map(memo => {
            return(
                <Memo
                  memo={memo}
                  key={memo._id}
                  currentLabel={currentLabel}
                />
            )
          })
        }
      </Wrapper>
    )
  }
}

MemoList.propTypes = {
  memos: PropTypes.array,
  currentLabel: PropTypes.string,
};

export default MemoList;