//import { useState } from 'react'
import { Sidenav, NavLink, CloseNav, Menu } from './nav.style'

const Nav = () => {
    console.log("from Nav function")
    const chapList = [
        { name: "Chapter One", link: "", id: 1 },
        { name: "Chapter Two", link: "", id: 2 },
        { name: "Chapter Three", link: "", id: 3 }
    ]

    return (
        <>
            <Sidenav>
                <CloseNav><span>&times;</span></CloseNav>
                <div>
                    {chapList.map(({ name, link, id }) => (
                        <NavLink key={id} href={link}>
                            {name}
                        </NavLink>
                    ))}
                </div>
            </Sidenav>
            <Menu>&#9776;</Menu>
        </>
    )
}

export default Nav
