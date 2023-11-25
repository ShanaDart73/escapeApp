import styled from 'styled-components'

export const Wrapper = styled.div`
  font-size: 1rem;
  font-family: "Times New Roman", serif;
  background: #000007;

  @media screen and (min-width: 768px) {
    font-size: 1.2rem;
  }
`;

export const Container = styled.div`
  padding-bottom: 30px;
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
  row-gap: 30px;
  
  @media screen and (min-width: 1024px) {
    row-gap: 50px;
  }
`;

export const Header = styled.div`
  position: relative;
  width: 315px;
  height: 120px;

  @media screen and (min-width: 500px) {
    width: 450px;
    height: 200px;
  }

  @media screen and (min-width: 650px) {
    width: 600px;
    height: 250px;
  }

  @media screen and (min-width: 760px) {
    width: 703px;
    height: 300px;
  }

  @media screen and (min-width: 1024px) {
    width: 900px;
    height: 400px;
  }
`;

export const HeaderCanvas = styled.div`
  position: absolute;
  transform-style: preserve-3d;
  transform: rotate3d(0.3, 0.12, -0.08, 0.2turn);
  width: 315px;
  height: 120px;
  border-radius: 20px;

  img {
    width: 315px;
    height: 120px;
    border-radius: 20px;

    @media screen and (min-width: 500px) {
      width: 450px;
      height: 200px;
    }

    @media screen and (min-width: 650px) {
      width: 600px;
      height: 250px;
    }

    @media screen and (min-width: 760px) {
      width: 703px;
      height: 300px;
    }
    
    @media screen and (min-width: 1024px) {
      width: 900px;
      height: 400px;
      border-radius: 30px;
    }
  }

  @media screen and (min-width: 500px) {
    width: 450px;
    height: 200px;
  }

  @media screen and (min-width: 650px) {
    width: 600px;
    height: 250px;
  }
  
  @media screen and (min-width: 760px) {
    width: 703px;
    height: 300px;
  }

  @media screen and (min-width: 1024px) {
    width: 900px;
    height: 400px;
  }
`;

export const ContentCanvas = styled.div`
  display: flex;
  flex-flow: column nowrap;
  align-content: center;
  row-gap: 30px;

  @media screen and (min-width: 768px) {
    display: flex;
    flex-flow: wrap row;
    justify-content: center;
    row-gap: 30px;
    column-gap: 30px;

    width: 640px;
    height: auto;
  }

  @media screen and (min-width: 1024px) {
    row-gap: 50px;
    column-gap: 50px;
    width: 660px;
  }
`;

export const Footer = styled.div`

  color: rgba(255, 255, 255, 0.49);
  padding: 1rem 1.5rem 0;
  text-align: left;
  
  p {
    margin: 0;
  }
  
  @media screen and (min-width: 500px) {
    width: 450px;
    height: auto;
  }

  @media screen and (min-width: 650px) {
    width: 600px;
  }
  
  @media screen and (min-width: 768px) {
    width: 713px;
    padding: 1rem 2rem 0;
  }

  @media screen and (min-width: 1024px) {
    width: 900px;
    font-size: 1.5rem;
    padding: 1rem 3rem 3rem;
  }
`;

export const StoryPic = styled.div`
  padding: 1rem;
  font-family: cursive;
  
  h1 {
    margin: 0;
  }
  
  img {
    width: 100%;
    border-radius: 1% 25%;
  }
`;

export const StoryDetail = styled.div`
  text-align: left;
  padding: 0 1rem;
  
  span {
    font-weight: bold;
  }
  
  p {
    margin: 0;
    padding-bottom: 0.5rem;
  }
`;