import Router from 'next/router'
import Head from 'next/head'
import { getAllChapters, getAllChapIds } from '../../../lib/lostOfOblivion/allDataArrays'
import { deserialize } from 'react-serialize'
import styles from '../../../styles/chap.module.css'
import Icons from '../../../components/lostOfOblivion/sidebarIcons/icons'

const pageTitle = "escape"

export async function getStaticPaths() {
    const paths = await getAllChapIds()
    return {
        paths,
        fallback: false
    }
}

export async function getStaticProps({ params }) {
    const data = await getAllChapters(params.id)
    return {
        props: {
            data
        }
    }
}

const DynamicPages = ({ data }) => {
    return (
        <div className={styles.wrapper} onContextMenu={(e) => e.preventDefault()}>
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
            <div className={styles.container}>
                <div className={styles.header}>
                    {data.header}
                </div>
                <div className={styles.leftPicture}>
                    <img src={data.leftImg} alt="Picture" />
                </div>
                <div className={styles.content}>
                    {deserialize(data.content)}
                </div>
                <div className={styles.rightPicture}>
                    <img src={data.rightImg} alt="Picture" />
                </div>
                <div className={styles.sidebar}>
                    <Icons />
                </div>
                <div className={styles.footer}>
                    <button className={styles.prevBtn}>
                        <span onClick={() => Router.push(data.leftBtn)}>&larr;Prev</span>
                    </button>
                    <button className={styles.nextBtn}>
                        <span onClick={() => Router.push(data.rightBtn)}>Next&rarr;</span>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default DynamicPages