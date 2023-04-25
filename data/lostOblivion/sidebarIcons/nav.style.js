import styled from 'styled-components'
import Link from 'next/link'

export const Sidenav = styled.nav`
  height: 100%;
  width: 250px;
  max-width: 70%;
  position: fixed;
  z-index: 99;
  top: 7px;
  right: 0;

  background-color: rgba(8, 9, 54, 0.98);
  overflow-x: hidden;
  padding-top: 60px;
  translate: ${props => props.display ? "10px" : "250px"};
  transition: all 0.7s ease-in-out;

  div {
    padding: 8px 32px 8px 8px;
    font-size: 25px;
    color: #818181;
    display: block;
  }
`;

export const NavLink = styled(Link)`
  padding: 8px 8px 8px 36px;
  text-decoration: none;
  text-align: left;
  font-size: 25px;
  color: #818181;
  display: block;
`;

export const CloseNav = styled.div`
  position: absolute;
  top: 0;
  left: 25px;
  margin-right: 50px;
  
  span {
    font-size: 36px;
  }
`;

export const Menu = styled.span`
  cursor: pointer;
`;
