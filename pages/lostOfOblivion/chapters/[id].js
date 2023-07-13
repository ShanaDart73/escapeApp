import { getAllChapters, getAllChapIds } from '../../../lib/lostOfOblivion/allDataArrays'
import { Wrapper, Container, Header, Content } from '../../../components/homepage/home.style'
import { deserialize } from 'react-serialize'

export async function getStaticPaths() {
    const paths = await getAllChapIds()
    return {
        paths,
        fallback: false
    }
}

export async function getStaticProps({ params }) {
    const data = await getAllChapters(params.id)
    return {
        props: {
            data
        }
    }
}

const DynamicPages = ({ data }) => {
    return (
        <Wrapper onContextMenu={(e) => e.preventDefault()}>
            <Container>
                <Header>
                    {data.header}
                </Header>
                <div></div>
                <Content>
                    {deserialize(data.content)}
                </Content>
                <div></div>
                <div></div>
                <div></div>
            </Container>
        </Wrapper>
    )
}

export default DynamicPages