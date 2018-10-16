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
  color: #777777;
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
    width                 : '390px',
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
  };

  handleClick = () => {
    this.props.submitModal(this.state.value);
    this.props.closeModal();
  };

  render() {
    const {
      title,
      content,
      leftButtonText,
      rightButtonText
    } = this.props;
    return (
      <ReactModal
        isOpen={this.props.open}
        onRequestClose={this.closeModal}
        contentLabel="Example Modal"
        style={customStyles}
      >
        <ModalWrapper>
          <ModalTitleWrapper>
            {title}
          </ModalTitleWrapper>
          <ModalContentWrapper>
            {content}
          </ModalContentWrapper>
          <InputWrapper>
            <Input type="text" maxLength="15" placeholder="Label name" value={this.state.value} onChange={this.handleChange} />
          </InputWrapper>
          <ButtonWrapper>
            <Button color={'#b3b3b3'} backgroundcolor={'#ffffff'} border={'1px solid #ededed'} onClick={this.closeModal}>
              {leftButtonText}
            </Button>
            <Button color={'#ffffff'} backgroundColor={'#dcdfe3'} border={'0'} onClick={this.handleClick}>
              {rightButtonText}
            </Button>
          </ButtonWrapper>
        </ModalWrapper>
      </ReactModal>
    )
  }
}

export default Modal;