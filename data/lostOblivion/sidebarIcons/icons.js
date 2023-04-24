import Image from 'next/image'
import Nav from './nav'

const Icons = () => {
    return (
        <>
            <Image src="/logos/home.svg" height={30} width={30} alt="" />
            <Nav />
            <Image src="/logos/coffee.svg" height={40} width={30} alt="" />
        </>
    )
}

export default Icons


