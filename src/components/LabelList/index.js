/**
 * Created by Ace on 2018. 10. 13..
 */
import React, { Component } from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  width: 100%;
`;

class LabelList extends Component {
  render () {
    if (this.props.labels.length === 0) {
      return (
        <Wrapper>
          라벨이 없습니다.
        </Wrapper>
      )
    }
    return (
      <Wrapper>
        {
          this.props.labels.map(label => {
            console.log('label', label);
            return(
              <div key={label._id}>{label.title}{label.memos.length}</div>
            )
          })
        }
      </Wrapper>
    )


  }
}

export default LabelList;