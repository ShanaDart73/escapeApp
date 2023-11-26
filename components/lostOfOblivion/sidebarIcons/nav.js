import { useState } from 'react'
import Router from 'next/router'
import { Sidenav, NavList, NavLink, CloseNav, Menu } from './nav.style'

const Nav = () => {
    let [display, setDisplay] = useState(false)
    const handleClick = () => {
        setDisplay(!display)
    }
    const chapList = [
        { name: "Chapter One", link: "/lostOfOblivion/chapters/1", id: 1 },
        { name: "Chapter Two", link: "/lostOfOblivion/chapters/2", id: 2 },
        { name: "Chapter Three", link: "/lostOfOblivion/chapters/3", id: 3 },
        { name: "Chapter Four", link: "/lostOfOblivion/chapters/4", id: 4 },
        { name: "Chapter Five", link: "/lostOfOblivion/chapters/5", id: 5 },
        { name: "Chapter Six", link: "/lostOfOblivion/chapters/6", id: 6 },
        { name: "Chapter Seven", link: "/lostOfOblivion/chapters/7", id: 7},
        { name: "Chapter Eight", link: "/lostOfOblivion/chapters/8", id: 8 },
        { name: "Chapter Nine", link: "/lostOfOblivion/chapters/9", id: 9 },
        { name: "Chapter Ten", link: "/lostOfOblivion/chapters/10", id: 10 },
        { name: "Chapter 11", link: "/lostOfOblivion/chapters/11", id: 11 },
        { name: "Chapter 12", link: "/lostOfOblivion/chapters/12", id: 12 },
        { name: "Chapter 13", link: "/lostOfOblivion/chapters/13", id: 13 },
        { name: "Chapter 14", link: "/lostOfOblivion/chapters/14", id: 14 },
        { name: "Chapter 15", link: "/lostOfOblivion/chapters/15", id: 15 }
    ]

    return (
        <>
            <Sidenav display={display}>
                <CloseNav onClick={handleClick}><span>&times;</span></CloseNav>
                <NavList>
                    {chapList.map(({ name, link, id }) => (
                        <NavLink key={id} onClick={() => Router.push(link)}>
                            {name}
                        </NavLink>
                    ))}
                </NavList>
            </Sidenav>
            <Menu display={display} onClick={handleClick}>
                <img src="/logos/nav.svg" height="auto" width="100%" alt="" />
            </Menu>
        </>
    )
}

export default Nav
