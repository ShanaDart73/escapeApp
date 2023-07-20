import { useState } from 'react'
import { chapter01, chapter02 } from '../../../lib/lostOfOblivion/allSounds'
import { Sidebar, AudioIcon } from './sound.style'

const Sound = () => {
    const [audio, setAudio] = useState(false)
    const handleClick = () => {
        setAudio(!audio)
    }
    const soundChapList = [
        { name: chapter01, id: 1 },
        { name: chapter02, id: 2 }
    ]

    return (
        <>
            <Sidebar audio={audio}>
                <div onClick={handleClick}><span>&times;</span></div>
                <div>
                    {soundChapList.map(({ name, id }) => (
                        <div key={id}>
                            {name}
                        </div>
                    ))}
                </div>
            </Sidebar>
            <AudioIcon audio={audio} onClick={handleClick}>
                <img  src="/logos/audio.svg" height="auto" width="100%" alt="" />
            </AudioIcon>
        </>
    )
}

export default Sound