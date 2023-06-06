import styled from 'styled-components'

export const Wrapper = styled.div`
  font-size: 1rem;
  font-family: "Times New Roman", serif;
  background: linear-gradient(rgb(248, 232, 235), rgba(154, 92, 102, 0.87));

  @media screen and (min-width: 768px) {
    font-size: 1.2rem;
  }
`;

export const Container = styled.div`
  display: grid;
  grid-template-rows: auto 1fr auto;
  grid-template-areas: 
          "header"
          "content"
          "footer";
  text-align: center;
  row-gap: 0.5rem;
  
  @media screen and (min-width: 1024px) {
    grid-template-columns: 17% 66% 17%;
    grid-template-areas: 
            "header header header"
            "lelfPhoto content rightPhoto"
            "footer footer footer";
  }

  @media screen and (min-width: 1124px) {
    grid-template-columns: 20% 60% 20%;
  }

  @media screen and (min-width: 1224px) {
    grid-template-columns: 23% 54% 23%;
  }

  @media screen and (min-width: 1324px) {
    grid-template-columns: 25% 50% 25%;
  }
`;

export const Header = styled.div`
  grid-row: 1 / 2;
  
  img {
    width: 100%;
  }
  
  @media screen and (min-width: 1024px) {
    grid-column: 1 / 4;
  }
`;

export const LeftPhoto = styled.div`
  img {
    width: 0;
  }
  
  @media screen and (min-width: 1024px) {
    grid-column: 1 / 2;
    grid-row: 2 / 3;
    
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      object-position: top;
    }
  }  
`;

export const Content = styled.div`
  grid-row: 2 / 3;
  
  @media screen and (min-width: 1024px) {
    grid-column: 2 / 3;
    
    width: 65vw;
    height: 100vh;
    display: grid;
    grid-template-columns: 1fr;
    overflow: scroll;
  }

  @media screen and (min-width: 1124px) {
    width: 59vw;
  }

  @media screen and (min-width: 1224px) {
    width: 53vw;
  }

  @media screen and (min-width: 1324px) {
    width: 49vw;
  }
`;

export const CanvasContainer = styled.div`
  display: flex;
  flex-flow: column wrap;
  align-content: center;
  row-gap: 30px;

  @media screen and (min-width: 768px) {
    flex-flow: row wrap;
    justify-content: center;
    row-gap: 20px;
    column-gap: 20px;
  }
`;

export const RightPhoto = styled.div`
  img {
    width: 0;
  }
  
  @media screen and (min-width: 1024px) {
    grid-column: 3 / 4;
    grid-row: 2 /3;
    
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      object-position: top;
    }
  }
`;

export const Footer = styled.div`
  grid-row: 3 / 4;

  color: #ece6d9;
  padding: 1rem 1.5rem 0;
  text-align: left;
  
  p {
    margin: 0;
  }
  
  @media screen and (min-width: 768px) {
    padding: 1rem 2rem 0;
  }

  @media screen and (min-width: 1024px) {
    grid-column: 1 /4;
    
   font-size: 1.5rem;
    padding: 1rem 3rem 3rem;
  }
`;

export const StoryPic = styled.div`
  padding: 1rem;
  font-family: cursive;
  
  h2 {
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