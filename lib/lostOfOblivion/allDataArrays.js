import { ChapOne, ChapTwo, ChapThree, ChapFour, ChapFive, ChapSix, ChapSeven, ChapEight, ChapNine, ChapTen, Chap11, Chap12, Chap13, Chap14, Chap15, Chap16, Chap17, Chap18, Chap19 } from './allChapters'
import { serialize } from 'react-serialize'

export async function getAllChapters(chapId) {
    const dataSet = {
        '1': {
            header: 'Lost of Oblivion: Chapter One',
            leftImg: '/photos/lostOfOblivion/night-forest.png',
            content: serialize(ChapOne),
            rightImg: '/photos/lostOfOblivion/night-forest-right.png',
            leftBtn: '1',
            rightBtn: '2'
        },
        '2': {
            header: 'Lost of Oblivion: Chapter Two',
            leftImg: '/photos/lostOfOblivion/night-forest.png',
            content: serialize(ChapTwo),
            rightImg: '/photos/lostOfOblivion/night-forest-right.png',
            leftBtn: '1',
            rightBtn: '3'
        },
        '3': {
            header: 'Lost of Oblivion: Chapter Three',
            leftImg: '/photos/lostOfOblivion/night-forest.png',
            content: serialize(ChapThree),
            rightImg: '/photos/lostOfOblivion/night-forest-right.png',
            leftBtn: '2',
            rightBtn: '4'
        },
        '4': {
            header: 'Lost of Oblivion: Chapter Four',
            leftImg: '/photos/lostOfOblivion/night-forest.png',
            content: serialize(ChapFour),
            rightImg: '/photos/lostOfOblivion/night-forest-right.png',
            leftBtn: '3',
            rightBtn: '5'
        },
        '5': {
            header: 'Lost of Oblivion: Chapter Five',
            leftImg: '/photos/lostOfOblivion/night-forest.png',
            content: serialize(ChapFive),
            rightImg: '/photos/lostOfOblivion/night-forest-right.png',
            leftBtn: '4',
            rightBtn: '6'
        },
        '6': {
            header: 'Lost of Oblivion: Chapter Six',
            leftImg: '/photos/lostOfOblivion/night-forest.png',
            content: serialize(ChapSix),
            rightImg: '/photos/lostOfOblivion/night-forest-right.png',
            leftBtn: '5',
            rightBtn: '7'
        },
        '7': {
            header: 'Lost of Oblivion: Chapter Seven',
            leftImg: '/photos/lostOfOblivion/night-forest.png',
            content: serialize(ChapSeven),
            rightImg: '/photos/lostOfOblivion/night-forest-right.png',
            leftBtn: '6',
            rightBtn: '8'
        },
        '8': {
            header: 'Lost of Oblivion: Chapter Eight',
            leftImg: '/photos/lostOfOblivion/night-forest.png',
            content: serialize(ChapEight),
            rightImg: '/photos/lostOfOblivion/night-forest-right.png',
            leftBtn: '7',
            rightBtn: '9'
        },
        '9': {
            header: 'Lost of Oblivion: Chapter Nine',
            leftImg: '/photos/lostOfOblivion/night-forest.png',
            content: serialize(ChapNine),
            rightImg: '/photos/lostOfOblivion/night-forest-right.png',
            leftBtn: '8',
            rightBtn: '10'
        },
        '10': {
            header: 'Lost of Oblivion: Chapter Ten',
            leftImg: '/photos/lostOfOblivion/night-forest.png',
            content: serialize(ChapTen),
            rightImg: '/photos/lostOfOblivion/night-forest-right.png',
            leftBtn: '9',
            rightBtn: '11'
        },
        '11': {
            header: 'Lost of Oblivion: Chapter 11',
            leftImg: '/photos/lostOfOblivion/night-forest.png',
            content: serialize(Chap11),
            rightImg: '/photos/lostOfOblivion/night-forest-right.png',
            leftBtn: '10',
            rightBtn: '12'
        },
        '12': {
            header: 'Lost of Oblivion: Chapter 12',
            leftImg: '/photos/lostOfOblivion/night-forest.png',
            content: serialize(Chap12),
            rightImg: '/photos/lostOfOblivion/night-forest-right.png',
            leftBtn: '11',
            rightBtn: '13'
        },
        '13': {
            header: 'Lost of Oblivion: Chapter 13',
            leftImg: '/photos/lostOfOblivion/night-forest.png',
            content: serialize(Chap13),
            rightImg: '/photos/lostOfOblivion/night-forest-right.png',
            leftBtn: '12',
            rightBtn: '14'
        },
        '14': {
            header: 'Lost of Oblivion: Chapter 14',
            leftImg: '/photos/lostOfOblivion/night-forest.png',
            content: serialize(Chap14),
            rightImg: '/photos/lostOfOblivion/night-forest-right.png',
            leftBtn: '13',
            rightBtn: '15'
        },
        '15': {
            header: 'Lost of Oblivion: Chapter 15',
            leftImg: '/photos/lostOfOblivion/night-forest.png',
            content: serialize(Chap15),
            rightImg: '/photos/lostOfOblivion/night-forest-right.png',
            leftBtn: '14',
            rightBtn: '16'
        },
        '16': {
            header: 'Lost of Oblivion: Chapter 16',
            leftImg: '/photos/lostOfOblivion/night-forest.png',
            content: serialize(Chap16),
            rightImg: '/photos/lostOfOblivion/night-forest-right.png',
            leftBtn: '15',
            rightBtn: '17'
        },
        '17': {
            header: 'Lost of Oblivion: Chapter 17',
            leftImg: '/photos/lostOfOblivion/night-forest.png',
            content: serialize(Chap17),
            rightImg: '/photos/lostOfOblivion/night-forest-right.png',
            leftBtn: '16',
            rightBtn: '18'
        },
        '18': {
            header: 'Lost of Oblivion: Chapter 18',
            leftImg: '/photos/lostOfOblivion/night-forest.png',
            content: serialize(Chap18),
            rightImg: '/photos/lostOfOblivion/night-forest-right.png',
            leftBtn: '17',
            rightBtn: '19'
        },
        '19': {
            header: 'Lost of Oblivion: Chapter 19',
            leftImg: '/photos/lostOfOblivion/night-forest.png',
            content: serialize(Chap19),
            rightImg: '/photos/lostOfOblivion/night-forest-right.png',
            leftBtn: '18',
            rightBtn: '19'
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
        },
        {
            params: {
                id: '11'
            }
        },
        {
            params: {
                id: '12'
            }
        },
        {
            params: {
                id: '13'
            }
        },
        {
            params: {
                id: '14'
            }
        },
        {
            params: {
                id: '15'
            }
        },
        {
            params: {
                id: '16'
            }
        },
        {
            params: {
                id: '17'
            }
        },
        {
            params: {
                id: '18'
            }
        },
        {
            params: {
                id: '19'
            }
        },
    ]
}