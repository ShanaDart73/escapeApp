import Image from 'next/image'
import Nav from './nav'

const Icons = () => {
    return (
        <>
            <Image src="/logos/home.svg" height={30} width={30} alt="" />
            <Image src="/logos/nav.svg" height={30} width={30} alt="" />
            <Image src="/logos/coffee.svg" height={40} width={30} alt="" />
            <Nav />
        </>
    )
}

export default Icons


