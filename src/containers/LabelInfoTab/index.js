/**
 * Created by Ace on 2018. 10. 14..
 */
/**
 * Created by Ace on 2018. 10. 13..
 */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import MemoList from '../../components/MemoList';
import { getMemos, getLabel, deleteLabel, updateLabel, getCurrentLabel} from '../../actions';
import Modal from '../../components/Modal';

const LabelInfoTabWrapper = styled.div`
  width: 100%:
  height: 100%;
  border-right: 1px solid #F3F1F1;
`;

const LabelInfoWrapper = styled.div`
  height: 140px;
  padding: 20px;
  border-left: 1px solid #F3F1F1;
  border-bottom: 1px solid #F3F1F1;
`;

const MemoListWrapper = styled.div`
  border-bottom: 1px solid #F3F1F1;
`;

const TitleWrapper = styled.div`
  margin-top: 15px;
  font-size: 20px;
  width: 300px;
  height: 30px;
  font-weight: bold;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap
`;

const FooterWrapper = styled.div`
  margin-top: 80px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const CountWrapper = styled.div`
  color: #a6a6a6;
  font-size: 15px;
`;

const ButtonNavWrapper = styled.div`
  display: flex;
`;

const ButtonWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-left: 20px;
  font-size: 25px;
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

const ModalButtonWrapper = styled.div`
  margin-top: 20px;
  padding-top: 10px;
  display: flex;
  justify-content: flex-end;
`;

const ModalButton = styled.button`
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

class LabelInfoTab extends Component {
  constructor() {
    super();

    this.state = {
      modalIsOpen: false,
      id: 'all',
      value: ''
    };
  }

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
    this.props.updateLabel(this.props.match.params.id, this.state.value);
    this.closeModal();
  };

  static getDerivedStateFromProps(props, state) {
    props.getCurrentLabel(props.match.params.id);
    if (state.id !== props.match.params.id) {
      if (props.match.params.id !== 'all') {
        props.getLabel(props.match.params.id);
      }
    }

    return {
      id: props.match.params.id
    };
  }

  deleteLabel = () => {
    this.props.deleteLabel(this.props.label._id);
    this.props.history.push('/all');
  };

  render() {
    const {
      title,
      memos,
    } = this.props.label;
    return (
      <LabelInfoTabWrapper>
        <LabelInfoWrapper>
          <TitleWrapper>
            {
              this.props.match.params.id === 'all' ? '전체' : title
            }
          </TitleWrapper>
          <FooterWrapper>
            <CountWrapper>
              {
                this.props.match.params.id === 'all' ? this.props.memos && <div>{this.props.memos.length}개의 노트</div> : memos && <div>{memos.length}개의 노트</div>
              }
            </CountWrapper>
            <ButtonNavWrapper>
              {
                this.props.match.params.id !== 'all' &&
                <ButtonWrapper>
                  <button onClick={this.openModal}>
                    라벨 수정
                  </button>
                </ButtonWrapper>
              }
              {
                this.props.match.params.id !== 'all' &&
                <ButtonWrapper>
                  <button onClick={this.deleteLabel}>
                    라벨 삭제
                  </button>
                </ButtonWrapper>
              }
              <ButtonWrapper>
                <button onClick={this.deleteLabel}>
                  라벨 이동
                </button>
              </ButtonWrapper>
            </ButtonNavWrapper>

          </FooterWrapper>
        </LabelInfoWrapper>
        <MemoListWrapper>
          {
            this.props.match.params.id === 'all' ? <MemoList memos={this.props.memos} currentLabel={this.props.currentLabel} /> : memos && <MemoList memos={memos} currentLabel={this.props.currentLabel}/>
          }
        </MemoListWrapper>
        {
          this.state.modalIsOpen &&
          <Modal
            open={this.state.modalIsOpen}
            submitModal={this.submitModal}
            closeModal={this.closeModal}
          >
            <ModalWrapper>
              <ModalTitleWrapper>
                라벨 이름 변경
              </ModalTitleWrapper>
              <ModalContentWrapper>
                라벨은 공통된 주제를 중심으로 노트를 정리할 때 유용합니다. 라벨은 최대 15자릿수 까지 지정할 수 있습니다.
              </ModalContentWrapper>
              <InputWrapper>
                <Input type="text" maxLength="15" placeholder="Label name" value={this.state.value} onChange={this.handleChange} />
              </InputWrapper>
              <ModalButtonWrapper>
                <ModalButton color={'#b3b3b3'} backgroundcolor={'#ffffff'} border={'1px solid #ededed'} onClick={this.closeModal}>
                  취소하기
                </ModalButton>
                <ModalButton color={'#ffffff'} backgroundColor={'#dcdfe3'} border={'0'} onClick={this.handleClick}>
                  변경하기
                </ModalButton>
              </ModalButtonWrapper>
            </ModalWrapper>
          </Modal>
        }
      </LabelInfoTabWrapper>
    )
  }
}

function mapStateToProps(state) {
  return {
    label: state.labels.label,
    currentLabel: state.labels.currentLabel,
    memos: state.memos.memos
  }
}

export default connect(mapStateToProps, { getMemos, getLabel, deleteLabel, updateLabel, getCurrentLabel })(LabelInfoTab);