import { useState } from 'react'
import { Sidenav, NavLink, CloseNav, Menu } from './nav.style'
import Image from "next/image";

const Nav = () => {
    let [display, setDisplay] = useState(false)
    const handleClick = () => {
        setDisplay(!display)
    }
    const chapList = [
        { name: "Chapter One", link: "", id: 1 },
        { name: "Chapter Two", link: "", id: 2 },
        { name: "Chapter Three", link: "", id: 3 }
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
                <Image src="/logos/nav.svg" height={30} width={30} alt="" />
            </Menu>
        </>
    )
}

export default Nav
