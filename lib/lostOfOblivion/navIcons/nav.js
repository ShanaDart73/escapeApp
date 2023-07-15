import { useState } from 'react'
import Router from 'next/router'
import styles from '../../../styles/nav.module.css'

const Nav = () => {
    const [display, setDisplay] = useState(false)
    const handleClick = () => {
        setDisplay(!display)
    }
    const chapList = [
        { name: "Chapter One", link: "/lostOfOblivion/chapters/1", id: 1 },
        { name: "Chapter Two", link: "/lostOfOblivion/chapters/2", id: 2 },
        { name: "Chapter Three", link: "/lostOfOblivion/chapters/3", id: 3 },
        { name: "Chapter Four", link: "/lostOfOblivion/chapters/4", id: 4 },
        { name: "Chapter Five", link: "/lostOfOblivion/chapters/5", id: 5 }
    ]

    return (
        <>
            <div className={styles.sideNav}>
                <div className={styles.closeNav}>&times;</div>
                <div className={styles.mapping}>
                    {chapList.map(({ name, link, id }) => (
                        <span
                            className={styles.navRoute}
                            key={id}
                            onClick={() => Router.push(link)}
                        >
                            {name}
                        </span>
                    ))}
                </div>
            </div>
            <div>
                <img src="/logos/nav.svg" height="auto" width="100%" alt="" />
            </div>
        </>
    )
}

export default Nav