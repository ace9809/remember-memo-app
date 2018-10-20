/**
 * Created by Ace on 2018. 10. 14..
 */
import React, {Component} from 'react';
import Moment from 'react-moment';
import { connect } from 'react-redux';
import 'moment-timezone';
import styled from 'styled-components';
import { Link } from "react-router-dom";
import { checkedMemos } from '../../actions';

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

  checkboxOnClick = () => {
    this.setState({checked: !this.state.checked})
    this.props.checkedMemos(this.props.memo, !this.state.checked);
  };

  render () {
    const createPath = (memoId) => {
      return `/${this.props.currentLabel}/${memoId}`
    };
    return (
      <Wrapper>
        <input type="checkbox" checked={this.state.checked} onClick={this.checkboxOnClick}/>
        <MemoInfoWrapper>
          <StyledLink
            to={createPath(this.props.memo._id)}
            key={this.props.memo._id}
          >
            <TitleWrapper>
              {this.props.memo.title}
            </TitleWrapper>
            <CreatedWrapper>
              <Moment format="YYYY.MM.DD">
                {this.props.memo.createdAt}
              </Moment>
            </CreatedWrapper>
            <ContentWrapper>
              {this.props.memo.content}
            </ContentWrapper>
          </StyledLink>
        </MemoInfoWrapper>
      </Wrapper>
    )
  }
}


export default connect(null, { checkedMemos })(Memo);