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
        { name: "Chapter 15", link: "/lostOfOblivion/chapters/15", id: 15 },
        { name: "Chapter 16", link: "/lostOfOblivion/chapters/16", id: 16 },
        { name: "Chapter 17", link: "/lostOfOblivion/chapters/17", id: 17 },
        { name: "Chapter 18", link: "/lostOfOblivion/chapters/18", id: 18 },
        { name: "Chapter 19", link: "/lostOfOblivion/chapters/19", id: 19 },
        { name: "Chapter 20", link: "/lostOfOblivion/chapters/20", id: 20 },
        { name: "Chapter 21", link: "/lostOfOblivion/chapters/21", id: 21 },
        { name: "Chapter 22", link: "/lostOfOblivion/chapters/22", id: 22 },
        { name: "Chapter 23", link: "/lostOfOblivion/chapters/23", id: 23 },
        { name: "Chapter 24", link: "/lostOfOblivion/chapters/24", id: 24 },
        { name: "Chapter 25", link: "/lostOfOblivion/chapters/25", id: 25 },
        { name: "Chapter 26", link: "/lostOfOblivion/chapters/26", id: 26 },
        { name: "Chapter 27", link: "/lostOfOblivion/chapters/27", id: 27 },
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
