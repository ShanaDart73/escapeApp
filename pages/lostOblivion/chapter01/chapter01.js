import Chap01 from '../../../data/lostOblivion/chap01'
import { DisableCopyText } from '../../../components/chapters/content-protection'

const Chapter01 = () => {
    return (
        <DisableCopyText  onContextMenu={(e) => e.preventDefault()}>
            <Chap01 />
        </DisableCopyText>
    )
}

export default Chapter01