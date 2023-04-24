import styled from 'styled-components'
import Link from 'next/link'

export const Sidenav = styled.nav`
  height: 100%;
  width: 0;
  position: fixed;
  z-index: 1;
  top: 0;
  right: 0;
  
  background-color: #111111;
  overflow-x: hidden;
  transition: 0.5s;
  padding-top: 60px;
  
  div {
    padding: 8px 32px 8px 8px;
    font-size: 25px;
    color: #818181;
    display: block;
    transition: 0.5s;
  }
`;

export const NavLink = styled(Link)`
  padding: 8px 8px 8px 36px;
  text-decoration: none;
  text-align: left;
  font-size: 25px;
  color: #818181;
  display: block;
  transition: 0.5s;
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
  font-size: 30px;
  cursor: pointer;
`;
