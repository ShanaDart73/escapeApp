import styled from 'styled-components'

export const Sidebar = styled.div`
  height: 100%;
  width: 250px;
  max-width: 70%;
  position: fixed;
  z-index: 99;
  top: 70px;
  right: 0;

  color: rgba(173, 216, 230, 0.6);
  background-color: #020139;
  /*overflow-x: hidden;*/
  overflow-y: scroll;
  padding-top: 60px;
  translate: ${props => props.audio ? "-10px" : "250px"};
  transition: all 0.7s ease-in-out;
`;

export const AudioIcon = styled.div`
  width: 30px;
  cursor: pointer;

  @media screen and (min-width: 500px) {
    width: 40px;
  }

  @media screen and (min-width: 768px) {
    width: 50px;
  }
`;