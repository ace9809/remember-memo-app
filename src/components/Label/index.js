/**
 * Created by Ace on 2018. 10. 14..
 */
import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const Wrapper = styled.div`
  width: 200px;
  border-bottom: 1px solid #F3F1F1;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap; 
  cursor: pointer;
  border: ${props => props.currentLabel ? '2px solid black' : ''}
`;

const Label = props => {
  const {
    title,
    memos,
    id,
    currentLabel
  } = props;

  return (
    <Wrapper currentLabel={id === currentLabel}>
      {title} ({memos.length})
    </Wrapper>
  )
};

Label.propTypes = {
  title: PropTypes.string,
  memos: PropTypes.string,
  currentLabel: PropTypes.object,
  memos: PropTypes.object,
};

export default Label;