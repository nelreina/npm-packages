import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

import { Container, Title, Paragraph } from './styled-app';
class App extends Component {
  render() {
    return (
      <Container>
        <Title>create-react-app</Title>
        <Paragraph>--scripts-version</Paragraph>
        <Title mint> @nelreina/react-scripts</Title>
      </Container>
    );
  }
}

export default withRouter(connect(s => s)(App));
