import React, { Component } from 'react';
import { Modal } from 'react-bootstrap';
import { Button } from '@nelreina/react-components';
import styled from 'styled-components';

const Header = styled(Modal.Header)`
  color: ${props => props.theme.header.color};
  background: ${props => props.theme.header.bgcolor};
  text-align: center;
`;
const Title = styled(Modal.Title)`
  text-align: center;
`;
const msize = (sm, lg) => {
  switch (true) {
    case sm:
      return 'sm';
    case lg:
      return 'lg';
    default:
      return '';
  }
};

class BootstrapModal extends Component {
  render() {
    const {
      sm,
      lg,
      close,
      save,
      show,
      title,
      hide,
      theme = { header: {} }
    } = this.props;
    return (
      <Modal show={show} onHide={hide && close} size={msize(sm, lg)}>
        {title && (
          <Header closeButton={hide} theme={theme}>
            <Title theme={theme}>{title}</Title>
          </Header>
        )}

        <Modal.Body>{this.props.children}</Modal.Body>
        {!hide && (
          <Modal.Footer>
            <Button onClick={close}>Close</Button>
            {save && (
              <Button onClick={save} green>
                Save changes
              </Button>
            )}
          </Modal.Footer>
        )}
      </Modal>
    );
  }
}

export default BootstrapModal;
