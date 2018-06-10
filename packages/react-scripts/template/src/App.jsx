import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

import { Container, Title, Paragraph } from './styled-app';
import GithubCommits from './components/GithubCommits';

import * as actions from './store/reducers/app';
import { commitsSelector } from './store/selectors';

class App extends Component {
  componentDidMount = () => {
    this.props.fetchCommits();
  };

  render() {
    return (
      <Container>
        <Title>create-react-app</Title>
        <Paragraph>--scripts-version</Paragraph>
        <Title mint> @nelreina/react-scripts</Title>
        <GithubCommits commits={this.props.commits} />
      </Container>
    );
  }
}

export default withRouter(
  connect(
    state => ({ commits: commitsSelector(state) }),
    actions
  )(App)
);
