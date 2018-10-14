/**
 * Created by Ace on 2018. 10. 14..
 */
import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  width: 200px;
  border-bottom: 1px solid #F3F1F1;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap; 
  cursor: pointer;
`;

const Header = props => {
  const {
    title,
    memos
  } = props;
  return (
    <Wrapper>
      {title} ({memos.length})
    </Wrapper>
  )
}


export default Header;