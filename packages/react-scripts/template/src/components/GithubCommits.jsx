import React from 'react';
import styled from 'styled-components';
import List from '@nelreina/react-list';
import { Moment } from '@nelreina/react-components';
import { Title, Card, CardBody, CardText, CardTitle } from '../styled-app';
const Wrapper = styled.div`
  display: grid;
  grid-gap: 1em;
  margin-top: 2em;
  border: 1px #999 solid;
  padding: 1em;
  border-radius: 0.5em;
`;

const Commits = ({ item }) => (
  <Card primary>
    <CardBody>
      <CardTitle>
        <Moment>{item.date}</Moment>
        {' - '}
        <span>{item.name}</span>
      </CardTitle>
      <CardText>{item.message}</CardText>
    </CardBody>
  </Card>
);

const GithubCommits = ({ commits }) => {
  return (
    <Wrapper>
      <Title white small center>
        Last Commits
      </Title>
      <List of={Commits} iterator={commits} />
    </Wrapper>
  );
};

export default GithubCommits;
