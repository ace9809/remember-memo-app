/**
 * Created by Ace on 2018. 10. 15..
 */
/**
 * Created by Ace on 2018. 10. 13..
 */
import React, { Component } from 'react';
import styled from 'styled-components';
import { Link } from "react-router-dom";
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

const StyledLink = styled(Link)`
  &:link {text-decoration: none; color: black;}
  &:visited {text-decoration: none; color: black;}
  &:active {text-decoration: none; color: black;}
  &:hover {text-decoration: none; color: black;}
`;

class MemoList extends Component {
  render () {
    console.log('this.props.memos', this.props.memos);
    if (this.props.memos.length === 0) {
      return (
        <Wrapper>
          메모가 없습니다.
        </Wrapper>
      )
    }
    return (
      <Wrapper>
        {
          this.props.memos.map((memo, index) => {
            return(
              <StyledLink
                to={`/${memo._id}`}
                key={memo._id}
              >
                <Memo
                  memo={memo}
                  key={index}
                />
              </StyledLink>
            )
          })
        }
      </Wrapper>
    )


  }
}

export default MemoList;