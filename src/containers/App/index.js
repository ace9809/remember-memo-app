/**
 * Created by Ace on 2018. 10. 13..
 */
import React, { Component } from 'react';
import styled from 'styled-components';
import { BrowserRouter as Router, Route, IndexRoute } from "react-router-dom";
import { connect } from 'react-redux';
import { getLabels, getMemos } from '../../actions';
import Header from '../../containers/Header';
import LabelTab from '../../containers/LabelTab';
import MemoTab from '../../containers/MemoTab';

const Wrapper = styled.div`
  width: 100%;
`;

const ContentWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
`;

const LableListWrapper = styled.div`
  flex-grow: 0;
`;

const MemoListWrapper = styled.div`
  flex-grow: 1;
`;

const MemoWrapper = styled.div`
  flex-grow: 2;
`;

class App extends Component {
  render() {
    return (
      <Router>
          <Wrapper>
            <Header />
            <ContentWrapper>
              <LableListWrapper>
                <LabelTab />
              </LableListWrapper>
              <MemoListWrapper>
                <Route
                  path={'/all'}
                  render={props => <MemoTab id={'all'} />}
                />
                {
                  this.props.labels.map(label => {
                    return (
                      <Route
                        key={label._id}
                        path={`/${label._id}`}
                        render={props => <MemoTab id={label._id} />}
                      />
                    )
                  })
                }
              </MemoListWrapper>
              <MemoWrapper>
              </MemoWrapper>
            </ContentWrapper>
          </Wrapper>
      </Router>
    );
  }
}

function mapStateToProps(state) {
  return {
    labels: state.labels.labels,
    memos: state.memos.memos
  }
}

export default connect(mapStateToProps, { getLabels, getMemos })(App);
