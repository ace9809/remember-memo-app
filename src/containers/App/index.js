/**
 * Created by Ace on 2018. 10. 13..
 */
import React, { Component } from 'react';
import styled from 'styled-components';
import { BrowserRouter as Router, Route, Redirect } from "react-router-dom";
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
  flex-grow: 0.5;
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
                  path="/:id"
                  component={MemoTab}
                />
                <Redirect from='/' to='/all'/>
              </MemoListWrapper>
              <MemoWrapper>
              </MemoWrapper>
            </ContentWrapper>
          </Wrapper>
      </Router>
    );
  }
}

export default App;
