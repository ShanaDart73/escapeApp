import { useState } from 'react'
import MyAudio from '../../sounds/my-audio'

const Sound = () => {
    const [audio, setAudio] = useState(false)

    const soundChapList = [
        { name: <MyAudio sound="/audio/bichen.mp3" name="Bìchén" />, id: 1 },
        { name: <MyAudio sound="/audio/chenqing.mp3" name="Chénqíng" />, id: 2 },
        { name: <MyAudio sound="/audio/chifengzun.mp3" name="Chìfēng-zūn" />, id: 3 },
        { name: <MyAudio sound="/audio/ergege.mp3" name="èr gēgē, 二哥哥" />, id: 4 },
        { name: <MyAudio sound="/audio/fangmengchen.mp3" name="Fāng MèngChén" />, id: 5 },
        { name: <MyAudio sound="/audio/guanyin.mp3" name="Guānyīn" />, id: 6 },
        { name: <MyAudio sound="/audio/gusulan.mp3" name="GūsūLán" />, id: 7 },
        { name: <MyAudio sound="/audio/hanguangjun.mp3" name="HánGuāng-Jūn" />, id: 8 },
        { name: <MyAudio sound="/audio/jiangcheng.mp3" name="Jiāng Chéng" />, id: 9 },
        { name: <MyAudio sound="/audio/jiangyuan.mp3" name="Jiāng Yuán" />, id: 10 },
        { name: <MyAudio sound="/audio/jingshi.mp3" name="Jingshi" />, id: 11 },
        { name: <MyAudio sound="/audio/jinguangyao.mp3" name="Jīn GuāngYáo" />, id: 12 },
        { name: <MyAudio sound="/audio/jingyi.mp3" name="JǐngYí" />, id: 13 },
        { name: <MyAudio sound="/audio/jinling.mp3" name="Jīn Líng" />, id: 14 },
        { name: <MyAudio sound="/audio/jinzixuan.mp3" name="Jīn ZiXuān" />, id: 15 },
        { name: <MyAudio sound="/audio/lanjingyi.mp3" name="Lán JǐngYí" />, id: 16 },
        { name: <MyAudio sound="/audio/lanlingjin.mp3" name="LánlíngJīn" />, id: 17 },
        { name: <MyAudio sound="/audio/lanqi.mp3" name="Lán Qí" />, id: 18 },
        { name: <MyAudio sound="/audio/lansizhui.mp3" name="Lán SīZhuī" />, id: 19 },
        { name: <MyAudio sound="/audio/lanwangji.mp3" name="Lán WàngJī" />, id: 20 },
        { name: <MyAudio sound="/audio/lanxichen.mp3" name="Lán XīChén" />, id: 21 },
        { name: <MyAudio sound="/audio/lanzhan.mp3" name="Lán Zhàn" />, id: 22 },
        { name: <MyAudio sound="/audio/meishanyu.mp3" name="MéishānYú" />, id: 23 },
        { name: <MyAudio sound="/audio/mianmian.mp3" name="Mian-Mian" />, id: 24 },
        { name: <MyAudio sound="/audio/moxuanyu.mp3" name="Mò XuánYǔ" />, id: 25 },
        { name: <MyAudio sound="/audio/niehuaisang.mp3" name="Niè HuáiSāng" />, id: 26 },
        { name: <MyAudio sound="/audio/qinghenie.mp3" name="QīnghéNiè" />, id: 27 },
        { name: <MyAudio sound="/audio/sizhui.mp3" name="SīZhuī" />, id: 28 },
        { name: <MyAudio sound="/audio/suibian.mp3" name="Suíbiàn" />, id: 29 },
        { name: <MyAudio sound="/audio/suihua.mp3" name="Suìhuá" />, id: 30 },
        { name: <MyAudio sound="/audio/wangxian.mp3" name="WàngXiàn" />, id: 31 },
        { name: <MyAudio sound="/audio/weiqianbei.mp3" name="Wèi qiánbèi" />, id: 32 },
        { name: <MyAudio sound="/audio/weishan.mp3" name="Wěishàn" />, id: 33 },
        { name: <MyAudio sound="/audio/weiwuxian.mp3" name="Wèi WúXiàn" />, id: 34 },
        { name: <MyAudio sound="/audio/weixiong.mp3" name="Wèi-xiōng" />, id: 35 },
        { name: <MyAudio sound="/audio/weiying.mp3" name="Wèi Yīng" />, id: 36 },
        { name: <MyAudio sound="/audio/xiongzhang.mp3" name="Xiōng-zhǎng" />, id: 37 },
        { name: <MyAudio sound="/audio/yilinglaozu.mp3" name="Yílíng Lǎozǔ" />, id: 38 },
        { name: <MyAudio sound="/audio/yuandao.mp3" name="YuanDao" />, id: 39 },
        { name: <MyAudio sound="/audio/yunmengjiang.mp3" name="YúnmèngJiāng" />, id: 40 },
        { name: <MyAudio sound="/audio/yunshenbuzhichu.mp3" name="Yúnshēn Bùzhīchù" />, id: 41 },
        { name: <MyAudio sound="/audio/yuxiaoshan.mp3" name="Yú XiǎoShān" />, id: 42},
        { name: <MyAudio sound="/audio/zewujun.mp3" name="Zéwú-Jūn" />, id: 43 },
        { name: <MyAudio sound="/audio/zhang.mp3" name="Zhāng" />, id: 44 }
    ]

    return (
        <div className="relative">
            {!audio ?
                (
                    <div className="sm:w-10 md:w-16 lg:w-18 cursor-pointer" onClick={() => setAudio(!audio)}>
                        <img  src="/logos/audio.svg" height="auto" width="100%" alt="" />
                    </div>
                ) : (
                    <button className="fixed top-2 right-4 w-5 md:w-7 fill-current z-10" onClick={() => setAudio(!audio)}>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><path d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z"/></svg>
                    </button>
                )
            }
            <div className={`fixed top-0 right-0 h-4/5 w-72 bg-blueBG ${audio ? 'translate-x-0': 'translate-x-full'} ease-in-out duration-1000`}>
                <div className="flex flex-col pt-8 px-10 md:px-4 overflow-y-scroll h-full">
                    {soundChapList.map(({ name, id }) => (
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