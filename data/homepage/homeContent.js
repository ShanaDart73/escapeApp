import Link from 'next/link'
import styled from 'styled-components'

const Canvas = styled.div`
  width: 300px;
  height: 500px;
  border-radius: 3px;
  background-color: rgba(0, 0, 0, 0.66);
  cursor: pointer;
`

const HomeContent = () => {
    return (
        <>
            <Link href="/lostOfOblivion/chapter01">
                <Canvas />
            </Link>

            <Canvas />
            <Canvas />
            <Canvas />
        </>
    )
}

export default HomeContent