import Image from 'next/image'

const Icons = () => {
    return (
        <>
            <Image src="/logos/home.svg" height={30} width={30} />
            <Image src="/logos/nav.svg" height={30} width={30} />
            <Image src="/logos/coffee.svg" height={40} width={30} />
        </>
    )
}

export default Icons