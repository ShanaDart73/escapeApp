import { ChapOne, ChapTwo, ChapThree, ChapFour, ChapFive, ChapSix } from './allChapters'
import { serialize } from 'react-serialize'

export async function getAllChapters(chapId) {
    const dataSet = {
        '1': {
            header: 'Lost of Oblivion: Chapter One',
            leftImg: '/photos/lostOfOblivion/night-forest.png',
            content: serialize(ChapOne),
            rightImg: '/photos/lostOfOblivion/night-forest.png',
            leftBtn: '1',
            rightBtn: '2'
        },
        '2': {
            header: 'Lost of Oblivion: Chapter Two',
            leftImg: '/photos/lostOfOblivion/night-forest.png',
            content: serialize(ChapTwo),
            rightImg: '/photos/lostOfOblivion/night-forest.png',
            leftBtn: '1',
            rightBtn: '3'
        },
        '3': {
            header: 'Lost of Oblivion: Chapter Three',
            leftImg: '/photos/lostOfOblivion/night-forest.png',
            content: serialize(ChapThree),
            rightImg: '/photos/lostOfOblivion/night-forest.png',
            leftBtn: '2',
            rightBtn: '4'
        },
        '4': {
            header: 'Lost of Oblivion: Chapter Four',
            leftImg: '/photos/lostOfOblivion/night-forest.png',
            content: serialize(ChapFour),
            rightImg: '/photos/lostOfOblivion/night-forest.png',
            leftBtn: '3',
            rightBtn: '5'
        },
        '5': {
            header: 'Lost of Oblivion: Chapter Five',
            leftImg: '/photos/lostOfOblivion/night-forest.png',
            content: serialize(ChapFive),
            rightImg: '/photos/lostOfOblivion/night-forest.png',
            leftBtn: '4',
            rightBtn: '6'
        },
        '6': {
            header: 'Lost of Oblivion: Chapter Six',
            leftImg: '/photos/lostOfOblivion/night-forest.png',
            content: serialize(ChapSix),
            rightImg: '/photos/lostOfOblivion/night-forest.png',
            leftBtn: '5',
            rightBtn: '6'
        },
        '7': {
            header: '',
            leftImg: '',
            content: '',
            rightImg: '',
            leftBtn: '',
            rightBtn: ''
        },
        '8': {
            header: '',
            leftImg: '',
            content: '',
            rightImg: '',
            leftBtn: '',
            rightBtn: ''
        },
        '9': {
            header: '',
            leftImg: '',
            content: '',
            rightImg: '',
            leftBtn: '',
            rightBtn: ''
        },
        '10': {
            header: '',
            leftImg: '',
            content: '',
            rightImg: '',
            leftBtn: '',
            rightBtn: ''
        }
    }
    return dataSet[chapId]
}

export async function getAllChapIds() {
    return [
        {
            params: {
                id: '1'
            }
        },
        {
            params: {
                id: '2'
            }
        },
        {
            params: {
                id: '3'
            }
        },
        {
            params: {
                id: '4'
            }
        },
        {
            params: {
                id: '5'
            }
        },
        {
            params: {
                id: '6'
            }
        },
        {
            params: {
                id: '7'
            }
        },
        {
            params: {
                id: '8'
            }
        },
        {
            params: {
                id: '9'
            }
        },
        {
            params: {
                id: '10'
            }
        }
    ]
}