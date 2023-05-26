import Link from 'next/link'
import Icons from '../sidebarIcons/icons'
import { Wrapper, Container, Header, Content, Sidebar, Footer, PrevBtn, NextBtn } from '../../../components/lostOfOblivion/chapters/chapter.style'

const pageHeading = "Lost of Oblivion: Chapter Three"

const Chap03 = () => {
    return (
        <Wrapper onContextMenu={(e) => e.preventDefault()}>
            <Container>
                <Header>{pageHeading}</Header>
                <Content>Content goes here</Content>
                <Sidebar>
                    <Icons />
                </Sidebar>
                <Footer>
                    <Link href="/lostOfOblivion/chapter02">
                        <PrevBtn>&larr;Prev</PrevBtn>
                    </Link>
                    <NextBtn>Next&rarr;</NextBtn>
                </Footer>
            </Container>
        </Wrapper>
    )
}

export default Chap03