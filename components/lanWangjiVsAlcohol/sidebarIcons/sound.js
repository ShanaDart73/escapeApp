import { useState } from 'react'
import MyAudio from '../../sounds/my-audio'

const Sound = () => {
	const [audio, setAudio] = useState(false)

	const soundList = [
		{ name: <MyAudio sound="/audio/ayuan.mp3" name="A-Yuàn" />, id: 1 },
		{ name: <MyAudio sound="/audio/chenqing.mp3" name="Chénqíng" />, id: 2 },
		{ name: <MyAudio sound="/audio/dage.mp3" name="Dà-gē" />, id: 3 },
		{ name: <MyAudio sound="/audio/daxiaojie.mp3" name="Dà-XiǎoJiě" />, id: 4 },
		{ name: <MyAudio sound="/audio/ergege.mp3" name="Èr-gēge" />, id: 5 },
		{ name: <MyAudio sound="/audio/gusulan.mp3" name="GūsūLán" />, id: 6 },
		{ name: <MyAudio sound="/audio/hanguangjun.mp3" name="HánGuāng-Jūn" />, id: 7 },
		{ name: <MyAudio sound="/audio/jiangcheng.mp3" name="Jiāng Chéng" />, id: 8 },
		{ name: <MyAudio sound="/audio/jiangwanyin.mp3" name="Jiāng WǎnYín" />, id: 9 },
		{ name: <MyAudio sound="/audio/jiangyanli.mp3" name="Jiāng YànLí" />, id: 10 },
		{ name: <MyAudio sound="/audio/jinchan.mp3" name="Jīn Chǎn" />, id: 11 },
		{ name: <MyAudio sound="/audio/jingshi.mp3" name="Jingshi" />, id: 12 },
		{ name: <MyAudio sound="/audio/jingyi.mp3" name="JǐngYí" />, id: 13 },
		{ name: <MyAudio sound="/audio/jinling.mp3" name="Jīn Líng" />, id: 14 },
		{ name: <MyAudio sound="/audio/jinlintai.mp3" name="Jīnlíntái" />, id: 15 },
		{ name: <MyAudio sound="/audio/jinzixuan.mp3" name="Jīn ZiXuān" />, id: 16 },
		{ name: <MyAudio sound="/audio/lanergongzi.mp3" name="Lán Èr-gōngzǐ" />, id: 17 },
		{ name: <MyAudio sound="/audio/lanjingyi.mp3" name="Lán JǐngYí" />, id: 18 },
		{ name: <MyAudio sound="/audio/lanling.mp3" name="Lánlíng" />, id: 19 },
		{ name: <MyAudio sound="/audio/lanqiren.mp3" name="Lán Qǐrén" />, id: 20 },
		{ name: <MyAudio sound="/audio/lansizhui.mp3" name="Lán SīZhuī" />, id: 21 },
		{ name: <MyAudio sound="/audio/lanwangji.mp3" name="Lán WàngJī" />, id: 22 },
		{ name: <MyAudio sound="/audio/lanxichen.mp3" name="Lán XīChén" />, id: 23 },
		{ name: <MyAudio sound="/audio/lanyan.mp3" name="Lán Yǎn" />, id: 24 },
		{ name: <MyAudio sound="/audio/lanzhan.mp3" name="Lán Zhàn" />, id: 25 },
		{ name: <MyAudio sound="/audio/liebing.mp3" name="Lièbīng" />, id: 26 },
		{ name: <MyAudio sound="/audio/qiankundai.mp3" name="qiánkūn-dài" />, id: 27 },
		{ name: <MyAudio sound="/audio/qinghengjun.mp3" name="Qīnghéng-Jūn" />, id: 28 },
		{ name: <MyAudio sound="/audio/qingxinling.mp3" name="Qīngxīn-líng" />, id: 29 },
		{ name: <MyAudio sound="/audio/sanduyu.mp3" name="Sāndúyù" />, id: 30 },
		{ name: <MyAudio sound="/audio/shidi.mp3" name="Shī-dì" />, id: 31 },
		{ name: <MyAudio sound="/audio/shifu.mp3" name="shīfu" />, id: 32 },
		{ name: <MyAudio sound="/audio/shijie.mp3" name="Shījiě" />, id: 33 },
		{ name: <MyAudio sound="/audio/shixiong.mp3" name="Shī-xiōng" />, id: 34 },
		{ name: <MyAudio sound="/audio/shuoyue.mp3" name="Shuòyuè" />, id: 35 },
		{ name: <MyAudio sound="/audio/sizhui.mp3" name="SīZhuī" />, id: 36 },
		{ name: <MyAudio sound="/audio/suihua.mp3" name="Suìhuá" />, id: 37 },
		{ name: <MyAudio sound="/audio/weigongzi.mp3" name="Wèi-gōngzǐ" />, id: 38 },
		{ name: <MyAudio sound="/audio/weiqianbei.mp3" name="Wèi-qiánbèi" />, id: 39 },
		{ name: <MyAudio sound="/audio/weiwuxian.mp3" name="Wèi WúXiàn" />, id: 40 },
		{ name: <MyAudio sound="/audio/weiying.mp3" name="Wèi Yīng" />, id: 41 },
		{ name: <MyAudio sound="/audio/wenning.mp3" name="Wēn Níng" />, id: 42 },
		{ name: <MyAudio sound="/audio/wenqing.mp3" name="Wēn Qíng" />, id: 43 },
		{ name: <MyAudio sound="/audio/xiaoguban.mp3" name="Xiǎo-gǔbǎn" />, id: 44 },
		{ name: <MyAudio sound="/audio/xiongzhang.mp3" name="Xiōng-zhǎng" />, id: 45 },
		{ name: <MyAudio sound="/audio/yunmengjiang.mp3" name="YúnmèngJiāng" />, id: 46 },
		{ name: <MyAudio sound="/audio/yunshenbuzhichu.mp3" name="Yúnshēn Bùzhīchù" />, id: 47 },
		{ name: <MyAudio sound="/audio/zewujun.mp3" name="Zéwú-Jūn" />, id: 48 },
		{ name: <MyAudio sound="/audio/zidian.mp3" name="Zǐdiàn" />, id: 49 },
		{ name: <MyAudio sound="/audio/zongzhu.mp3" name="Zōng-zhǔ" />, id: 50 },
	]

	return (
		<div className="relative">
			{!audio ?
				(
					<div className="sm:w-10 md:w-16 lg:w-18 cursor-pointer" onClick={() => setAudio(!audio)}>
						<img src="/logos/audio.svg" height="auto" width="100%" alt=""/>
					</div>
				) : (
					<button className="fixed top-2 right-4 w-5 md:w-7 fill-current z-20" onClick={() => setAudio(!audio)}>
						<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512">
							<path d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z"/></svg>
					</button>
				)
			}
			<div
				className={`fixed top-0 right-0 h-4/5 w-72 bg-blueBG z-10 ${audio ? 'translate-x-0' : 'translate-x-full'} ease-in-out duration-1000`}>
				<div className="flex flex-col pt-8 pb-4 px-10 md:px-4 overflow-y-scroll h-full">
					{soundList.map(({name, id}) => (
						<div className="block text-left mt-4 pl-10" key={id}>
							{name}
						</div>
					))}
				</div>
			</div>
		</div>
	)
}

export default Sound