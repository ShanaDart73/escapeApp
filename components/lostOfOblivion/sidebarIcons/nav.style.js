import styled from 'styled-components'

export const Sidenav = styled.nav`
  height: 100%;
  width: 250px;
  max-width: 70%;
  position: fixed;
  z-index: 99;
  top: 70px;
  right: 0;

  background-color: #01012a;
  overflow-x: hidden;
  overflow-y: scroll;
  padding-top: 60px;
  translate: ${props => props.display ? "-10px" : "250px"};
  transition: all 0.7s ease-in-out;
  
  @media screen and (min-width: 768px) {
    translate: ${props => props.display ? "-20px" : "250px"};
    top: 100px;
    
    div {
      padding: 4px 4px 4px 27px;
    }
  }
  
  @media screen and (min-width: 1024px) {
    translate: ${props => props.display ? "-25px" : "250px"};
    top: 110px;
  }
`;

export const NavList = styled.div`
  padding: 8px 8px 8px 30px;
  color: #818181;
  height: 60vh;
  display: flex;
  flex-flow: nowrap column;
  overflow-y: scroll;
`;

export const NavLink = styled.div`
  padding: 8px 8px 8px 36px;
  text-decoration: none;
  text-align: left;
  font-size: 20px;
  color: #818181;
  display: block;

  :hover {
    color: #b4d4ff;
    cursor: pointer;
  }

  @media screen and (min-width: 768px) {
    font-size: 25px;
    padding: 4px 4px 4px 36px;
  }

  @media screen and (min-width: 1024px) {
    font-size: 27px;
  }
`;

export const CloseNav = styled.div`
  position: absolute;
  top: 0;
  left: 25px;
  margin-right: 50px;
  cursor: pointer;
  
  span {
    font-size: 36px;
    cursor: pointer;
  }
  
  @media screen and (min-width: 768px) {
    span {
      font-size: 46px;
    }
  }
`;

export const Menu = styled.div`
  width: 40px;
  cursor: pointer;

  @media screen and (min-width: 500px) {
    width: 50px;
  }
  
  @media screen and (min-width: 600px) {
    width: 60px;
  }
`;
