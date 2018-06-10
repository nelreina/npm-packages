import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

import { Container, Title } from './styled-app';
class App extends Component {
  render() {
    return (
      <Container>
        <Title>nr-react-scripts</Title>
      </Container>
    );
  }
}

export default withRouter(connect(s => s)(App));
