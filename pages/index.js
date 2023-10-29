import Head from 'next/head'
import { NextSeo } from 'next-seo'
import HomeContent from '../lib/homepage/homeContent'
import FooterNote from '../lib/homepage/footerNote/footer'
import { Wrapper, Container, Header, HeaderCanvas, ContentCanvas, Footer } from '../components/homepage/home.style'

const pageTitle = "escape homepage"

const Homepage = () => {
    return (
        <Wrapper>
            <NextSeo
                title="escape"
                description="Enjoy reading side stories of Lan WangJi and Wei WuXian, the popular characters of Modaozushi."
            />
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
                    <HeaderCanvas>
                        <img src="/photos/homepage/home.png" alt="" />
                    </HeaderCanvas>
                </Header>
                <ContentCanvas>
                    <HomeContent />
                </ContentCanvas>
                <Footer>
                    <FooterNote />
                </Footer>
            </Container>
        </Wrapper>
    )
}

export default Homepage