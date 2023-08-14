import styled from 'styled-components'

export const Sidebar = styled.div`
  height: 60vh;
  width: 250px;
  max-width: 70%;
  position: fixed;
  z-index: 99;
  top: 70px;
  right: 0;

  display: flex;
  justify-content: center;
  background-color: #020139;
  padding-top: 60px;
  translate: ${props => props.audio ? "-10px" : "250px"};
  transition: all 0.7s ease-in-out;

  @media screen and (min-width: 768px) {
    translate: ${props => props.audio ? "-20px" : "250px"};
    top: 100px;
  }

  @media screen and (min-width: 1024px) {
    translate: ${props => props.audio ? "-25px" : "250px"};
    top: 110px;
  }
`;

export const CloseSidebar = styled.div`
  position: fixed;
  top: 0;
  left: 25px;
  margin-right: 50px;
  cursor: pointer;

  span {
    font-size: 36px;
    cursor: pointer;
  }
`;

export const SoundContainer = styled.div`
  padding: 10px;
  height: 50vh;
  display: flex;
  flex-flow: nowrap column;
  overflow-y: scroll;
  font-size: 16px;
`;

export const SoundList = styled.div`
  display: flex;
  padding: 10px;
  background: linear-gradient(to bottom, #020139, #070392, #020139);
  border: 1px solid #020139;

  @media screen and (min-width: 768px) {
    font-size: 20px;
    padding: 4px 4px 4px 36px;
  }

  @media screen and (min-width: 1024px) {
    font-size: 21px;
  }
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