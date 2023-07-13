import { getAllChapters, getAllChapIds } from '../../../lib/lostOfOblivion/allDataArrays'
import { deserialize } from 'react-serialize'
import styles from '../../../styles/chap.module.css'

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
            <div className={styles.container}>
                <div className={styles.header}>
                    {data.header}
                </div>
                <div></div>
                <div className={styles.content}>
                    {deserialize(data.content)}
                </div>
                <div></div>
                <div className={styles.sidebar}>
                    <div></div>
                </div>
                <div className={styles.footer}>
                    <button className={styles.prevBtn}>
                        &larr;Prev
                    </button>
                    <button className={styles.nextBtn}>
                        Next&rarr;
                    </button>
                </div>
            </div>
        </div>
    )
}

export default DynamicPages