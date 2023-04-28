import styled from 'styled-components'

export const DisableCopyText = styled.div`
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  
  ::selection {
    background: none;
  }
  ::-moz-selection {
    background: none;
  }
`;
