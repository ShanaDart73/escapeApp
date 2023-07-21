import { useState } from 'react'
import MyAudio from '../../sounds/my-audio'
import { allChapters } from '../../../lib/lostOfOblivion/allSounds'
import { Sidebar, CloseSidebar, SoundContainer, SoundList, AudioIcon } from './sound.style'
import {displayContent} from "next/dist/client/dev/fouc";

const Sound = () => {
    const [audio, setAudio] = useState(false)
    const handleClick = () => {
        setAudio(!audio)
    }
    const soundChapList = [
        { name: <MyAudio sound="/audio/weiqianbei.mp3" name="Wèi qiánbèi" />, id: 1 },
        { name: <MyAudio sound="/audio/yuxiaoshan.mp3" name="Yú XiǎoShān" />, id: 2}
    ]

    return (
        <>
            <Sidebar audio={audio}>
                <CloseSidebar onClick={handleClick}><span>&times;</span></CloseSidebar>
                <SoundContainer>
                    {soundChapList.map(({ name, id }) => (
                        <SoundList key={id}>
                            {name}
                        </SoundList>
                    ))}
                </SoundContainer>
            </Sidebar>
            <AudioIcon audio={audio} onClick={handleClick}>
                <img  src="/logos/audio.svg" height="auto" width="100%" alt="" />
            </AudioIcon>
        </>
    )
}

export default Sound