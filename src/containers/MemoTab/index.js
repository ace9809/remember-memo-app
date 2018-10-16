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
import { getMemos, getLabel, deleteLabel} from '../../actions';

const MemoWrapper = styled.div`
  width: 100%:
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

class MemoTab extends Component {

  componentDidUpdate(prevProps) {
    if (this.props.match.params.id !== prevProps.match.params.id) {
      if (this.props.match.params.id === 'all') {
        this.props.getMemos();
      } else {
        this.props.getLabel(this.props.match.params.id);
      }
    }
  }

  deleteLabel = () => {
    this.props.deleteLabel(this.props.label._id);
  };

  render() {
    const {
      title,
      memos,
    } = this.props.label;
    return (
      <MemoWrapper>
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
              <ButtonWrapper>
                <button>
                  메모 수정
                </button>
              </ButtonWrapper>
              <ButtonWrapper>
                <button onClick={this.deleteLabel}>
                  메모 삭제
                </button>
              </ButtonWrapper>
            </ButtonNavWrapper>
          </FooterWrapper>
        </LabelInfoWrapper>
        <MemoListWrapper>
          {
            this.props.match.params.id === 'all' ? <MemoList memos={this.props.memos} /> : memos && <MemoList memos={memos} />
          }
        </MemoListWrapper>
      </MemoWrapper>
    )
  }
}

function mapStateToProps(state) {
  return {
    label: state.labels.label,
    memos: state.memos.memos
  }
}

export default connect(mapStateToProps, { getMemos, getLabel, deleteLabel })(MemoTab);