import Nav from './nav'
import Sound from './sound'
import Link from 'next/link'
import styled from 'styled-components'

const Logo = styled.div`
  width: 40px;
  
  @media screen and (min-width: 500px) {
    width: 50px;
  }
  
  @media screen and (min-width: 600px) {
    width: 60px;
  }
`

const Icons = () => {
    return (
        <>
            <Link href="/">
                <div className="sm:w-10 md:w-16 lg:w-18">
                    <img src="/logos/home.svg" height="auto" width="100%" alt="" />
                </div>
            </Link>
            <Nav />
            <div className="sm:w-10 md:w-16 lg:w-18">
                <Sound />
            </div>
            <a href="/cupOfCoffee/coffee" target="_blank">
                <div className="sm:w-10 md:w-16 lg:w-18">
                    <img src="/logos/coffee.svg" height="auto" width="100%" alt="" />
                </div>
            </a>
        </>
    )
}

export default Icons


