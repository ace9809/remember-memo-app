/**
 * Created by Ace on 2018. 10. 14..
 */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addLabel, addMemo } from '../../actions';
import styled from 'styled-components';
import { FaEdit, FaTags } from 'react-icons/fa'
import HeaderLogo from '../../assets/headerLogo.png';
import Modal from '../../components/Modal';

const HeaderWrapper = styled.div`
  width: 100%;
  height: 77px;
  border-bottom: 1px solid #F3F1F1;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const LogoWrapper = styled.div`
  margin-left: 15px;
  display: flex;
  align-items: center;
`;

const NavWrapper = styled.div`
  margin-right: 40px;
  display: flex;
`;

const IconWrapper = styled.div`
  width: 100%;
  height: 40px;
  cursor: pointer;
  display: flex;
  align-items: center;
`;

const ColorFaEdit = styled(FaEdit)`
  color: black;
  width: 30px;
  height: 50px;
  margin-right: 30px;
`;

const ColorTags = styled(FaTags)`
  color: black;
  width: 30px;
  height: 40px;
`;

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

class Header extends Component {
  constructor() {
    super();

    this.state = {
      modalIsOpen: false,
      value: ''
    };
  }

  addMemoOnClick = () => {
    this.props.addMemo();
  };

  openModal = () => {
    this.setState({modalIsOpen: true});
  };

  closeModal = () => {
    this.setState({modalIsOpen: false});
  };

  handleChange = (event) => {
    this.setState({value: event.target.value});
  };

  handleClick = () => {
    this.props.addLabel(this.state.value);
    this.setState({value: ''});
    this.closeModal();
  };

  render() {
    return (
      <HeaderWrapper>
        <LogoWrapper>
          <img src={HeaderLogo} height='50px' />
        </LogoWrapper>
        <NavWrapper>
          <IconWrapper>
            <ColorFaEdit onClick={this.addMemoOnClick} />
          </IconWrapper>
          <IconWrapper>
            <ColorTags onClick={this.openModal} />
          </IconWrapper>
        </NavWrapper>
        {
          this.state.modalIsOpen &&
          <Modal
            open={this.state.modalIsOpen}
            submitModal={this.submitModal}
            closeModal={this.closeModal}
          >
            <ModalWrapper>
              <ModalTitleWrapper>
                새 라벨 만들기
              </ModalTitleWrapper>
              <ModalContentWrapper>
                라벨은 공통된 주제를 중심으로 노트를 정리할 때 유용합니다. 라벨은 최대 10자릿수 까지 지정할 수 있습니다.
              </ModalContentWrapper>
              <InputWrapper>
                <Input type="text" maxLength="10" placeholder="Label name" value={this.state.value} onChange={this.handleChange} />
              </InputWrapper>
              <ButtonWrapper>
                <Button color={'#b3b3b3'} backgroundcolor={'#ffffff'} border={'1px solid #ededed'} onClick={this.closeModal}>
                  취소하기
                </Button>
                <Button color={'#ffffff'} backgroundColor={'#dcdfe3'} border={'0'} onClick={this.handleClick}>
                  작성하기
                </Button>
              </ButtonWrapper>
            </ModalWrapper>

          </Modal>
        }
      </HeaderWrapper>
    )
  }
}

export default connect(null, { addLabel, addMemo })(Header);