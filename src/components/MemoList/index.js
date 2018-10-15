/**
 * Created by Ace on 2018. 10. 15..
 */
/**
 * Created by Ace on 2018. 10. 13..
 */
import React, { Component } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { Link } from "react-router-dom";
import Label from '../Label';

const Wrapper = styled.div`
  width: 100%;
  border-bottom: 1px solid #F3F1F1;
  border-left: 1px solid #F3F1F1;
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
              <div
                key={index}
              >
                {memo.title}
              </div>
            )
          })
        }
      </Wrapper>
    )


  }
}

export default MemoList;