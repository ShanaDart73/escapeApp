//import { ChapOne, ChapTwo, ChapThree, ChapFour, ChapFive, ChapSix, ChapSeven, ChapEight, ChapNine, ChapTen } from './allChapters'
//import { serialize } from 'react-serialize';
import markdownIt from 'markdown-it';
const md = markdownIt({html: true, linkify: true, typographer: true, breaks: false});
import fs from 'fs';


export async function getAllChapters(chapId) {
	const chapter1 = fs.readFileSync('./lib/lanWangJiVsAlcohol/chapters/chapter1.md', 'utf8');
	const chapter2 = fs.readFileSync('./lib/lanWangJiVsAlcohol/chapters/chapter2.md', 'utf8');
	const chapter3 = fs.readFileSync('./lib/lanWangJiVsAlcohol/chapters/chapter3.md', 'utf8');
	const chapter4 = fs.readFileSync('./lib/lanWangJiVsAlcohol/chapters/chapter4.md', 'utf8');
	const chapter5 = fs.readFileSync('./lib/lanWangJiVsAlcohol/chapters/chapter5.md', 'utf8');
	const chapter6 = fs.readFileSync('./lib/lanWangJiVsAlcohol/chapters/chapter6.md', 'utf8');
	const chapter7 = fs.readFileSync('./lib/lanWangJiVsAlcohol/chapters/chapter7.md', 'utf8');
	const chapter8 = fs.readFileSync('./lib/lanWangJiVsAlcohol/chapters/chapter8.md', 'utf8');
	const chapter9 = fs.readFileSync('./lib/lanWangJiVsAlcohol/chapters/chapter9.md', 'utf8');
	const chapter10 = fs.readFileSync('./lib/lanWangJiVsAlcohol/chapters/chapter10.md', 'utf8');

	const dataSet = {
		'1': {
			header: 'Lán WàngJī versus Alcohol: Chapter One',
			leftImg: '/photos/lanWangjiVsAlcohol/bath_left.png',
			content: md.render(chapter1),
			rightImg: '/photos/lanWangjiVsAlcohol/bath_right.png',
			leftBtn: '1',
			rightBtn: '2'
		},
		'2': {
			header: 'Lán WàngJī versus Alcohol: Chapter Two',
			leftImg: '/photos/lanWangjiVsAlcohol/bath_left.png',
			content: md.render(chapter2),
			rightImg: '/photos/lanWangjiVsAlcohol/bath_right.png',
			leftBtn: '1',
			rightBtn: '3'
		},
		'3': {
			header: 'Lán WàngJī versus Alcohol: Chapter Three',
			leftImg: '/photos/lanWangjiVsAlcohol/bath_left.png',
			content: md.render(chapter3),
			rightImg: '/photos/lanWangjiVsAlcohol/bath_right.png',
			leftBtn: '2',
			rightBtn: '4'
		},
		'4': {
			header: 'Lán WàngJī versus Alcohol: Chapter Four',
			leftImg: '/photos/lanWangjiVsAlcohol/bath_left.png',
			content: md.render(chapter4),
			rightImg: '/photos/lanWangjiVsAlcohol/bath_right.png',
			leftBtn: '3',
			rightBtn: '5'
		},
		'5': {
			header: 'Lán WàngJī versus Alcohol: Chapter Five',
			leftImg: '/photos/lanWangjiVsAlcohol/bath_left.png',
			content: md.render(chapter5),
			rightImg: '/photos/lanWangjiVsAlcohol/bath_right.png',
			leftBtn: '4',
			rightBtn: '6'
		},
		'6': {
			header: 'Lán WàngJī versus Alcohol: Chapter Six',
			leftImg: '/photos/lanWangjiVsAlcohol/bath_left.png',
			content: md.render(chapter6),
			rightImg: '/photos/lanWangjiVsAlcohol/bath_right.png',
			leftBtn: '5',
			rightBtn: '7'
		},
		'7': {
			header: 'Lán WàngJī versus Alcohol: Chapter Seven',
			leftImg: '/photos/lanWangjiVsAlcohol/bath_left.png',
			content: md.render(chapter7),
			rightImg: '/photos/lanWangjiVsAlcohol/bath_right.png',
			leftBtn: '6',
			rightBtn: '8'
		},
		'8': {
			header: 'Lán WàngJī versus Alcohol: Chapter Eight',
			leftImg: '/photos/lanWangjiVsAlcohol/bath_left.png',
			content: md.render(chapter8),
			rightImg: '/photos/lanWangjiVsAlcohol/bath_right.png',
			leftBtn: '7',
			rightBtn: '9'
		},
		'9': {
			header: 'Lán WàngJī versus Alcohol: Chapter Nine',
			leftImg: '/photos/lanWangjiVsAlcohol/bath_left.png',
			content: md.render(chapter9),
			rightImg: '/photos/lanWangjiVsAlcohol/bath_right.png',
			leftBtn: '8',
			rightBtn: '10'
		},
		'10': {
			header: 'Lán WàngJī versus Alcohol: Chapter Ten',
			leftImg: '/photos/lanWangjiVsAlcohol/bath_left.png',
			content: md.render(chapter10),
			rightImg: '/photos/lanWangjiVsAlcohol/bath_right.png',
			leftBtn: '9',
			rightBtn: '10'
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
	]
}