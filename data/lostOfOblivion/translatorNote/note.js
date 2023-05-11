import styled from 'styled-components'
import MyAudio from '../../../components/lostOfOblivion/sounds/my-audio'

const Note = () => {
    const sound = '/audio/weiwuxian.mp3'
    return (
        <Container>
            <p><b>Translator Note:</b></p>
            <p>Modaozushi (The Founder of Demonic Cultivation) is Mo Xiong Tong Xiu's masterpiece that has inspired many authors to write a side story, and, as a big fan of Modaozushi, this side story has caught my attention because Hua Guan Xiu Wei, the writer, has kept the same spirit of the original work.</p>
            <p>The original title of this story when translated in English doesn't make any sense at all, so I call it 'Lost of Oblivion' because, in this story, Wèi WúXiàn loses his happy memories spent with Lán WàngJī, yet, as oblivious as he was of his own feelings towards Lán WàngJī back when they were teenagers, this time, however, he becomes aware of it, and I find his awareness so cute that I decide to give the story this title.</p>
            <p>The author site: <a href="https://lanhuayishengpanjiegui.lofter.com/tag/%E5%BF%98%E7%BE%A1" target="_blank">花冠秀唯</a></p>
            <p>Please tap/hover in order to hear the correct pronunciation of the character's name when it is highlighted like this: <MyAudio sound={sound} name="Wèi WúXiàn" /></p>
        </Container>
    )
}

export default Note

const Container = styled.div`
  text-align: left;
  border-bottom: 1px dashed rgba(255, 255, 255, 0.5);
  margin-bottom: 3em;

  p {
    margin: 0.5em 0;
  }

  a {
    color: rgba(255, 255, 255, 0.7);
    text-decoration: none;
  }

  a:hover {
    color: lightblue;
  }
`;