import { ChapOne, ChapTwo, ChapThree, ChapFour, ChapFive } from './allChapters'
import { serialize } from 'react-serialize'

export async function getAllChapters(chapId) {
    const dataSet = {
        '1': {
            header: 'Lost of Oblivion: Chapter One',
            leftImg: '',
            content: serialize(ChapOne),
            rightImg: '',
            leftBtn: null,
            rightBtn: '2'
        },
        '2': {
            header: 'Lost of Oblivion: Chapter Two',
            leftImg: '',
            content: serialize(ChapTwo),
            rightImg: '',
            leftBtn: '1',
            rightBtn: '3'
        },
        '3': {
            header: 'Lost of Oblivion: Chapter Three',
            leftImg: '',
            content: serialize(ChapThree),
            rightImg: '',
            leftBtn: '2',
            rightBtn: '4'
        },
        '4': {
            header: 'Lost of Oblivion: Chapter Four',
            leftImg: '',
            content: serialize(ChapFour),
            rightImg: '',
            leftBtn: '3',
            rightBtn: '5'
        },
        '5': {
            header: 'Lost of Oblivion: Chapter Five',
            leftImg: '',
            content: serialize(ChapFive),
            rightImg: '',
            leftBtn: '4',
            rightBtn: null
        },
        '6': {
            header: '',
            leftImg: '',
            content: '',
            rightImg: '',
            leftBtn: '',
            rightBtn: ''
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