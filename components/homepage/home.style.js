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

  font-family: "Times New Roman", serif;
  background-image: linear-gradient(rgb(248, 232, 235), rgba(154, 92, 102, 0.87));
`;
export const Header = styled.div`
  grid-row: 1 / 2;
  
  img {
    width: 100%;
  }
`;

export const Content = styled.div`
  grid-row: 2 / 3;

  display: flex;
  flex-flow: column wrap;
  align-content: center;
  row-gap: 30px;
`;

export const Footer = styled.div`
  grid-row: 3 / 4;

  color: #ece6d9;
  padding: 1rem 1.5rem;
  text-align: left;
`;