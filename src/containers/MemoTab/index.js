/**
 * Created by Ace on 2018. 10. 14..
 */
/**
 * Created by Ace on 2018. 10. 13..
 */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import { MdMenu } from 'react-icons/md'
import MemoList from '../../components/MemoList';
import { getMemos, getLabel} from '../../actions';

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
`;

const FooterWrapper = styled.div`
  margin-top: 80px;
  display: flex;
  justify-content: space-between;
`;

const CountWrapper = styled.div`
  display: flex;
  align-items: center;
  color: #a6a6a6;
  font-size: 15px;
`;

const IconNavWrapper = styled.div`
  display: flex;
  align-items: center;
`;

const IconWrapper = styled.div`
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

  render() {
    const {
      title,
      memos
    } = this.props.label;
    return (
      <MemoWrapper>
        <LabelInfoWrapper>
          <TitleWrapper>
            {
              this.props.match.params.id === 'all' ? <div>전체</div> : <div>{title}</div>
            }
          </TitleWrapper>
          <FooterWrapper>
            <CountWrapper>
              {
                this.props.match.params.id === 'all' ? this.props.memos && <div>{this.props.memos.length}개의 노트</div> : memos && <div>{memos.length}개의 노트</div>
              }
            </CountWrapper>
            <IconNavWrapper>
              <IconWrapper>
                <MdMenu />
              </IconWrapper>
            </IconNavWrapper>
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

export default connect(mapStateToProps, { getMemos, getLabel })(MemoTab);