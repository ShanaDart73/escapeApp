import useSound from 'use-sound'
import { useState } from 'react'

const MyAudio = ({ sound, name }) => {
    const [play, { stop }] = useSound(
        sound,
        { volume: 0.4 }
    )
    const [isHovered, setIsHovered] = useState(false)

    return (
        <span className="cursor-pointer" key={isHovered}>
            <span className="text-gray-500 text-xl md:text-2xl hover:text-blue-300"
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
            </span>
        </span>
    )
}

export default MyAudio