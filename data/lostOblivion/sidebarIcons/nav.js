import { useState, useEffect } from 'react'
import { Sidenav, NavLink, CloseNav, Menu } from './nav.style'

const Nav = () => {
    console.log("from Nav function")
    useEffect(() => {
        console.log("finished loading")
    }, [])

    const [active, setActive] = useState(true)
    const handleSlideIn = () => {}
    const handleSlideOut = () => {}

    const chapList = [
        { name: "Chapter One", link: "", id: 1 },
        { name: "Chapter Two", link: "", id: 2 },
        { name: "Chapter Three", link: "", id: 3 }
    ]

    return (
        <>
            <Sidenav>
                <CloseNav onClick={handleSlideOut}><span>&times;</span></CloseNav>
                <div>
                    {chapList.map(({ name, link, id }) => (
                        <NavLink key={id} href={link}>
                            {name}
                        </NavLink>
                    ))}
                </div>
            </Sidenav>
            <Menu onClick={handleSlideIn}>&#9776;</Menu>
        </>
    )
}

export default Nav
