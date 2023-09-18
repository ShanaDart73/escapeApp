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
                <Logo>
                    <img src="/logos/home.svg" height="auto" width="100%" alt="" />
                </Logo>
            </Link>
            <Nav />
            <Logo>
                <Sound />
            </Logo>
            <Logo>
                <img src="/logos/coffee.svg" height="auto" width="100%" alt="" />
            </Logo>
        </>
    )
}

export default Icons


