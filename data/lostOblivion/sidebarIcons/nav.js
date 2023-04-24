import Image from 'next/image'
//import { Sidenav, NavLink, CloseNav, Square } from './nav.style'

const Nav = () => {
    console.log("from Nav function")
    return (
        <>
            <Image src="/logos/nav.svg" height={30} width={30} alt="" />
        </>
    )
}

export default Nav
