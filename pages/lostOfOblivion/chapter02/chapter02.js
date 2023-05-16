import Chap02 from '../../../data/lostOfOblivion/chapters/chap02'
import Head from 'next/head'

const pageTitle = "Lost Of Oblivion: Chapter Two"

const Chapter02 = () => {
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
            <Chap02 />
        </>
    )
}

export default Chapter02