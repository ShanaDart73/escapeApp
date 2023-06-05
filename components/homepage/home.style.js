import styled from 'styled-components'

export const Container = styled.div`
  display: grid;
  grid-template-rows: auto 1fr auto;
  grid-template-areas: 
          "header"
          "content"
          "footer";
  text-align: center;
  row-gap: 0.5rem;
`;
export const Header = styled.div`
  grid-row: 1 / 2;
  
  img {
    width: 100%;
  }
`;

export const Content = styled.div`
  grid-row: 2 / 3;
`;

export const Footer = styled.div`
  grid-row: 3 / 4;
`;