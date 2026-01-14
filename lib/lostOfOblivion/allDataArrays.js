import markdownIt from 'markdown-it';
const md = markdownIt({html: true, linkify: true, typographer: true, breaks: false});
import fs from 'fs';

export async function getAllChapters(chapId) {
	const chapter01 = fs.readFileSync('./lib/lostOfOblivion/chapters/chapter01.md', 'utf8');
	const chapter02 = fs.readFileSync('./lib/lostOfOblivion/chapters/chapter02.md', 'utf8');
	const chapter03 = fs.readFileSync('./lib/lostOfOblivion/chapters/chapter03.md', 'utf8');
	const chapter04 = fs.readFileSync('./lib/lostOfOblivion/chapters/chapter04.md', 'utf8');
	const chapter05 = fs.readFileSync('./lib/lostOfOblivion/chapters/chapter05.md', 'utf8');
	const chapter06 = fs.readFileSync('./lib/lostOfOblivion/chapters/chapter06.md', 'utf8');
	const chapter07 = fs.readFileSync('./lib/lostOfOblivion/chapters/chapter07.md', 'utf8');
	const chapter08 = fs.readFileSync('./lib/lostOfOblivion/chapters/chapter08.md', 'utf8');
	const chapter09 = fs.readFileSync('./lib/lostOfOblivion/chapters/chapter09.md', 'utf8');
	const chapter10 = fs.readFileSync('./lib/lostOfOblivion/chapters/chapter10.md', 'utf8');
	const chapter11 = fs.readFileSync('./lib/lostOfOblivion/chapters/chapter11.md', 'utf8');
	const chapter12 = fs.readFileSync('./lib/lostOfOblivion/chapters/chapter12.md', 'utf8');
	const chapter13 = fs.readFileSync('./lib/lostOfOblivion/chapters/chapter13.md', 'utf8');
	const chapter14 = fs.readFileSync('./lib/lostOfOblivion/chapters/chapter14.md', 'utf8');
	const chapter15 = fs.readFileSync('./lib/lostOfOblivion/chapters/chapter15.md', 'utf8');
	const chapter16 = fs.readFileSync('./lib/lostOfOblivion/chapters/chapter16.md', 'utf8');
	const chapter17 = fs.readFileSync('./lib/lostOfOblivion/chapters/chapter17.md', 'utf8');
	const chapter18 = fs.readFileSync('./lib/lostOfOblivion/chapters/chapter18.md', 'utf8');
	const chapter19 = fs.readFileSync('./lib/lostOfOblivion/chapters/chapter19.md', 'utf8');
	const chapter20 = fs.readFileSync('./lib/lostOfOblivion/chapters/chapter20.md', 'utf8');
	const chapter21 = fs.readFileSync('./lib/lostOfOblivion/chapters/chapter21.md', 'utf8');
	const chapter22 = fs.readFileSync('./lib/lostOfOblivion/chapters/chapter22.md', 'utf8');
	const chapter23 = fs.readFileSync('./lib/lostOfOblivion/chapters/chapter23.md', 'utf8');
	const chapter24 = fs.readFileSync('./lib/lostOfOblivion/chapters/chapter24.md', 'utf8');
	const chapter25 = fs.readFileSync('./lib/lostOfOblivion/chapters/chapter25.md', 'utf8');
	const chapter26 = fs.readFileSync('./lib/lostOfOblivion/chapters/chapter26.md', 'utf8');
	const chapter27 = fs.readFileSync('./lib/lostOfOblivion/chapters/chapter27.md', 'utf8');
	const chapter28 = fs.readFileSync('./lib/lostOfOblivion/chapters/chapter28.md', 'utf8');
	const chapter29 = fs.readFileSync('./lib/lostOfOblivion/chapters/chapter29.md', 'utf8');
	const chapter30 = fs.readFileSync('./lib/lostOfOblivion/chapters/chapter30.md', 'utf8');
	const chapter31 = fs.readFileSync('./lib/lostOfOblivion/chapters/chapter31.md', 'utf8');
	const chapter32 = fs.readFileSync('./lib/lostOfOblivion/chapters/chapter32.md', 'utf8');
	const chapter33 = fs.readFileSync('./lib/lostOfOblivion/chapters/chapter33.md', 'utf8');
	const chapter34 = fs.readFileSync('./lib/lostOfOblivion/chapters/chapter34.md', 'utf8');
	const chapter35 = fs.readFileSync('./lib/lostOfOblivion/chapters/chapter35.md', 'utf8');
	const chapter36 = fs.readFileSync('./lib/lostOfOblivion/chapters/chapter36.md', 'utf8');
	const chapter37 = fs.readFileSync('./lib/lostOfOblivion/chapters/chapter37.md', 'utf8');
	const chapter38 = fs.readFileSync('./lib/lostOfOblivion/chapters/chapter38.md', 'utf8');

    const dataSet = {
        '1': {
            header: 'Lost of Oblivion: Chapter One',
            leftImg: '/photos/lostOfOblivion/night-forest.png',
            content: md.render(chapter01),
            rightImg: '/photos/lostOfOblivion/night-forest-right.png',
            leftBtn: '1',
            rightBtn: '2'
        },
        '2': {
            header: 'Lost of Oblivion: Chapter Two',
            leftImg: '/photos/lostOfOblivion/night-forest.png',
            content: md.render(chapter02),
            rightImg: '/photos/lostOfOblivion/night-forest-right.png',
            leftBtn: '1',
            rightBtn: '3'
        },
        '3': {
            header: 'Lost of Oblivion: Chapter Three',
            leftImg: '/photos/lostOfOblivion/night-forest.png',
            content: md.render(chapter03),
            rightImg: '/photos/lostOfOblivion/night-forest-right.png',
            leftBtn: '2',
            rightBtn: '4'
        },
        '4': {
            header: 'Lost of Oblivion: Chapter Four',
            leftImg: '/photos/lostOfOblivion/night-forest.png',
            content: md.render(chapter04),
            rightImg: '/photos/lostOfOblivion/night-forest-right.png',
            leftBtn: '3',
            rightBtn: '5'
        },
        '5': {
            header: 'Lost of Oblivion: Chapter Five',
            leftImg: '/photos/lostOfOblivion/night-forest.png',
            content: md.render(chapter05),
            rightImg: '/photos/lostOfOblivion/night-forest-right.png',
            leftBtn: '4',
            rightBtn: '6'
        },
        '6': {
            header: 'Lost of Oblivion: Chapter Six',
            leftImg: '/photos/lostOfOblivion/night-forest.png',
            content: md.render(chapter06),
            rightImg: '/photos/lostOfOblivion/night-forest-right.png',
            leftBtn: '5',
            rightBtn: '7'
        },
        '7': {
            header: 'Lost of Oblivion: Chapter Seven',
            leftImg: '/photos/lostOfOblivion/night-forest.png',
            content: md.render(chapter07),
            rightImg: '/photos/lostOfOblivion/night-forest-right.png',
            leftBtn: '6',
            rightBtn: '8'
        },
        '8': {
            header: 'Lost of Oblivion: Chapter Eight',
            leftImg: '/photos/lostOfOblivion/night-forest.png',
            content: md.render(chapter08),
            rightImg: '/photos/lostOfOblivion/night-forest-right.png',
            leftBtn: '7',
            rightBtn: '9'
        },
        '9': {
            header: 'Lost of Oblivion: Chapter Nine',
            leftImg: '/photos/lostOfOblivion/night-forest.png',
            content: md.render(chapter09),
            rightImg: '/photos/lostOfOblivion/night-forest-right.png',
            leftBtn: '8',
            rightBtn: '10'
        },
        '10': {
            header: 'Lost of Oblivion: Chapter Ten',
            leftImg: '/photos/lostOfOblivion/night-forest.png',
            content: md.render(chapter10),
            rightImg: '/photos/lostOfOblivion/night-forest-right.png',
            leftBtn: '9',
            rightBtn: '11'
        },
        '11': {
            header: 'Lost of Oblivion: Chapter 11',
            leftImg: '/photos/lostOfOblivion/night-forest.png',
            content: md.render(chapter11),
            rightImg: '/photos/lostOfOblivion/night-forest-right.png',
            leftBtn: '10',
            rightBtn: '12'
        },
        '12': {
            header: 'Lost of Oblivion: Chapter 12',
            leftImg: '/photos/lostOfOblivion/night-forest.png',
            content: md.render(chapter12),
            rightImg: '/photos/lostOfOblivion/night-forest-right.png',
            leftBtn: '11',
            rightBtn: '13'
        },
        '13': {
            header: 'Lost of Oblivion: Chapter 13',
            leftImg: '/photos/lostOfOblivion/night-forest.png',
            content: md.render(chapter13),
            rightImg: '/photos/lostOfOblivion/night-forest-right.png',
            leftBtn: '12',
            rightBtn: '14'
        },
        '14': {
            header: 'Lost of Oblivion: Chapter 14',
            leftImg: '/photos/lostOfOblivion/night-forest.png',
            content: md.render(chapter14),
            rightImg: '/photos/lostOfOblivion/night-forest-right.png',
            leftBtn: '13',
            rightBtn: '15'
        },
        '15': {
            header: 'Lost of Oblivion: Chapter 15',
            leftImg: '/photos/lostOfOblivion/night-forest.png',
            content: md.render(chapter15),
            rightImg: '/photos/lostOfOblivion/night-forest-right.png',
            leftBtn: '14',
            rightBtn: '16'
        },
        '16': {
            header: 'Lost of Oblivion: Chapter 16',
            leftImg: '/photos/lostOfOblivion/night-forest.png',
            content: md.render(chapter16),
            rightImg: '/photos/lostOfOblivion/night-forest-right.png',
            leftBtn: '15',
            rightBtn: '17'
        },
        '17': {
            header: 'Lost of Oblivion: Chapter 17',
            leftImg: '/photos/lostOfOblivion/night-forest.png',
            content: md.render(chapter17),
            rightImg: '/photos/lostOfOblivion/night-forest-right.png',
            leftBtn: '16',
            rightBtn: '18'
        },
        '18': {
            header: 'Lost of Oblivion: Chapter 18',
            leftImg: '/photos/lostOfOblivion/night-forest.png',
            content: md.render(chapter18),
            rightImg: '/photos/lostOfOblivion/night-forest-right.png',
            leftBtn: '17',
            rightBtn: '19'
        },
        '19': {
            header: 'Lost of Oblivion: Chapter 19',
            leftImg: '/photos/lostOfOblivion/night-forest.png',
            content: md.render(chapter19),
            rightImg: '/photos/lostOfOblivion/night-forest-right.png',
            leftBtn: '18',
            rightBtn: '20'
        },
        '20': {
            header: 'Lost of Oblivion: Chapter 20',
            leftImg: '/photos/lostOfOblivion/night-forest.png',
            content: md.render(chapter20),
            rightImg: '/photos/lostOfOblivion/night-forest-right.png',
            leftBtn: '19',
            rightBtn: '21'
        },
        '21': {
            header: 'Lost of Oblivion: Chapter 21',
            leftImg: '/photos/lostOfOblivion/night-forest.png',
            content: md.render(chapter21),
            rightImg: '/photos/lostOfOblivion/night-forest-right.png',
            leftBtn: '20',
            rightBtn: '22'
        },
        '22': {
            header: 'Lost of Oblivion: Chapter 22',
            leftImg: '/photos/lostOfOblivion/night-forest.png',
            content: md.render(chapter22),
            rightImg: '/photos/lostOfOblivion/night-forest-right.png',
            leftBtn: '21',
            rightBtn: '23'
        },
        '23': {
            header: 'Lost of Oblivion: Chapter 23',
            leftImg: '/photos/lostOfOblivion/night-forest.png',
            content: md.render(chapter23),
            rightImg: '/photos/lostOfOblivion/night-forest-right.png',
            leftBtn: '22',
            rightBtn: '24'
        },
        '24': {
            header: 'Lost of Oblivion: Chapter 24',
            leftImg: '/photos/lostOfOblivion/night-forest.png',
            content: md.render(chapter24),
            rightImg: '/photos/lostOfOblivion/night-forest-right.png',
            leftBtn: '23',
            rightBtn: '25'
        },
        '25': {
            header: 'Lost of Oblivion: Chapter 25',
            leftImg: '/photos/lostOfOblivion/night-forest.png',
            content: md.render(chapter25),
            rightImg: '/photos/lostOfOblivion/night-forest-right.png',
            leftBtn: '24',
            rightBtn: '26'
        },
        '26': {
            header: 'Lost of Oblivion: Chapter 26',
            leftImg: '/photos/lostOfOblivion/night-forest.png',
            content: md.render(chapter26),
            rightImg: '/photos/lostOfOblivion/night-forest-right.png',
            leftBtn: '25',
            rightBtn: '27'
        },
        '27': {
            header: 'Lost of Oblivion: Chapter 27',
            leftImg: '/photos/lostOfOblivion/night-forest.png',
            content: md.render(chapter27),
            rightImg: '/photos/lostOfOblivion/night-forest-right.png',
            leftBtn: '26',
            rightBtn: '28'
        },
        '28': {
            header: 'Lost of Oblivion: Chapter 28',
            leftImg: '/photos/lostOfOblivion/night-forest.png',
            content: md.render(chapter28),
            rightImg: '/photos/lostOfOblivion/night-forest-right.png',
            leftBtn: '27',
            rightBtn: '29'
        },
        '29': {
            header: 'Lost of Oblivion: Chapter 29',
            leftImg: '/photos/lostOfOblivion/night-forest.png',
            content: md.render(chapter29),
            rightImg: '/photos/lostOfOblivion/night-forest-right.png',
            leftBtn: '28',
            rightBtn: '30'
        },
        '30': {
            header: 'Lost of Oblivion: Chapter 30',
            leftImg: '/photos/lostOfOblivion/night-forest.png',
            content: md.render(chapter30),
            rightImg: '/photos/lostOfOblivion/night-forest-right.png',
            leftBtn: '29',
            rightBtn: '31'
        },
        '31': {
            header: 'Lost of Oblivion: Chapter 31',
            leftImg: '/photos/lostOfOblivion/night-forest.png',
            content: md.render(chapter31),
            rightImg: '/photos/lostOfOblivion/night-forest-right.png',
            leftBtn: '30',
            rightBtn: '32'
        },
        '32': {
            header: 'Lost of Oblivion: Chapter 32',
            leftImg: '/photos/lostOfOblivion/night-forest.png',
            content: md.render(chapter32),
            rightImg: '/photos/lostOfOblivion/night-forest-right.png',
            leftBtn: '31',
            rightBtn: '33'
        },
        '33': {
            header: 'Lost of Oblivion: Chapter 33',
            leftImg: '/photos/lostOfOblivion/night-forest.png',
            content: md.render(chapter33),
            rightImg: '/photos/lostOfOblivion/night-forest-right.png',
            leftBtn: '32',
            rightBtn: '34'
        },
        '34': {
            header: 'Lost of Oblivion: Chapter 34',
            leftImg: '/photos/lostOfOblivion/night-forest.png',
            content: md.render(chapter34),
            rightImg: '/photos/lostOfOblivion/night-forest-right.png',
            leftBtn: '33',
            rightBtn: '35'
        },
        '35': {
            header: 'Lost of Oblivion: Chapter 35',
            leftImg: '/photos/lostOfOblivion/night-forest.png',
            content: md.render(chapter35),
            rightImg: '/photos/lostOfOblivion/night-forest-right.png',
            leftBtn: '34',
            rightBtn: '36'
        },
        '36': {
            header: 'Lost of Oblivion: Chapter 36',
            leftImg: '/photos/lostOfOblivion/night-forest.png',
            content: md.render(chapter36),
            rightImg: '/photos/lostOfOblivion/night-forest-right.png',
            leftBtn: '35',
            rightBtn: '37'
        },
        '37': {
            header: 'Lost of Oblivion: Chapter 37',
            leftImg: '/photos/lostOfOblivion/night-forest.png',
            content: md.render(chapter37),
            rightImg: '/photos/lostOfOblivion/night-forest-right.png',
            leftBtn: '36',
            rightBtn: '38'
        },
        '38': {
            header: 'Lost of Oblivion: Last Chapter 38',
            leftImg: '/photos/lostOfOblivion/night-forest.png',
            content: md.render(chapter38),
            rightImg: '/photos/lostOfOblivion/night-forest-right.png',
            leftBtn: '37',
            rightBtn: '38'
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
        {
            params: {
                id: '36'
            }
        },
        {
            params: {
                id: '37'
            }
        },
        {
            params: {
                id: '38'
            }
        }
    ]
}