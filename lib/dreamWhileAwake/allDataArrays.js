import markdownIt from 'markdown-it';
const md = markdownIt({html: true, linkify: true, typographer: true, breaks: false});
import fs from 'fs';

export async function getAllChapters(chapId) {
	const chapter1 = fs.readFileSync('./lib/dreamWhileAwake/chapters/chapter1.md', 'utf8');
	const chapter2 = fs.readFileSync('./lib/dreamWhileAwake/chapters/chapter2.md', 'utf8');
	const chapter3 = fs.readFileSync('./lib/dreamWhileAwake/chapters/chapter3.md', 'utf8');
	const chapter4 = fs.readFileSync('./lib/dreamWhileAwake/chapters/chapter4.md', 'utf8');

	const dataSet = {
		'1': {
			header: 'Dreaming While Awake: Chapter One',
			leftImg: '/photos/dreamWhileAwake/left_side.png',
			content: md.render(chapter1),
			rightImg: '/photos/dreamWhileAwake/right_side.png',
			leftBtn: '1',
			rightBtn: '2'
		},
		'2': {
			header: 'Dreaming While Awake: Chapter Two',
			leftImg: '/photos/dreamWhileAwake/left_side.png',
			content: md.render(chapter2),
			rightImg: '/photos/dreamWhileAwake/right_side.png',
			leftBtn: '1',
			rightBtn: '3'
		},
		'3': {
			header: 'Dreaming While Awake: Chapter Three',
			leftImg: '/photos/dreamWhileAwake/left_side.png',
			content: md.render(chapter3),
			rightImg: '/photos/dreamWhileAwake/right_side.png',
			leftBtn: '2',
			rightBtn: '4'
		},
		'4': {
			header: 'Dreaming While Awake: Chapter Four',
			leftImg: '/photos/dreamWhileAwake/left_side.png',
			content: md.render(chapter4),
			rightImg: '/photos/dreamWhileAwake/right_side.png',
			leftBtn: '3',
			rightBtn: '4'
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
	]
}