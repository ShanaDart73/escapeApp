import { ChapOne, ChapTwo } from './allChapters'
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
			rightBtn: '2'
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
	]
}