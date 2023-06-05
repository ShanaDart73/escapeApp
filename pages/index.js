import Head from 'next/head'
import Image from 'next/image'
import FooterNote from '../data/footerNote/footer'
import { Container, Header, Content, Footer } from '../components/homepage/home.style'

const pageTitle = "Escape Homepage"

const Homepage = () => {
    return (
        <>
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
                <Content>Homepage Content</Content>
                <Footer>
                    <FooterNote />
                </Footer>
            </Container>
        </>
    )
}

export default Homepage