/**
 * Created by Ace on 2018. 10. 13..
 */
import React, { Component } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import Label from '../Label';

const Wrapper = styled.div`
  width: 100%;
  border: 1px solid #F3F1F1;
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
        <Label
          title={'전체'}
          memos={this.props.memos}
        >
        전체
        </Label>
        {
          this.props.labels.map(label => {
            console.log('label', label);
            return(
              <Label
                key={label._id}
                title={label.title}
                memos={label.memos}
              >
              </Label>
            )
          })
        }
      </Wrapper>
    )


  }
}

LabelList.propTypes = {
  memos: PropTypes.array,
  labels: PropTypes.array,
};

LabelList.defaultProps = {
  memos: [],
  labels: [],
};

export default LabelList;