import styled from 'styled-components';
import classnames from 'classnames';

const btn = props =>
  classnames(
    'btn',
    { [`btn-${props.btn}`]: props.btn },
    { 'btn-primary': props.primary },
    { 'btn-secondary': props.secondary },
    { 'btn-light': props.light },
    { 'btn-danger': props.red },
    { 'btn-success': props.green },
    { 'btn-dark': props.black },
    { 'btn-block': props.block },
    { 'btn-link': props.link },
    { 'btn-lg': props.lg },
    { 'btn-sm': props.sm },
    { 'btn-block': props.block }
  );
const Button = styled.button.attrs({
  className: props => btn(props)
})``;

export default Button;
