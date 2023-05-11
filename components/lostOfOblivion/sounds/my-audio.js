import useSound from 'use-sound'
import { useState } from 'react'
import styled from 'styled-components'

const Wrap = styled.span`
  cursor: pointer;
`;
const Sound = styled.span`
  font-size: inherit;
  color: #8eb1bf;
`;

const MyAudio = ({ sound, name }) => {
    const [play, { stop }] = useSound(
        sound,
        { volume: 0.4 }
    )
    const [isHovered, setIsHovered] = useState(false)

    return (
        <Wrap key={isHovered}>
            <Sound
                onMouseEnter={() => {
                    setIsHovered(true)
                    play()
                }}
                onMouseLeave={() => {
                    setIsHovered(false)
                    stop()
                }}
            >
                { name }
            </Sound>
        </Wrap>
    )
}

export default MyAudio