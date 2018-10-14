/**
 * Created by Ace on 2018. 10. 13..
 */
import React, { Component } from 'react';
import styled from 'styled-components';
import Header from '../../containers/Header';
import Label from '../../containers/Label';

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
      <Wrapper>
        <Header />
        <ContentWrapper>
          <LableListWrapper>
            <Label />
          </LableListWrapper>
          <MemoListWrapper>
            asf
          </MemoListWrapper>
          <MemoWrapper>
            asdf
          </MemoWrapper>
        </ContentWrapper>
      </Wrapper>
    );
  }
}

export default App;
