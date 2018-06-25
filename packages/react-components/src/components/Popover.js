import React from 'react';
import styled from 'styled-components';
import classnames from 'classnames';
import Button from './Button';
import Icon from './Icon';

const popover = props =>
  classnames(
    'popover',
    { 'bs-popover-right': props.right },
    { 'bs-popover-left': props.left },
    { show: props.show }
  );

const Popover = styled.div.attrs({
  className: props => popover(props)
})`
  display: ${props => (props.show ? 'block' : 'none')} !important;
  top: ${props => (props.pos.top ? props.pos.top + 'px' : 0)} !important;
  ${props => (props.right ? 'left:' + props.pos.right + 'px !important' : '')};
  ${props => (props.left ? 'right:' + props.pos.right + 'px !important' : '')};
`;

const Arrow = styled.div.attrs({ className: 'arrow' })``;
const Body = styled.div.attrs({ className: 'popover-body' })``;

const Wrapper = styled.div``;
class BootstrapPopover extends React.Component {
  state = {
    show: false,
    position: {}
  };
  toggleShow = evt => {
    const position = evt.target.getBoundingClientRect();
    this.setState(prevState => {
      return { show: !prevState.show, position };
    });
  };
  render() {
    const {
      text,
      icon,
      btn,
      children,
      closeOnClick,
      component: Component
    } = this.props;
    const { show, position } = this.state;
    if (!Component) {
      return (
        <Wrapper>
          <Button btn={btn} onClick={this.toggleShow}>
            {icon && <Icon marginr={text} name={icon} />}
            {text && text}
          </Button>
          <Popover
            onClick={closeOnClick && this.toggleShow}
            show={show}
            pos={position}
            {...this.props}
            right
          >
            <Arrow />
            <Body>{children}</Body>
          </Popover>
        </Wrapper>
      );
    } else {
      return (
        <Wrapper>
          <Button btn={btn} onClick={this.toggleShow}>
            {icon && <Icon marginr={text} name={icon} />}
            {text && text}
          </Button>
          <Popover show={show} pos={position} {...this.props} right>
            <Arrow />
            <Body>
              <Component close={this.toggleShow} />
            </Body>
          </Popover>
        </Wrapper>
      );
    }
  }
}

export default BootstrapPopover;
