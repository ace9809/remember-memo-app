/**
 * Created by Ace on 2018. 10. 17..
 */
import React, { Component } from 'react';
import styled from 'styled-components';

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
  render() {
    return (
      <MemoWrapper>
        <ButtonWrapper>
          <Button>삭제하기</Button>
        </ButtonWrapper>
        <TitleWrapper>
          <TitleInput
            type="text"
          />
        </TitleWrapper>
        <EditorWrapper>
          <TextArea />
        </EditorWrapper>
      </MemoWrapper>
    )
  }
}

export default MemoTab;