import React, { Component } from 'react';
import { render } from 'react-dom';
import styled from 'styled-components';

import {
  Moment,
  Popover,
  Button,
  Icon,
  Spinner,
  Modal,
  UiDynamicTable,
  StyledBootstrap
} from '../../src/index';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.css';
const Box = styled.div.attrs({})`
  padding: 1em;
  border: 1px solid #ddd;
  border-radius: calc(1em / 2);
`;

const data = [
  {
    FIRST_NAME: 'Nelson',
    lastName: 'Reina',
    salary: 1000
  },
  {
    name: 'Dion',
    lastName: 'Joe',
    job: 'Developer',
    hobbies: ''
  },
  {
    name: 'Oscar',
    lastName: 'Garcia',
    job: 'Consultant'
  }
];

const options = {
  salary: { type: 'amount', right: true }
};

const Wrapper = styled.div.attrs({
  className: 'container'
})`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  grid-gap: 1em;
`;
const SWrapper = styled.div`
  text-align: center;
`;
const Display = styled.div`
  /* border: solid #ddd 1px; */
  border-radius: 0.5em;
  padding: 1em;
  /* width: 300px; */
  text-align: center;
`;
const Title = styled.h4`
  text-align: center;
`;
const Label = styled.span`
  margin-bottom: 1em;
  display: grid;
  color: blue;
  > span {
    color: black;
  }
`;
const Text = styled.p`
  text-align: center;
  color: #777;
`;

const Simple = ({ close }) => (
  <SWrapper>
    <Title>Simple Component</Title>
    <Label>Here an Simple one</Label>
    <Button black onClick={close}>
      Close
    </Button>
  </SWrapper>
);

class Demo extends Component {
  state = { show: false, showCentered: false };
  toggleModal = () => this.setState(ps => ({ show: !ps.show }));
  toggleModalCentered = () =>
    this.setState(ps => ({ showCentered: !ps.showCentered }));
  render() {
    return (
      <div>
        <UiDynamicTable data={data} colOptions={options} />
        <Title>@nelreina/react-components Demo</Title>
        <Wrapper>
          <Box>
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
          </Box>
          <Box>
            <Text>Popover Component</Text>
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
          </Box>
          <Box>
            <Text>Icon Component</Text>
            <Icon name="calendar" large />
          </Box>
          <Box>
            <Text>Spinner Component</Text>
            <Spinner marginr large />
            <Spinner marginr large circle />
            <Spinner marginr large cog />
            <Spinner marginr large refresh />
          </Box>
          <Box>
            <Text>Modal Component</Text>
            <button onClick={this.toggleModal} className="btn btn-secondary">
              Open Modal
            </button>
            <hr />
            <button
              onClick={this.toggleModalCentered}
              className="btn btn-secondary"
            >
              Open Modal Centered
            </button>
            <Modal
              title="My modal"
              show={this.state.show}
              close={this.toggleModal}
              hide
            >
              Modal Component
            </Modal>
            <Modal
              title="My modal"
              show={this.state.showCentered}
              close={this.toggleModalCentered}
              centered
            >
              Modal Component Centered
            </Modal>
          </Box>
        </Wrapper>
      </div>
    );
  }
}

render(<Demo />, document.querySelector('#demo'));
