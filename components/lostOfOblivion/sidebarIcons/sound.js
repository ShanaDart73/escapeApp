import { useState } from 'react'
import MyAudio from '../../sounds/my-audio'
import { Sidebar, CloseSidebar, SoundContainer, SoundList, AudioIcon } from './sound.style'

const Sound = () => {
    const [audio, setAudio] = useState(false)
    const handleClick = () => {
        setAudio(!audio)
    }
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
        { name: <MyAudio sound="audio/yuandao.mp3" name="YuanDao" />, id: 39 },
        { name: <MyAudio sound="/audio/yunmengjiang.mp3" name="YúnmèngJiāng" />, id: 40 },
        { name: <MyAudio sound="/audio/yunshenbuzhichu.mp3" name="Yúnshēn Bùzhīchù" />, id: 41 },
        { name: <MyAudio sound="/audio/yuxiaoshan.mp3" name="Yú XiǎoShān" />, id: 42},
        { name: <MyAudio sound="/audio/zewujun.mp3" name="Zéwú-Jūn" />, id: 43 },
        { name: <MyAudio sound="/audio/zhang.mp3" name="Zhāng" />, id: 44 }
    ]

    return (
        <>
            <Sidebar audio={audio}>
                <CloseSidebar onClick={handleClick}><span>&times;</span></CloseSidebar>
                <SoundContainer>
                    {soundChapList.map(({ name, id }) => (
                        <SoundList key={id}>
                            {name}
                        </SoundList>
                    ))}
                </SoundContainer>
            </Sidebar>
            <AudioIcon audio={audio} onClick={handleClick}>
                <img  src="/logos/audio.svg" height="auto" width="100%" alt="" />
            </AudioIcon>
        </>
    )
}

export default Sound