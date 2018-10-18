/**
 * Created by Ace on 2018. 10. 17..
 */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import _ from 'lodash';
import { getMemo, deleteMemo, deleteLabelMemo, updateMemo } from '../../actions';

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

const EditorWrapper = styled.div`
  padding: 40px 25px;
`;

const TitleInput = styled.input`
  margin: 40px 25px;
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
    console.log('프롟', this.props);
    this.state = {
      id: 'all',
      title: '',
      content: ''
    };
  }

  componentDidMount() {
    this.props.getMemo(this.props.match.params.id);
      this.setState({
        title: this.props.memo.title,
        content: this.props.memo.content
      })
  }

  static getDerivedStateFromProps(props, state) {
    console.log('새로고침', props);
    if (state.id !== props.match.params.id) {
      if (props.match.params.id !== 'all') {
        props.getMemo(props.match.params.id);
      }

      return {
        id: props.match.params.id,
        title: props.memo.title,
        content: props.memo.content
      };
    }

    return null;

  }

  titleOnChange = (event) => {
    this.setState({
      title: event.target.value
    });

    this.debounceUpdateMemo();
  };

  contentOnChange = (event) => {
    this.setState({
      content: event.target.value
    })

    this.debounceUpdateMemo();
  };

  deleteMemoOnClick = () => {
    if (this.props.currentLabel === 'all') {
      this.props.deleteMemo(this.props.match.params.id);
      this.props.history.push('/all');
    } else {
      this.props.deleteLabelMemo(this.props.currentLabel, [this.props.match.params.id]);
    }

  };

  updateMemo = () => {
    this.props.updateMemo(this.props.match.params.id, {'title': this.state.title, 'content': this.state.content})
  };

  debounceUpdateMemo = _.debounce(function() {
    this.updateMemo();
  }, 1000);

  render() {
    const {
      title,
      content,
      updatedAt
    } = this.props.memo;
    return (
      <MemoWrapper>
        <ButtonWrapper>
          <Button onClick={this.deleteMemoOnClick}>삭제하기</Button>
        </ButtonWrapper>
        <TitleWrapper>
          <TitleInput
            type="text"
            value={this.state.title || ''}
            onChange={this.titleOnChange}
          />
        </TitleWrapper>
        <EditorWrapper>
          <TextArea
            value={this.state.content || ''}
            onChange={this.contentOnChange}
          />
        </EditorWrapper>
      </MemoWrapper>
    )
  }
}

function mapStateToProps(state) {
  console.log('state', state)
  return {
    currentLabel: state.labels.currentLabel,
    memo: state.memos.memo
  }
}

export default connect(mapStateToProps, { getMemo, deleteMemo, deleteLabelMemo, updateMemo })(MemoTab);