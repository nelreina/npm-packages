import styled from 'styled-components';

export const FormError = styled.div`
  color: red;
  &::before {
    content: 'Form Error: ';
    font-weight: bold;
  }
`;
export const FormField = styled.div`
  /* margin-bottom: 1em; */
`;
