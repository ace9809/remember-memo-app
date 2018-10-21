/**
 * Created by Ace on 2018. 10. 14..
 */
/**
 * Created by Ace on 2018. 10. 13..
 */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import MemoList from '../../components/MemoList';
import { getMemos, getLabel, deleteLabel, updateLabel, getCurrentLabel, addLabelMemo, removeLabelMemo} from '../../actions';
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
  margin-top: 60px;
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

const MoveLabelListWrapper = styled.div`
  margin-top: 5px;
  height: 400px;
  overflow: scroll;
  -ms-overflow-style: none;
  &::-webkit-scrollbar { 
    display: none !important;
  }
`;

const MoveLabel = styled.div`
  margin-top: 10px;
  cursor: pointer;
`;

class LabelInfoTab extends Component {
  constructor() {
    super();
    this.state = {
      changeLabelModalIsOpen: false,
      moveMemoModalIsOpen: false,
      id: 'all',
      value: '',
      checked: false
    };
  }

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

  openChangeLabelModal = () => {
    this.setState({changeLabelModalIsOpen: true});
  };

  closeChangeLabelModal = () => {
    this.setState({changeLabelModalIsOpen: false});
  };

  openMoveMemoModal = () => {
    this.setState({moveMemoModalIsOpen: true});
  };

  closeMoveMemoModal = () => {
    this.setState({moveMemoModalIsOpen: false});
  };


  updateLabelOnChange = (event) => {
    this.setState({value: event.target.value});
  };

  updateLabelOnClick = () => {
    this.props.updateLabel(this.props.match.params.id, this.state.value);
    this.setState({value: ''});
    this.closeChangeLabelModal();
  };

  deleteLabel = () => {
    this.props.deleteLabel(this.props.label._id);
    this.props.history.push('/all');
  };

  addLabelMemoOnClick = (id) => {
    this.props.addLabelMemo(id, this.props.checkedMemos);
    this.props.history.push(`/${id}`);
    this.closeMoveMemoModal();
  };

  removeLabelMemoOnClick = (id) => {
    this.props.removeLabelMemo(id, this.props.checkedMemos, true);
    this.closeMoveMemoModal();
  };

  render() {
    const {
      match,
      labels,
      label,
      currentLabel,
      memos,
    } = this.props;
    return (
      <LabelInfoTabWrapper>
        <LabelInfoWrapper>
          <TitleWrapper>
            {
              match.params.id === 'all' ? '전체' : label.title
            }
          </TitleWrapper>
          <FooterWrapper>
            <CountWrapper>
              {
                match.params.id === 'all' ? memos && <div>{memos.length}개의 노트</div> :
                label.memos && <div>{label.memos.length}개의 노트</div>
              }
            </CountWrapper>
            <ButtonNavWrapper>
              {
                match.params.id !== 'all' &&
                <ButtonWrapper>
                  <button onClick={this.openChangeLabelModal}>
                    라벨 수정
                  </button>
                </ButtonWrapper>
              }
              {
                match.params.id !== 'all' &&
                <ButtonWrapper>
                  <button onClick={this.deleteLabel}>
                    라벨 삭제
                  </button>
                </ButtonWrapper>
              }
              {
                match.params.id === 'all' &&
                <ButtonWrapper>
                  <button onClick={this.openMoveMemoModal}>
                    라벨 이동
                  </button>
                </ButtonWrapper>
              }
              {
                match.params.id !== 'all' &&
                <ButtonWrapper>
                  <button onClick={() => this.removeLabelMemoOnClick(this.props.currentLabel)}>
                    라벨 해제
                  </button>
                </ButtonWrapper>
              }
            </ButtonNavWrapper>
          </FooterWrapper>
        </LabelInfoWrapper>
        <MemoListWrapper>
          {
            match.params.id === 'all' ? <MemoList memos={memos} currentLabel={currentLabel} /> :
            label.memos && <MemoList memos={label.memos} currentLabel={currentLabel} />
          }
        </MemoListWrapper>
        {
          this.state.changeLabelModalIsOpen &&
          <Modal
            open={this.state.changeLabelModalIsOpen}
            closeModal={this.closeChangeLabelModal}
          >
            <ModalWrapper>
              <ModalTitleWrapper>
                라벨 이름 변경
              </ModalTitleWrapper>
              <ModalContentWrapper>
                라벨은 공통된 주제를 중심으로 노트를 정리할 때 유용합니다. 라벨은 최대 10자릿수 까지 지정할 수 있습니다.
              </ModalContentWrapper>
              <InputWrapper>
                <Input type="text" maxLength="10" placeholder="Label name" value={this.state.value} onChange={this.updateLabelOnChange} />
              </InputWrapper>
              <ModalButtonWrapper>
                <ModalButton color={'#b3b3b3'} backgroundcolor={'#ffffff'} border={'1px solid #ededed'} onClick={this.closeChangeLabelModal}>
                  취소하기
                </ModalButton>
                <ModalButton color={'#ffffff'} backgroundColor={'#dcdfe3'} border={'0'} onClick={this.updateLabelOnClick}>
                  변경하기
                </ModalButton>
              </ModalButtonWrapper>
            </ModalWrapper>
          </Modal>
        }
        {
          this.state.moveMemoModalIsOpen &&
          <Modal
            open={this.state.moveMemoModalIsOpen}
            closeModal={this.closeMoveMemoModal}
          >
            <ModalWrapper>
              <ModalTitleWrapper>
                라벨 지정하기
              </ModalTitleWrapper>
              <ModalContentWrapper>
                지정할 라벨을 클릭해주세요.
              </ModalContentWrapper>
              <MoveLabelListWrapper>
                {
                  labels.map(label => {
                    return (
                      <MoveLabel
                        key={label._id}
                        onClick={() => this.addLabelMemoOnClick(label._id)}
                      >
                        {label.title}
                      </MoveLabel>
                    )
                  })
                }
              </MoveLabelListWrapper>
              <ModalButtonWrapper>
                <ModalButton color={'#b3b3b3'} backgroundcolor={'#ffffff'} border={'1px solid #ededed'} onClick={this.closeMoveMemoModal}>
                  취소하기
                </ModalButton>
              </ModalButtonWrapper>
            </ModalWrapper>
          </Modal>
        }
      </LabelInfoTabWrapper>
    )
  }
}

LabelInfoTab.propTypes = {
  match: PropTypes.object,
  labels: PropTypes.array,
  label: PropTypes.object,
  currentLabel: PropTypes.string,
  memos: PropTypes.array,
  getMemos: PropTypes.func,
  getLabel: PropTypes.func,
  deleteLabel: PropTypes.func,
  updateLabel: PropTypes.func,
  getCurrentLabel: PropTypes.func,
  addLabelMemo: PropTypes.func,
  removeLabelMemo: PropTypes.func
};

function mapStateToProps(state) {
  return {
    labels: state.labels.labels,
    label: state.labels.label,
    currentLabel: state.labels.currentLabel,
    memos: state.memos.memos,
    checkedMemos: state.labels.checkedMemos
  }
}

export default connect(mapStateToProps, { getMemos, getLabel, deleteLabel, updateLabel, getCurrentLabel, addLabelMemo, removeLabelMemo })(LabelInfoTab);