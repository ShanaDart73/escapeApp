import Link from 'next/link'
import Icons from '../sidebarIcons/icons'
import { Wrapper, Container, Header, LeftPicture, Content, RightPicture, Sidebar, Footer, PrevBtn, NextBtn } from '../../../components/lostOfOblivion/chapters/chapter.style'

const pageHeading = "Lost of Oblivion: Chapter Four"

const Chap04 = () => {
    return (
        <Wrapper onContextMen={(e) => e.preventDefault()}>
            <Container>
                <Header>{pageHeading}</Header>
                <LeftPicture>
                    <img src="/photos/lostOfOblivion/chapter04/leftPicture.png" alt="" />
                </LeftPicture>
                <Content>
                    Content goes here
                </Content>
                <RightPicture>
                    <img src="/photos/lostOfOblivion/chapter04/rightPicture.png" alt="" />
                </RightPicture>
                <Sidebar>
                    <Icons />
                </Sidebar>
                <Footer>
                    <Link href="/lostOfOblivion/chapter03">
                        <PrevBtn>&larr;Prev</PrevBtn>
                    </Link>
                    <NextBtn>Next&rarr;</NextBtn>
                </Footer>
            </Container>
        </Wrapper>
    )
}

export default Chap04