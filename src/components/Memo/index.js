/**
 * Created by Ace on 2018. 10. 14..
 */
import React, {Component} from 'react';
import Moment from 'react-moment';
import 'moment-timezone';
import styled from 'styled-components';
import { Link } from "react-router-dom";

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

  static getDerivedStateFromProps(props, state) {
    if (props.allChecked !== state.checked) {
      return {
        checked: props.allChecked
      };
    }
    return null;
  }

  checkboxOnClick = () => {
    this.setState({checked: !this.state.checked})
  };

  render () {
    const createPath = (memoId) => {
      return `/${this.props.currentLabel}/${memoId}`
    };
    console.log('메모 프롭', this.state);
    return (
      <Wrapper>
        <input type="checkbox" checked={this.state.checked} onClick={this.checkboxOnClick}/>
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
      </Wrapper>
    )
  }
}


export default Memo;