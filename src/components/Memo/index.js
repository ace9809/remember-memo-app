/**
 * Created by Ace on 2018. 10. 14..
 */
import React from 'react';
import Moment from 'react-moment';
import 'moment-timezone';
import styled from 'styled-components';

const Wrapper = styled.div`
  height: 120px;
  border-bottom: 1px solid #F3F1F1;
  padding: 20px;
  cursor: pointer;
  
  &:hover {
    background-color: #CAC7C7;
  }
`;

const TitleWrapper = styled.div`
  display:inline-block;
  width: 300px;
  height: 30px;
  font-weight: bold;
  overflow: hidden;
  display: flex;
  align-items: center;
`;

const CreatedWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  font-size: 10px;
  color: #a6a6a6;
`;

const ContentWrapper = styled.div`
  width: 300px;
  height: 55px;
  margin: 20px 0 10px 0;
  padding: 5px 0;
  overflow: hidden;
`;

const Header = props => {
  const {
    title,
    content,
    createdAt
  } = props.memo;
  return (
    <Wrapper>
      <TitleWrapper>
        {title}
      </TitleWrapper>
      <CreatedWrapper>
        <Moment format="YYYY.MM.DD">
          {createdAt}
        </Moment>
      </CreatedWrapper>
      <ContentWrapper>
        {content}
      </ContentWrapper>
    </Wrapper>
  )
}


export default Header;