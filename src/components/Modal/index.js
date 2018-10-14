/**
 * Created by Ace on 2018. 10. 14..
 */
import React, { Component } from 'react';
import ReactModal from 'react-modal';
import styled from 'styled-components';

const ModalWrapper = styled.div`
  width: 100%;
`;

const ModalTitleWrapper = styled.div`
  font-size: 20px;
  font-weight: bold;
`;

const ModalContentWrapper = styled.div`
  margin-top: 15px;
  font-color: gray;
`;

const InputWrapper = styled.div`
  margin-top: 15px;
`;

const Input = styled.input`
  width: 100%;
  height: 38px;
  box-sizing: border-box;
  border: 2px solid black;
  border-radius: 4px;
  padding: 0 8px;
  outline: 0;
`;

const ButtonWrapper = styled.div`
  margin-top: 20px;
  padding-top: 10px;
  display: flex;
  justify-content: flex-end;
`;

const Button = styled.button`
  border-radius: 6px;
  width: 80px;
  height: 40px;
  cursor: pointer;
  margin-left: 20px;
  background-color: ${(props) => props.backgroundColor};
  color: ${(props) => props.color};
  outline: 0;
  border: ${(props) => props.border};
`;

const customStyles = {
  content : {
    top                   : '50%',
    left                  : '50%',
    right                 : 'auto',
    bottom                : 'auto',
    marginRight           : '-50%',
    transform             : 'translate(-50%, -50%)'
  }
};

ReactModal.setAppElement('#root')

class Modal extends Component {
  constructor() {
    super();

    this.state = {
      value: ''
    };
  }

  closeModal = () => {
    this.props.closeModal();
  };

  handleChange = (event) => {
    this.setState({value: event.target.value});
  }

  render() {
    return (
      <ReactModal
        isOpen={this.props.open}
        onRequestClose={this.closeModal}
        contentLabel="Example Modal"
        style={customStyles}
      >
        <ModalWrapper>
          <ModalTitleWrapper>
            새 라벨 만들기
          </ModalTitleWrapper>
          <ModalContentWrapper>
            라벨은 공통된 주제를 중심으로 노트를 정리할 때 유용합니다. <br />
            라벨은 최대 15자릿수 까지 지정할 수 있습니다.
          </ModalContentWrapper>
          <InputWrapper>
            <Input type="text" maxLength="15" placeholder="Label name" value={this.state.value} onChange={this.handleChange} />
          </InputWrapper>
          <ButtonWrapper>
            <Button color={'#b3b3b3'} backgroundcolor={'#ffffff'} border={'1px solid #ededed'} onClick={this.closeModal}>
              취소하기
            </Button>
            <Button color={'#ffffff'} backgroundColor={'#dcdfe3'} border={'0'}>
              작성하기
            </Button>
          </ButtonWrapper>
        </ModalWrapper>
      </ReactModal>
    )
  }
}

export default Modal;