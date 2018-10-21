/**
 * Created by Ace on 2018. 10. 13..
 */
import React, { Component } from 'react';
import styled from 'styled-components';
import { BrowserRouter as Router, Route } from "react-router-dom";
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getCurrentLabel } from '../../actions';
import Header from '../../containers/Header';
import LabelTab from '../../containers/LabelTab';
import LabelInfoTab from '../../containers/LabelInfoTab';
import MemoTab from '../../containers/MemoTab';

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
`;

const ContentWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
`;

const LableListWrapper = styled.div`
  flex-grow: 0;
`;

const LabelInfoTabWrapper = styled.div`
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
              <LabelInfoTabWrapper>
                <Route
                  path="/:id"
                  component={LabelInfoTab}
                />
              </LabelInfoTabWrapper>
              <MemoWrapper>
                <Route
                  path={`/${this.props.currentLabel}/:id`}
                  component={MemoTab}
                />
              </MemoWrapper>
            </ContentWrapper>
          </Wrapper>
      </Router>
    );
  }
}

App.propTypes = {
  currentLabel: PropTypes.string,
  getCurrntLabel: PropTypes.func
};

function mapStateToProps(state) {
  return {
    currentLabel: state.labels.currentLabel
  }
}

export default connect(mapStateToProps, { getCurrentLabel })(App);
