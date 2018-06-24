import React, { Component } from 'react';
import { render } from 'react-dom';
import styled from 'styled-components';

import { Moment } from '../../src/index';

const Wrapper = styled.div`
  text-align: center;
`;
const Display = styled.div`
  /* border: solid #ddd 1px; */
  border-radius: 0.5em;
  padding: 1em;
  /* width: 300px; */
  text-align: center;
`;
const Title = styled.h2``;
const Label = styled.span`
  margin-bottom: 1em;
  display: grid;
  color: blue;
  > span {
    color: black;
  }
`;
const Text = styled.p`
  color: #777;
`;

class Demo extends Component {
  render() {
    return (
      <Wrapper>
        <Title>@nelreina/react-components Demo</Title>
        <Text>Wrapper component for Moment.js </Text>
        <Display>
          <Label>
            <span>{'<Moment />'}</span> <Moment />
          </Label>
          <Label>
            <span>{'<Moment date/>'}</span> <Moment date />
          </Label>
          <Label>
            <span>{'<Moment time/>'}</span> <Moment time />
          </Label>
          <Label>
            <span>{'<Moment year/>'}</span> <Moment year />
          </Label>
        </Display>
      </Wrapper>
    );
  }
}

render(<Demo />, document.querySelector('#demo'));
