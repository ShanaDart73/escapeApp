import markdownIt from 'markdown-it';
const md = markdownIt({html: true, linkify: true, typographer: true, breaks: false});
import fs from 'fs';

export async function getAllChapters(chapId) {
	const chapter1 = fs.readFileSync('./lib/dreamWhileAwake/chapters/chapter1.md', 'utf8');

	const dataSet = {
		'1': {
			header: 'Dreaming While Awake: Chapter One',
			leftImg: '/photos/dreamWhileAwake/left_side.png',
			content: md.render(chapter1),
			rightImg: '/photos/dreamWhileAwake/right_side.png',
			leftBtn: '1',
			rightBtn: '1'
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
	]
}