/**
 * Created by Ace on 2018. 10. 14..
 */
/**
 * Created by Ace on 2018. 10. 13..
 */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import { getMemos, getLabel} from '../../actions';

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

  componentDidUpdate(props){
    if (this.props.match.params.id !== props.match.params.id) {
      props.getLabel(this.props.match.params.id);
    }
  }

  render() {
    console.log('props', this.props.label);
    return (
      <MemoWrapper>
        <LabelInfoWrapper>
          {this.props.label.title}
        </LabelInfoWrapper>
      </MemoWrapper>
    );
  }
}

function mapStateToProps(state) {
  return {
    label: state.labels.label
  }
}

export default connect(mapStateToProps, { getMemos, getLabel })(MemoTab);