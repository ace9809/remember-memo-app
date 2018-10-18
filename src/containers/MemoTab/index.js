/**
 * Created by Ace on 2018. 10. 17..
 */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import { getMemo, deleteMemo, deleteLabelMemo } from '../../actions';

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
      id: this.props.match.params.id
    };
  }

  componentDidMount() {
    this.props.getMemo(this.props.match.params.id);
  }

  static getDerivedStateFromProps(props, state) {
    if (state.id !== props.match.params.id) {
      if (props.match.params.id !== 'all') {
        props.getMemo(props.match.params.id);
      }
    }

    return {
      id: props.match.params.id
    };
  }

  deleteMemoOnClick = () => {
    if (this.props.currentLabel === 'all') {
      this.props.deleteMemo(this.props.match.params.id);
      this.props.history.push('/all');
    } else {
      this.props.deleteLabelMemo(this.props.currentLabel, [String(this.props.match.params.id)]);
    }

  };

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
            value={title}
          />
        </TitleWrapper>
        <EditorWrapper>
          <TextArea
            value={content}
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

export default connect(mapStateToProps, { getMemo, deleteMemo, deleteLabelMemo })(MemoTab);