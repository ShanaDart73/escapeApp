import Link from 'next/link'
import styled from 'styled-components'
import { StoryPic, StoryDetail } from '../../components/homepage/home.style'

const StoryLink = styled(Link)`
  text-decoration: none;
`;
const Canvas = styled.div`
  display: block;
  color: rgba(255, 255, 255, 0.49);
  font-size: 1.1rem;
  width: 300px;
  height: 550px;
  border-radius: 8px;
  background-color: rgba(0, 0, 0, 0.8);
  box-shadow: 0 8px 16px -8px lightblue;
  
  :hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 20px 2px lightblue;
  }
`;

const HomeContent = () => {
    return (
        <>
            <StoryLink href="/lostOfOblivion/chapters/1">
                <Canvas>
                    <StoryPic>
                        <img src="/photos/homepage/lostOfOblivion.png" alt="WangXian" />
                        <h1>Lost Of Oblivion</h1>
                    </StoryPic>
                    <StoryDetail>
                        <p><span>Genre</span>: Historical, Supernatural, Mature</p>
                        <p><span>Status</span>: Ongoing</p>
                        <p><span>Plot</span>: Wèi WúXiàn has formed a new golden core, however, some incident happens, causing him to lose not only his golden core, but also his happy memories spent with Lán WàngJī. </p>
                    </StoryDetail>
                </Canvas>
            </StoryLink>
            <Canvas>
                <StoryPic>
                    <h1>Coming soon</h1>
                </StoryPic>
            </Canvas>
            <Canvas>
                <StoryPic>
                    <h1>Coming soon</h1>
                </StoryPic>
            </Canvas>
            <Canvas>
                <StoryPic>
                    <h1>Coming soon</h1>
                </StoryPic>
            </Canvas>
        </>
    )
}

export default HomeContent