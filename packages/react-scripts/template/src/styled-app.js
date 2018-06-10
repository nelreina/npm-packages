import styled, { injectGlobal } from 'styled-components';

injectGlobal`
  body{
    background: #0D3A58;
    color: #ffc600;
  } 
`;

export const Container = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  letter-spacing: 1px;
`;
export const Title = styled.h3`
  ${props => props.mint && 'color: #2AFFDF'};
  ${props => props.white && 'color: #FFFFFF'};
  ${props => props.small && 'font-size: 0.9em'};
  ${props => props.center && 'text-align: center'};
`;
export const Paragraph = styled.p`
  color: #888;
  padding: 0;
  margin: 0;
`;
export const Card = styled.div.attrs({
  className: 'card'
})`
  background: transparent;
  font-size: 0.8em;
`;
export const CardTitle = styled.p.attrs({
  className: 'card-title'
})`
  color: #bbb;
`;
export const CardBody = styled.div.attrs({
  className: 'card-body'
})``;
export const CardText = styled.p.attrs({
  className: 'card-text'
})``;
