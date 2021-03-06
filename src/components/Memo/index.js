/**
 * Created by Ace on 2018. 10. 14..
 */
import React, { Component } from 'react';
import Moment from 'react-moment';
import { connect } from 'react-redux';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { Link } from "react-router-dom";
import { checkedMemos, unCheckedMemos } from '../../actions';

const Wrapper = styled.div`
  height: 160px;
  border-bottom: 1px solid #F3F1F1;
  cursor: pointer;
  
  &:hover {
    background-color: #CAC7C7;
  }
`;

const MemoInfoWrapper = styled.div`
  padding: 10px;
`;

const TitleWrapper = styled.div`
  width: 300px;
  height: 20px;
  font-weight: bold;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap
`;

const CreatedWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  font-size: 10px;
  color: #a6a6a6;
  margin-top: 10px;
`;

const ContentWrapper = styled.div`
  width: 300px;
  height: 20px;
  margin: 30px 0 10px 0;
  padding: 5px 0;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap
`;

const StyledLink = styled(Link)`
  &:link {text-decoration: none; color: black;}
  &:visited {text-decoration: none; color: black;}
  &:active {text-decoration: none; color: black;}
  &:hover {text-decoration: none; color: black;}
`;

class Memo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      checked: false
    }
  }

  checkboxOnChange = () => {
    this.setState({checked: !this.state.checked});
    if (!this.state.checked)
      this.props.checkedMemos(this.props.memo, this.state.checked);
    else
      this.props.unCheckedMemos(this.props.memo, this.state.checked);
  };

  render () {
    const createPath = (memoId) => {
      return `/${this.props.currentLabel}/${memoId}`
    };

    const {
      memo
    } = this.props;

    return (
      <Wrapper>
        <input type="checkbox" checked={this.state.checked} onChange={this.checkboxOnChange}/>
        <MemoInfoWrapper>
          <StyledLink
            to={createPath(memo._id)}
            key={memo._id}
          >
            <TitleWrapper>
              {memo.title}
            </TitleWrapper>
            <CreatedWrapper>
              <Moment format="YYYY.MM.DD">
                {memo.createdAt}
              </Moment>
            </CreatedWrapper>
            <ContentWrapper>
              {memo.content}
            </ContentWrapper>
          </StyledLink>
        </MemoInfoWrapper>
      </Wrapper>
    )
  }
}

Memo.propTypes = {
  memo: PropTypes.object,
  checkedMemos: PropTypes.func,
  unCheckedMemos: PropTypes.func
};

export default connect(null, { checkedMemos, unCheckedMemos })(Memo);