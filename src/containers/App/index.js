/**
 * Created by Ace on 2018. 10. 13..
 */
import React, { Component } from 'react';
import styled from 'styled-components';
import Header from '../../components/Header';
import Label from '../../containers/Label';

const Wrapper = styled.div`
  width: 100%;
`;

class App extends Component {
  render() {
    return (
      <Wrapper>
        <Header />
        <Label />
      </Wrapper>
    );
  }
}

export default App;
