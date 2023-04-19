import styled from 'styled-components'

export const Wrapper = styled.div`
  font-size: 1em;
  font-family: "Times New Roman", Arial, serif, Verdana, Tahoma;
  padding: .5em;
  color: rgba(255, 255, 255, 0.7);
  background-color: #171157;
`;

export const Container = styled.div`
  display: grid;
  grid-template-columns: 85% 15%;
  grid-template-rows: .8% 70% 56.5%;
  grid-template-areas:
          "header header"
          "content sidebar"
          "footer footer";
  text-align: center;
  row-gap: 0.5em;
`;

export const Header = styled.header`
  grid-column: 1 / 3;
  grid-row: 1 / 2;
  position: sticky;
  top: 0;
  align-self: center;
  padding: 1em;
  border: 2px solid #0804A9;
  background: linear-gradient(to bottom, #0804AB, #020139);
`;

export const Content = styled.div`
  grid-column: 1 / 2;
  grid-row: 2 / 3;
`;

export const Siderbar = styled.nav`
  grid-column: 2 / 3;
  grid-row: 2 / 3;
  height: 90vh;
  position: sticky;
  top: 4em;
  align-self: start;
  border-radius: 2px;
  border: 2px solid #0804A9;
  background: linear-gradient(to right, #845b5b, #CC9696);
`;

export const Footer = styled.footer`
  grid-column: 1 / 3;
  grid-row: 3 / 4;
  font-size: 0.7em;
  text-align: start;
  align-self: center;
  padding: 1em;
  border-radius: 10px;
  background: linear-gradient(to bottom, #020139, #0804AB);
`;
