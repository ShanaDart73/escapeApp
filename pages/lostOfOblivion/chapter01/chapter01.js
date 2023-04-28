import Chap01 from '../../../data/lostOfOblivion/chapters/chap01'
import { DisableCopyText } from '../../../components/lostOfOblivion/chapters/content-protection'

const Chapter01 = () => {
    return (
        <DisableCopyText  onContextMenu={(e) => e.preventDefault()}>
            <Chap01 />
        </DisableCopyText>
    )
}

export default Chapter01