import Link from 'next/link'
import Icons from '../sidebarIcons/icons'
import { Wrapper, Container, Header, Content, Sidebar, Footer, NextBtn, PrevBtn } from '../../../components/lostOfOblivion/chapters/chapter.style'

const Chap02 = () => {
    return (
        <Wrapper>
            <Container>
                <Header>Lost of Oblivion: Chapter Two</Header>
                <Content>Chapter 2</Content>
                <Sidebar>
                    <Icons />
                </Sidebar>
                <Footer>
                    <Link href="/lostOfOblivion/chapter01">
                        <PrevBtn>&larr;Prev</PrevBtn>
                    </Link>

                    <NextBtn>Next&rarr;</NextBtn>
                </Footer>
            </Container>

        </Wrapper>
    )
}

export default Chap02