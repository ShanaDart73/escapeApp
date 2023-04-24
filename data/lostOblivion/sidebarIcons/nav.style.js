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
  padding-top: 7.5em;
`;

export const NavLink = styled(Link)`
  padding: 0.5em 4em 0.5em 0.5em;
  text-decoration: none;
  font-size: 3.1em;
  color: #818181;
  display: block;
  transition: 0.3s;
`;

export const CloseNav = styled.div`
  position: absolute;
  top: 0;
  left: 3.1em;
  font-size: 3.5em;
  margin-right: 6.2em;
`;
