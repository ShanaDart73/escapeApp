import { useState } from 'react'
import { Sidenav, NavLink, CloseNav, Menu } from './nav.style'

const Nav = () => {
    let [display, setDisplay] = useState(false)
    const handleClick = () => {
        setDisplay(!display)
    }
    const chapList = [
        { name: "Chapter One", link: "/lostOfOblivion/chapter01", id: 1 },
        { name: "Chapter Two", link: "/lostOfOblivion/chapter02", id: 2 },
        { name: "Chapter Three", link: "/lostOfOblivion/chapter03", id: 3 },
        { name: "Chapter Four", link: "/lostOfOblivion/chapter04", id: 4 },
        { name: "Chapter Five", link: "/lostOfOblivion/chapter05", id: 5 }
    ]

    return (
        <>
            <Sidenav display={display}>
                <CloseNav onClick={handleClick}><span>&times;</span></CloseNav>
                <div>
                    {chapList.map(({ name, link, id }) => (
                        <NavLink key={id} href={link}>
                            {name}
                        </NavLink>
                    ))}
                </div>
            </Sidenav>
            <Menu display={display} onClick={handleClick}>
                <img src="/logos/nav.svg" height="auto" width="100%" alt="" />
            </Menu>
        </>
    )
}

export default Nav
