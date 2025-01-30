import { ChapOne } from './allChapters'
import { serialize } from 'react-serialize'

export async function getAllChapters(chapId) {
	const dataSet = {
		'1': {
			header: 'Lán WàngJī versus Alcohol: Chapter One',
			leftImg: '',
			content: serialize(ChapOne),
			rightImg: '',
			leftBtn: '1',
			rightBtn: '1'
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
		}
	]
}