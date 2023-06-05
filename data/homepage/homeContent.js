import Link from 'next/link'
import styled from 'styled-components'
import { StoryPic, StoryDetail } from '../../components/homepage/home.style'

const StoryLink = styled(Link)`
  text-decoration: none;
`;
const Canvas = styled.div`
  display: block;
  color: #ece6d9;
  font-size: 1rem;
  width: 300px;
  height: 500px;
  border-radius: 3px;
  background-color: rgba(0, 0, 0, 0.8);
  cursor: pointer;
`;

const HomeContent = () => {
    return (
        <>
            <StoryLink href="/lostOfOblivion/chapter01">
                <Canvas>
                    <StoryPic>
                        <img src="/photos/homepage/lostOfOblivion.png" alt="" />
                        <h2>Lost Of Oblivion</h2>
                    </StoryPic>
                    <StoryDetail>
                        <p><span>Genre</span>: Historical, Supernatural, Mature</p>
                        <p><span>Status</span>: Ongoing</p>
                        <p><span>Plot</span>: Wèi WúXiàn has formed a new golden core, however, some incident happens and causes him to lose not only his golden core, but also the memories of his happy years spent with Lán WàngJī. </p>
                    </StoryDetail>
                </Canvas>
            </StoryLink>

            <Canvas />
            <Canvas />
            <Canvas />
        </>
    )
}

export default HomeContent