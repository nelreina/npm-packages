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
`;
export const Paragraph = styled.p`
  color: #888;
  padding: 0;
  margin: 0;
`;
