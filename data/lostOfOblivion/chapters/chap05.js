import Link from 'next/link'
import Icons from '../sidebarIcons/icons'
import { Wrapper, Container, Header, LeftPicture, Content, RightPicture, Sidebar, Footer, PrevBtn, NextBtn } from '../../../components/lostOfOblivion/chapters/chapter.style'

const pageHeading = "Lost of Oblivion: Chapter Five"

const Chap05 = () => {
    return (
        <Wrapper onContextMenu={(e) => e.preventDefault()}>
            <Container>
                <Header>{pageHeading}</Header>
                <LeftPicture>Left</LeftPicture>
                <Content>Content goes here. Adding this text to set upstream to origin branch</Content>
                <RightPicture>Right</RightPicture>
                <Sidebar>
                    <Icons />
                </Sidebar>
                <Footer>
                    <Link href="/lostOfOblivion/chapter04">
                        <PrevBtn>&larr;Prev</PrevBtn>
                    </Link>
                    <NextBtn>Next&rarr;</NextBtn>
                </Footer>
            </Container>
        </Wrapper>
    )
}

export default Chap05