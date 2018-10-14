/**
 * Created by Ace on 2018. 10. 14..
 */
/**
 * Created by Ace on 2018. 10. 13..
 */
import React, { Component } from 'react';
import styled from 'styled-components';

const MemoWrapper = styled.div`
  width: 100%:
  margin-right: 10px;
`;

const LabelInfoWrapper = styled.div`
  height: 140px;
  border-left: 1px solid #F3F1F1;
  border-bottom: 1px solid #F3F1F1;
`;

class MemoTab extends Component {
  constructor(props) {
    super(props);
    this.state = {id : 'all'}

  }

  static getDerivedStateFromProps(props, state) {
    if (props.match.params.id !== state.id) {
      return {
        id: props.match.params.id,
      };
    }
    return state.id;
  }

  render() {
    return (
      <MemoWrapper>
        <LabelInfoWrapper>
          아아아
        </LabelInfoWrapper>
      </MemoWrapper>
    );
  }
}

export default MemoTab;