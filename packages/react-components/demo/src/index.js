import React, { Component } from 'react';
import { render } from 'react-dom';
import styled from 'styled-components';

import { Moment, Popover, Button, Icon, Spinner } from '../../src/index';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.css';

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
const Title = styled.h4``;
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

const Simple = ({ close }) => (
  <Wrapper>
    <Title>Simple Component</Title>
    <Label>Here an Simple one</Label>
    <Button black onClick={close}>
      Close
    </Button>
  </Wrapper>
);

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
        <hr />
        <Popover
          closeOnClick
          btn="light"
          icon="bullhorn"
          text="Popover With children"
        >
          <Title>Change Period</Title>
          <a href="#1">First</a>
          <a href="#2">Second</a>
          <a href="#3">Third</a>
        </Popover>
        <br />
        <Popover btn="danger" text="Popover Component" component={Simple} />
        <br />
        <Popover icon="calendar fa-2x" btn="dark" component={Simple} />
        <hr />
        <Icon name="calendar" large />
        <br />
        <br />
        <Spinner marginr large />
        <Spinner marginr large circle />
        <Spinner marginr large cog />
        <Spinner marginr large refresh />
      </Wrapper>
    );
  }
}

render(<Demo />, document.querySelector('#demo'));
