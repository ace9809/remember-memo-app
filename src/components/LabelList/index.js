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
  height: 100vh;
  overflow:scroll; 
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

class LabelList extends Component {
  render () {
    if (this.props.labels.length === 0) {
      return (
        <Wrapper>
          라벨이 없습니다.
        </Wrapper>
      )
    }
    return (
      <Wrapper>
        <StyledLink
          to="/all"
        >
          <Label
            title={'전체'}
            memos={this.props.memos}
          >
            전체
          </Label>
        </StyledLink>
        {
          this.props.labels.map(label => {
            return(
              <StyledLink
                to={`/${label._id}`}
                key={label._id}
              >
                <Label
                  title={label.title}
                  memos={label.memos}
                >
                </Label>
              </StyledLink>
            )
          })
        }
      </Wrapper>
    )


  }
}

LabelList.propTypes = {
  memos: PropTypes.array,
  labels: PropTypes.array,
};

LabelList.defaultProps = {
  memos: [],
  labels: [],
};

export default LabelList;