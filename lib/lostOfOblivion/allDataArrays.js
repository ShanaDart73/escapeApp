import { ChapOne, ChapTwo, ChapThree, ChapFour, ChapFive, ChapSix, ChapSeven, ChapEight, ChapNine,
    ChapTen, Chap11, Chap12, Chap13, Chap14, Chap15, Chap16, Chap17, Chap18, Chap19, Chap20, Chap21,
    Chap22, Chap23, Chap24, Chap25, Chap26, Chap27, Chap28, Chap29, Chap30, Chap31, Chap32, Chap33,
    Chap34, Chap35} from './allChapters'
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
            rightBtn: '20'
        },
        '20': {
            header: 'Lost of Oblivion: Chapter 20',
            leftImg: '/photos/lostOfOblivion/night-forest.png',
            content: serialize(Chap20),
            rightImg: '/photos/lostOfOblivion/night-forest-right.png',
            leftBtn: '19',
            rightBtn: '21'
        },
        '21': {
            header: 'Lost of Oblivion: Chapter 21',
            leftImg: '/photos/lostOfOblivion/night-forest.png',
            content: serialize(Chap21),
            rightImg: '/photos/lostOfOblivion/night-forest-right.png',
            leftBtn: '20',
            rightBtn: '22'
        },
        '22': {
            header: 'Lost of Oblivion: Chapter 22',
            leftImg: '/photos/lostOfOblivion/night-forest.png',
            content: serialize(Chap22),
            rightImg: '/photos/lostOfOblivion/night-forest-right.png',
            leftBtn: '21',
            rightBtn: '23'
        },
        '23': {
            header: 'Lost of Oblivion: Chapter 23',
            leftImg: '/photos/lostOfOblivion/night-forest.png',
            content: serialize(Chap23),
            rightImg: '/photos/lostOfOblivion/night-forest-right.png',
            leftBtn: '22',
            rightBtn: '24'
        },
        '24': {
            header: 'Lost of Oblivion: Chapter 24',
            leftImg: '/photos/lostOfOblivion/night-forest.png',
            content: serialize(Chap24),
            rightImg: '/photos/lostOfOblivion/night-forest-right.png',
            leftBtn: '23',
            rightBtn: '25'
        },
        '25': {
            header: 'Lost of Oblivion: Chapter 25',
            leftImg: '/photos/lostOfOblivion/night-forest.png',
            content: serialize(Chap25),
            rightImg: '/photos/lostOfOblivion/night-forest-right.png',
            leftBtn: '24',
            rightBtn: '26'
        },
        '26': {
            header: 'Lost of Oblivion: Chapter 26',
            leftImg: '/photos/lostOfOblivion/night-forest.png',
            content: serialize(Chap26),
            rightImg: '/photos/lostOfOblivion/night-forest-right.png',
            leftBtn: '25',
            rightBtn: '27'
        },
        '27': {
            header: 'Lost of Oblivion: Chapter 27',
            leftImg: '/photos/lostOfOblivion/night-forest.png',
            content: serialize(Chap27),
            rightImg: '/photos/lostOfOblivion/night-forest-right.png',
            leftBtn: '26',
            rightBtn: '28'
        },
        '28': {
            header: 'Lost of Oblivion: Chapter 28',
            leftImg: '/photos/lostOfOblivion/night-forest.png',
            content: serialize(Chap28),
            rightImg: '/photos/lostOfOblivion/night-forest-right.png',
            leftBtn: '27',
            rightBtn: '29'
        },
        '29': {
            header: 'Lost of Oblivion: Chapter 29',
            leftImg: '/photos/lostOfOblivion/night-forest.png',
            content: serialize(Chap29),
            rightImg: '/photos/lostOfOblivion/night-forest-right.png',
            leftBtn: '28',
            rightBtn: '30'
        },
        '30': {
            header: 'Lost of Oblivion: Chapter 30',
            leftImg: '/photos/lostOfOblivion/night-forest.png',
            content: serialize(Chap30),
            rightImg: '/photos/lostOfOblivion/night-forest-right.png',
            leftBtn: '29',
            rightBtn: '31'
        },
        '31': {
            header: 'Lost of Oblivion: Chapter 31',
            leftImg: '/photos/lostOfOblivion/night-forest.png',
            content: serialize(Chap31),
            rightImg: '/photos/lostOfOblivion/night-forest-right.png',
            leftBtn: '30',
            rightBtn: '32'
        },
        '32': {
            header: 'Lost of Oblivion: Chapter 32',
            leftImg: '/photos/lostOfOblivion/night-forest.png',
            content: serialize(Chap32),
            rightImg: '/photos/lostOfOblivion/night-forest-right.png',
            leftBtn: '31',
            rightBtn: '33'
        },
        '33': {
            header: 'Lost of Oblivion: Chapter 33',
            leftImg: '/photos/lostOfOblivion/night-forest.png',
            content: serialize(Chap33),
            rightImg: '/photos/lostOfOblivion/night-forest-right.png',
            leftBtn: '32',
            rightBtn: '34'
        },
        '34': {
            header: 'Lost of Oblivion: Chapter 34',
            leftImg: '/photos/lostOfOblivion/night-forest.png',
            content: serialize(Chap34),
            rightImg: '/photos/lostOfOblivion/night-forest-right.png',
            leftBtn: '33',
            rightBtn: '35'
        },
        '35': {
            header: 'Lost of Oblivion: Chapter 35',
            leftImg: '/photos/lostOfOblivion/night-forest.png',
            content: serialize(Chap35),
            rightImg: '/photos/lostOfOblivion/night-forest-right.png',
            leftBtn: '34',
            rightBtn: '35'
        },
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
        {
            params: {
                id: '20'
            }
        },
        {
            params: {
                id: '21'
            }
        },
        {
            params: {
                id: '22'
            }
        },
        {
            params: {
                id: '23'
            }
        },
        {
            params: {
                id: '24'
            }
        },
        {
            params: {
                id: '25'
            }
        },
        {
            params: {
                id: '26'
            }
        },
        {
            params: {
                id: '27'
            }
        },
        {
            params: {
                id: '28'
            }
        },
        {
            params: {
                id: '29'
            }
        },
        {
            params: {
                id: '30'
            }
        },
        {
            params: {
                id: '31'
            }
        },
        {
            params: {
                id: '32'
            }
        },
        {
            params: {
                id: '33'
            }
        },
        {
            params: {
                id: '34'
            }
        },
        {
            params: {
                id: '35'
            }
        },
    ]
}