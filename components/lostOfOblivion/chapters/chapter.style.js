import styled from 'styled-components'

export const Wrapper = styled.div`
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
  
  font-size: 1em;
  font-family: "Times New Roman", Arial, serif, Verdana, Tahoma;
  padding: .5em;
  color: rgba(255, 255, 255, 0.5);
  background-color: #171157;
  
  @media screen and (min-width: 760px) {
    font-size: 1.5em;
  }
`;

export const Container = styled.div`
  display: grid;
  grid-template-columns: 85% 15%;
  grid-template-rows: auto 1fr auto;
  grid-template-areas:
          "header header"
          "content sidebar"
          "footer";
  text-align: center;
  row-gap: 0.5em;
  
  @media screen and (min-width: 768px) {
    grid-template-columns: 25% 65% 10%;
    grid-template-areas: 
            "header header header" 
            "leftPicture content sidebar" 
            "footer";
  }
  
  @media screen and (min-width: 1024px) {
    grid-template-columns: 20% 53% 7% 20%;
    grid-template-areas: 
            "header header header header" 
            "leftPicture conteny sidebar rightPicture" 
            "footer";
  }
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
  
  @media screen and (min-width: 768px) {
    grid-column: 1 / 4;
    font-size: 1.3em;
  }
  
  @media screen and (min-width: 1024px) {
    grid-column: 1 / 5;
    font-size: 1.6em;
    padding: 0.8em;
  }
`;

export const LeftPicture = styled.div`
  img {
    width: 0;
  }
  
  @media screen and (min-width: 768px) {
    grid-column: 1 / 2;
    grid-row: 2 / 3;
    height: 88vh;
    position: sticky;
    top: 4em;
    align-self: start;
    
    img {
      width: 100%;
      height: 88vh;
    }
  }

  @media screen and (min-width: 1024px) {
    height: 84vh;
    
    img {
      height: 84vh;
    }
  }
`;

export const Content = styled.div`
  grid-column: 1 / 2;
  grid-row: 2 / 3;
  padding: 0.5em 0.8em 0.5em 0.5em;
  text-align: justify;
  
  small {
    opacity: 0.5;
  }
  
  @media screen and (min-width: 768px) {
    grid-column: 2 / 3;
  }
`;

export const Sidebar = styled.nav`
  grid-column: 2 / 3;
  grid-row: 2 / 3;
  height: 86vh;
  position: sticky;
  top: 4em;
  align-self: start;
  padding-top: 1em;
  border-radius: 2px;
  border: 2px solid #0804A9;
  background: linear-gradient(to right, #4c3434, #CC9696);
  
  display: flex;
  flex-direction: column;
  align-items: center;
  row-gap: 1em;
  
  @media screen and (min-width: 768px) {
    grid-column: 3 / 4;
  }
  
  @media screen and (min-width: 1024px) {
    height: 82vh;
  }
`;

export const RightPicture = styled.div`
  img {
    width: 0;
  }
  
  @media screen and (min-width: 1024px) {
    grid-column: 4 /5;
    grid-row: 2 / 3;
    height: 84vh;
    position: sticky;
    top: 4em;
    align-self: start;

    img {
      width: 100%;
      height: 84vh;
    }
  }
`;

export const Footer = styled.footer`
  grid-column: 1 / 2;
  grid-row: 3 / 4;
  align-self: center;
  text-align: end;
  padding: 0 1em;
  
  display: flex;
  justify-content: end;
  column-gap: 1em;
  
  @media screen and (min-width: 768px) {
    grid-column: 2 / 3;
  }
`;

export const NextBtn = styled.button`
  color: rgba(255, 255, 255, 0.7);
  padding: 1em;
  border: 2px solid #0804A9;
  border-radius: 5px;
  background: linear-gradient(to bottom, #020139, #0804AB);
  
  @media screen and (min-width: 768px) {
    font-size: 1em;
  }
`;

export const PrevBtn = styled(NextBtn)``;