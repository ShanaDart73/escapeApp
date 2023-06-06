import Head from 'next/head'
import HomeContent from '../data/homepage/homeContent'
import FooterNote from '../data/footerNote/footer'
import { Wrapper, Container, Header, LeftPhoto, Content, CanvasContainer, RightPhoto, Footer } from '../components/homepage/home.style'

const pageTitle = "Escape Homepage"

const Homepage = () => {
    return (
        <Wrapper>
            <Head>
                <link rel="apple-touch-icon" sizes="180x180" href="/icon/apple-touch-icon.png" />
                <link rel="icon" type="image/png" sizes="32x32" href="/icon/favicon-32x32.png" />
                <link rel="icon" type="image/png" sizes="16x16" href="/icon/favicon-16x16.png" />
                <link rel="manifest" href="/icon/site.webmanifest" />
                <link rel="mask-icon" href="/icon/safari-pinned-tab.svg" color="#5bbad5" />
                <meta name="msapplication-TileColor" content="#603cba" />
                <meta name="theme-color" content="#ffffff" />
                <title>{pageTitle}</title>
            </Head>
            <Container>
                <Header>
                    <img src="/photos/homepage/home.png" alt="" />
                </Header>
                <LeftPhoto>
                    <img src="/photos/homepage/leftPicture.png" alt="" />
                </LeftPhoto>
                <Content>
                    <CanvasContainer>
                        <HomeContent />
                    </CanvasContainer>
                </Content>
                <RightPhoto>
                    <img src="/photos/homepage/rightPicture.png" alt="" />
                </RightPhoto>
                <Footer>
                    <FooterNote />
                </Footer>
            </Container>
        </Wrapper>
    )
}

export default Homepage