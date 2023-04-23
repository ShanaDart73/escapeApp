import Image from 'next/image'
import Link from 'next/link'
import { Wrapper, Container, Header, Content, Sidebar, Footer, NextBtn, PrevBtn } from '../../components/chapters/chapter.style'

const Chap02 = () => {
    return (
        <Wrapper>
            <Container>
                <Header>Lost of Oblivion: Chapter Two</Header>
                <Content>Chapter 2</Content>
                <Sidebar>
                    <Image src="/logos/home.svg" height={30} width={30} />
                    <Image src="/logos/nav.svg" height={30} width={30} />
                    <Image src="/logos/coffee.svg" height={40} width={30} />
                </Sidebar>
                <Footer>
                    <Link href="/lostOblivion/chapter01">
                        <PrevBtn>&larr;Prev</PrevBtn>
                    </Link>

                    <NextBtn>Next&rarr;</NextBtn>
                </Footer>
            </Container>

        </Wrapper>
    )
}

export default Chap02