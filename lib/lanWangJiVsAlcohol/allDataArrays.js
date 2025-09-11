import { ChapOne, ChapTwo, ChapThree, ChapFour, ChapFive, ChapSix, ChapSeven, ChapEight } from './allChapters'
import { serialize } from 'react-serialize'

export async function getAllChapters(chapId) {
	const dataSet = {
		'1': {
			header: 'Lán WàngJī versus Alcohol: Chapter One',
			leftImg: '/photos/lanWangjiVsAlcohol/bath_left.png',
			content: serialize(ChapOne),
			rightImg: '/photos/lanWangjiVsAlcohol/bath_right.png',
			leftBtn: '1',
			rightBtn: '2'
		},
		'2': {
			header: 'Lán WàngJī versus Alcohol: Chapter Two',
			leftImg: '/photos/lanWangjiVsAlcohol/bath_left.png',
			content: serialize(ChapTwo),
			rightImg: '/photos/lanWangjiVsAlcohol/bath_right.png',
			leftBtn: '1',
			rightBtn: '3'
		},
		'3': {
			header: 'Lán WàngJī versus Alcohol: Chapter Three',
			leftImg: '/photos/lanWangjiVsAlcohol/bath_left.png',
			content: serialize(ChapThree),
			rightImg: '/photos/lanWangjiVsAlcohol/bath_right.png',
			leftBtn: '2',
			rightBtn: '4'
		},
		'4': {
			header: 'Lán WàngJī versus Alcohol: Chapter Four',
			leftImg: '/photos/lanWangjiVsAlcohol/bath_left.png',
			content: serialize(ChapFour),
			rightImg: '/photos/lanWangjiVsAlcohol/bath_right.png',
			leftBtn: '3',
			rightBtn: '5'
		},
		'5': {
			header: 'Lán WàngJī versus Alcohol: Chapter Five',
			leftImg: '/photos/lanWangjiVsAlcohol/bath_left.png',
			content: serialize(ChapFive),
			rightImg: '/photos/lanWangjiVsAlcohol/bath_right.png',
			leftBtn: '4',
			rightBtn: '6'
		},
		'6': {
			header: 'Lán WàngJī versus Alcohol: Chapter Six',
			leftImg: '/photos/lanWangjiVsAlcohol/bath_left.png',
			content: serialize(ChapSix),
			rightImg: '/photos/lanWangjiVsAlcohol/bath_right.png',
			leftBtn: '5',
			rightBtn: '7'
		},
		'7': {
			header: 'Lán WàngJī versus Alcohol: Chapter Seven',
			leftImg: '/photos/lanWangjiVsAlcohol/bath_left.png',
			content: serialize(ChapSeven),
			rightImg: '/photos/lanWangjiVsAlcohol/bath_right.png',
			leftBtn: '6',
			rightBtn: '8'
		},
		'8': {
			header: 'Lán WàngJī versus Alcohol: Chapter Eight',
			leftImg: '/photos/lanWangjiVsAlcohol/bath_left.png',
			content: serialize(ChapEight),
			rightImg: '/photos/lanWangjiVsAlcohol/bath_right.png',
			leftBtn: '7',
			rightBtn: '8'
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
	]
}