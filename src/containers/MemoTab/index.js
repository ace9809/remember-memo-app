/**
 * Created by Ace on 2018. 10. 17..
 */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import Moment from 'react-moment';
import PropTypes from 'prop-types';
import _ from 'lodash';
import { getMemo, deleteMemo, removeLabelMemo, updateMemo } from '../../actions';

const MemoWrapper = styled.div`
  width: 100%;
`;

const ButtonWrapper = styled.div`
  margin: 10px 25px 0 25px;
  display: flex;
  justify-content: flex-end;
`;

const TitleWrapper = styled.div`
  display: flex;
`;

const UpdatedWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  margin: 40px 25px;
  color: #A2A4A5;
  font-weight: 10px;
`;

const EditorWrapper = styled.div`
  padding: 0 25px 0 25px;
`;

const TitleInput = styled.input`
  margin: 10px 25px;
  width: 100%;
  display: block;
  border: none;
  padding: 10px 0;
  border-bottom: solid 1px black;
  background-repeat: no-repeat;
  color: black;
  &:focus, &:valid {
  box-shadow: none;
  outline: none;
  background-position: 0 0;
  }
`;

const Button = styled.button`
  border-radius: 6px;
  width: 80px;
  height: 40px;
  cursor: pointer;
  background-color: #d9534f;
  outline: 0;
  border: 0;
  color: white;
`;

const TextArea = styled.textarea`
  width: 100%;
  height: 300px;
`;

class MemoTab extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: '',
      title: '',
      content: '',
      edit: false,
      updatedAt: ''
    }
  }

  static getDerivedStateFromProps(props, state) {
    if (props.memos.length !== 0) {
      //메모 리스트에서 메모를 가져온다.
      const memo = props.memos.filter(memo => memo._id === props.match.params.id)[0];
      if (memo) {
        if (!state.edit) {
          //메모가 수정중이 아닐 때는 state를 변경하지 않도록 한다.
          return {
            title: memo.title,
            content: memo.content,
            updatedAt: memo.updatedAt
          };
        }
      }
    }
    return null;
  }

  titleOnChange = (event) => {
    this.setState({
      title: event.target.value,
      edit: true
    });

    this.debounceUpdateMemo();
  };

  contentOnChange = (event) => {
    this.setState({
      content: event.target.value,
      edit: true
    });

    this.debounceUpdateMemo();
  };

  deleteMemoOnClick = () => {
    // 메모를 삭제하기 위해 deleteMemo를 dispatch하여 메모를 삭제한다.
    this.props.deleteMemo(this.props.match.params.id);
    if (this.props.currentLabel === 'all') {
      // 라벨이 all일 경우엔 all로 라우트를 바꿔준다.
      this.props.history.push('/all');
    } else {
      // 라벨이 all이 아닐 경우에는 메모 삭제 후 현재 라벨에 포함되어있던 삭제된 메모도 제거 해준 뒤 해당 라벨로 route를 바꿔준다.
      this.props.removeLabelMemo(this.props.currentLabel, [this.props.match.params.id]);
      this.props.history.push(`/${this.props.currentLabel}`);
    }

  };

  updateMemo = () => {
    //라벨을 수정 후 updateMemo를 dispatch하여 메모를 수정 해준다.
    this.props.updateMemo(this.props.match.params.id, {'title': this.state.title, 'content': this.state.content}, this.props.currentLabel)
    this.setState({
      edit: false
    });
  };

  debounceUpdateMemo = _.debounce(function() {
    this.updateMemo();
  }, 1000);

  render() {
    return (
      <MemoWrapper>
        <ButtonWrapper>
          <Button onClick={this.deleteMemoOnClick}>삭제하기</Button>
        </ButtonWrapper>
        <TitleWrapper>
          <TitleInput
            type="text"
            value={this.state.title}
            onChange={this.titleOnChange}
          />
        </TitleWrapper>
        <UpdatedWrapper>
          <Moment format="YYYY.MM.DD">
            {this.state.updatedAt}
          </Moment>
        </UpdatedWrapper>
        <EditorWrapper>
          <TextArea
            value={this.state.content}
            onChange={this.contentOnChange}
          />
        </EditorWrapper>
      </MemoWrapper>
    )
  }
}

MemoTab.propTypes = {
  getMemo: PropTypes.func,
  deletMemo: PropTypes.func,
  updateMemo: PropTypes.func,
  removeLabelMemo: PropTypes.func
};

//reducer의 state를 props로 바꿔준다.
function mapStateToProps(state) {
  return {
    currentLabel: state.labels.currentLabel,
    memos: state.memos.memos,
    isLoading: state.memos.isLoading
  }
}

export default connect(mapStateToProps, { getMemo, deleteMemo, removeLabelMemo, updateMemo })(MemoTab);