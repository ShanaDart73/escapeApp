import Head from 'next/head'
import { NextSeo } from 'next-seo'
import HomeContent from '../lib/homepage/homeContent'
import FooterNote from '../lib/homepage/footerNote/footer'
import { Wrapper, Container, Header, HeaderCanvas, ContentCanvas, Footer } from '../components/homepage/home.style'

const pageTitle = "WangXian"

const Homepage = () => {
    return (
        <Wrapper>
            <NextSeo
                title="Lan WangJi & Wei WuXian"
                description="Lan WangJi and Wei WuXian side stories, the popular characters of The Founder of Demonic Cultivation."
            />
            <Head>
                <link rel="apple-touch-icon" sizes="180x180" href="/icon/apple-touch-icon.png" />
                <link rel="icon" type="image/png" sizes="32x32" href="/icon/favicon-32x32.png" />
                <link rel="icon" type="image/png" sizes="16x16" href="/icon/favicon-16x16.png" />
                <link rel="manifest" href="/icon/site.webmanifest" />
                <link rel="mask-icon" href="/icon/safari-pinned-tab.svg" color="#5bbad5" />
                <link rel="canonical" href="https://www.escape.net.co" />
                <meta name="msapplication-TileColor" content="#603cba" />
                <meta name="theme-color" content="#ffffff" />
                <meta name="robots" content="noindex" />
                <meta name="googlebot" content="noindex" />
                <meta name="keywords" content="WangXian, Lan WangJi, Wei WuXian, Modaozushi, Demonic Cultivation" />
                <meta name="description" content="Lan WangJi and Wei WuXian side stories." />
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