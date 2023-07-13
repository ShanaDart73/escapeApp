import { ChapOne, ChapTwo, ChapThree, ChapFour, ChapFive } from './allChapters'
import { serialize } from 'react-serialize'

export async function getAllChapters(chapId) {
    const dataSet = {
        '1': {
            header: 'Lost of Oblivion: Chapter One',
            leftPicture: '',
            leftImg: '',
            content: serialize(ChapOne),
            rightPicture: '',
            rightImg: '',
            sidebar: '',
            icons: '',
            footer: '',
            leftBtn: 'Prev',
            rightBtn: 'Night'
        },
        '2': {
            header: 'Lost of Oblivion: Chapter Two',
            leftPicture: '',
            leftImg: '',
            content: '',
            rightPicture: '',
            rightImg: '',
            sidebar: '',
            icons: '',
            footer: '',
            leftBtn: '',
            rightBtn: ''
        },
        '3': {
            header: 'Lost of Oblivion: Chapter Three',
            leftPicture: '',
            leftImg: '',
            content: '',
            rightPicture: '',
            rightImg: '',
            sidebar: '',
            icons: '',
            footer: '',
            leftBtn: '',
            rightBtn: ''
        },
        '4': {
            header: 'Lost of Oblivion: Chapter Four',
            leftPicture: '',
            leftImg: '',
            content: '',
            rightPicture: '',
            rightImg: '',
            sidebar: '',
            icons: '',
            footer: '',
            leftBtn: '',
            rightBtn: ''
        },
        '5': {
            header: 'Lost of Oblivion: Chapter Five',
            leftPicture: '',
            leftImg: '',
            content: '',
            rightPicture: '',
            rightImg: '',
            sidebar: '',
            icons: '',
            footer: '',
            leftBtn: '',
            rightBtn: ''
        },
        '6': {
            header: '',
            leftPicture: '',
            leftImg: '',
            content: '',
            rightPicture: '',
            rightImg: '',
            sidebar: '',
            icons: '',
            footer: '',
            leftBtn: '',
            rightBtn: ''
        },
        '7': {
            header: '',
            leftPicture: '',
            leftImg: '',
            content: '',
            rightPicture: '',
            rightImg: '',
            sidebar: '',
            icons: '',
            footer: '',
            leftBtn: '',
            rightBtn: ''
        },
        '8': {
            header: '',
            leftPicture: '',
            leftImg: '',
            content: '',
            rightPicture: '',
            rightImg: '',
            sidebar: '',
            icons: '',
            footer: '',
            leftBtn: '',
            rightBtn: ''
        },
        '9': {
            header: '',
            leftPicture: '',
            leftImg: '',
            content: '',
            rightPicture: '',
            rightImg: '',
            sidebar: '',
            icons: '',
            footer: '',
            leftBtn: '',
            rightBtn: ''
        },
        '10': {
            header: '',
            leftPicture: '',
            leftImg: '',
            content: '',
            rightPicture: '',
            rightImg: '',
            sidebar: '',
            icons: '',
            footer: '',
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