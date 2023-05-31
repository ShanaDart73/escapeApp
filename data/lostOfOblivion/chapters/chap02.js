import Link from 'next/link'
import Icons from '../sidebarIcons/icons'
import MyAudio from '../../../components/sounds/my-audio'
import { Wrapper, Container, Header, LeftPicture, Content, RightPicture, Sidebar, Footer, NextBtn, PrevBtn } from '../../../components/lostOfOblivion/chapters/chapter.style'

const pageHeading = "Lost of Oblivion: Chapter Two"

const Chap02 = () => {
    return (
        <Wrapper>
            <Container onContextMenu={(e) => e.preventDefault()}>
                <Header>{pageHeading}</Header>
                <LeftPicture>
                    <img src="/photos/lostOfOblivion/chapter02/leftPicture.png" alt="" />
                </LeftPicture>
                <Content>
                    <p>“<MyAudio sound="/audio/lanzhan.mp3" name="Lán Zhàn" />, this is not a normal rain.” said <MyAudio sound="/audio/weiwuxian.mp3" name="Wèi WúXiàn" />.</p>
                    <p>“Uh-huh.” agreed <MyAudio sound="/audio/lanwangji.mp3" name="Lán WàngJī" />. He then looked far into the distance, observing the endless dark clouds that covered the whole city, the torrential rain that poured like hell, and the strong wind that roared like a tiger.</p>
                    <p>Soon after, a firework signal in the shape of nine petals of the lotus flower flickered in the air. This firework signal belonged to <MyAudio sound="/audio/yunmengjiang.mp3" name="YúnmèngJiāng" /> sect.</p>
                    <p>Wèi WúXiàn said, “Someone from YúnmèngJiāng clan will come this way. Let’s wait here for whoever will arrive, so, together, we can discuss what to do next.”</p>
                    <p>The area in which they were presently was the region of Yúnmèng, a territory that was under the jurisdiction of the YúnmèngJiāng sect. Therefore, they could not handle this rain issue without their permission.</p>
                    <p>After a while, a cultivator dressed in purple arrived on his sword, looking exhausted; a sign that indicated that something must have happened. His name was <MyAudio sound="/audio/jiangyuan.mp3" name="Jiāng Yuán" />, and was stationed at the local post tower.</p>
                    <p>Wèi WúXiàn was inwardly surprised that there was a post tower of Lotus Piers nearby.</p>
                    <p>Jiāng Yuán bowed to Lán WàngJī and Wèi WúXiàn, then said, “This rainstorm is so violent that it has caused flash floods in many places in the downstream areas of Han River.</p>
                    <p>“Furthermore, water ghouls have taken advantage of the flooding to attack people.</p>
                    <p>“The leader has already sent our people to every embankment’s location, so to protect them from bursting under pressure of water.</p>
                    <p>“Right now, however, there is a shortage of manpower, so the leader has dispatched a request for assistance to <MyAudio sound="/audio/lanlingjin.mp3" name="LánlíngJīn" />, <MyAudio sound="/audio/gusulan.mp3" name="GūsūLán" /> and <MyAudio sound="/audio/qinghenie.mp3" name="QīnghéNiè" /> clans.”</p>
                    <p>Wèi WúXiàn inwardly said, “<MyAudio sound="/audio/jiangcheng.mp3" name="Jiāng Chéng" />* has always been arrogant and aloof. For him to swallow his pride and ask for help to other clans surely shows that the situation must be extremely serious, that lives of common people are at stake.”</p>
                    <small>*Jiāng Chéng is the name of the leader of the YúnmèngJiāng sect.</small>
                    <p>Wèi WúXiàn asked, “Where is Leader Jiāng as we speak?”</p>
                    <p>Jiāng Yuán replied, “The leader is in charge of protecting the Shiyan embankment.”</p>
                    <p>The embankment of Shiyan was built where the width of Han River was the most narrow, and also it was mostly likely to be damaged by the floods. Since Jiāng Chéng was personally supervising the operation there, this was another sign that the situation of the lower reaches of Han River must be critical.</p>
                    <p>During all this time, eyes filled with tears, <MyAudio sound="/audio/yuxiaoshan.mp3" name="Yú XiǎoShān" /> was inwardly blaming himself, unable to utter a single word.</p>
                    <p>Wèi WúXiàn, who was briefly informed of what happened in the pond, patted him on the shoulder, and said, “In the recent years, there has been many floods occurring in Yúnmèng. Now, it’s clear that they were caused by that young dragon.</p>
                    <p>“It has also altered the spiritual energy of the earth and water, causing the monsters and evil spirits to appear more frequently.</p>
                    <p>“But now that the young dragon has gone, this heavy rain won’t last more than three days, and all these issues will be resolved at once. There might be a favourable weather for a decade to come.”</p>
                    <p>Yú XiǎoShān was still young after all, and could no longer hold back his tears. He started to cry. Then, he felt embarrassed, and wiped away his tears. While choking back the tears, he called  “<MyAudio sound="/audio/weiqianbei.mp3" name="Wèi qiánbèi" />...”</p>
                    <p>Wèi WúXiàn smiled, then adjusted the collar of Yú XiǎoShān’s school uniform, and said, “It’s all right. Who has ever done a few reckless things when they were young. I was much more of a fool than you back then. Cheer up!”</p>
                    <p>The other teenagers from YúnmèngJiāng sect gathered around Wèi WúXiàn, then, in a low voice and in a discordant manner, they called, “Wèi qiánbèi.”</p>
                    <p>One by one, Wèi WúXiàn fondled the top of their heads. Then, he addressed to everyone, “Right now, we cannot any longer return to Lotus Piers by boat.</p>
                    <p>“Since this place is where the young dragon cultivated itself, <MyAudio sound="/audio/sizhui.mp3" name="SīZhuī" /> and <MyAudio sound="/audio/jingyi.mp3" name="JǐngYí" />, both of you will stay here along with the rest of GūsūLán disciples, in case something else happens.</p>
                    <p>“As for the disciples of YúnmèngJiāng sect, who are more familiar with this area, come along with us. <MyAudio sound="/audio/hanguangjun.mp3" name="HánGuāng-Jūn" />* and I are going to Shiyan embankment to join Leader Jiāng. On our way there, we will fly over Han River in order to inspect the level of the river.”</p>
                    <small>*HánGuāng-Jūn is the honorific title of Lán WàngJī.</small>
                    <p>“Yes, sir!” agreed everyone.</p>
                    <br />
                    <p>... ... ...</p>
                    <br />
                    <p>Lán WàngJī had taken Wèi WúXiàn to ride on his sword.</p>
                    <p>Wrapping his arms around Lán WàngJī’s waist, and while fiddling with Lán WàngJī’s waist pendant, Wèi WúXiàn said, “Second Brother*, you will be tired. Let me ride on my own sword.”</p>
                    <small>*Second Brother (<MyAudio sound="/audio/ergege.mp3" name="二哥哥" />, èr gēgē) is referred to the second child of a family.</small>
                    <p>Lán WàngJī said, “You just formed your golden core. So, for the time being, you should not use your spiritual power.”</p>
                    <p>He then held Wèi WúXiàn’s hand, and added, “When we arrive at Shiyan embankment, you’ll need to meditate in order to stabilise your golden core.”</p>
                    <p>Flying through the strong storm that caused them to move much slower than usual, they all had wrapped their whole bodies with a waterproof spell.</p>
                    <p>Beneath, the river was raging; they could observe a sharp increase in the level of water, and also, in many places, the river had already overflown the embankments.</p>
                    <p>Suddenly, Lán WàngJī stopped <MyAudio sound="/audio/bichen.mp3" name="Bìchén" />*. Pointing towards a location, he asked, “What is that?”</p>
                    <small>*Bìchén is the name of Lán WàngJī’s sword.</small>
                    <p>Everyone looked in the direction he had pointed his finger, and saw a huge hole on the ground that was surrounded by a woodland with an abundant vegetation.</p>
                    <p>Jiāng Yuán replied, “That is Ganlin Reservoir. It was built under the reign of the previous dynasty. It is now abandoned.</p>
                    <p>“In the last years of the previous dynasty, the downstream areas of Han River were occupied by the army of the current dynasty.</p>
                    <p>“In order to crush the enemy, the emperor of the previous dynasty personally order to construct a dam, so that when the flood happened, the overflow of water would be stored in that reservoir, and, later on, to be released in order to inundate the downstream areas.</p>
                    <p>“In the year the dam was built, there was a high flood peak. However, when the flood occurred, water failed to go towards Ganlin Reservoir. Instead, it diverted to Ankang River.</p>
                    <p>“Ankang City is nearby, and the width of its river is unfortunately much narrow, and, as a result, the Ankang embankment burst under pressure, and the city was flooded.</p>
                    <p>“The flood had caused a lot of casualties in the downstream areas of Ankang River, which in turn had caused common people to harbour a grievance against their own emperor.</p>
                    <p>“Few years after that incident, the previous dynasty was exterminated by the current dynasty.”</p>
                    <p>Wèi WúXiàn asked, “Is it be possible to divert the overflow of water to that reservoir, if we blow up the dam?”</p>
                    <p>Jiāng Yuán replied, “Yes, it is possible. However, at the end of the previous dynasty, people started to live near the reservoir.</p>
                    <p>“As you can see, this area is fertile, and the crop yields are high. So, more and more people have come here to settle. And, up to the present time, that area turns into a village of about a hundred households.</p>
                    <p>“If the dam is blown up, the village will be submerged.</p>
                    <p>“In fact, people are not supposed to live in that location. Although the imperial officials came multiple times to persuade them to move out, the villagers are reluctant to leave the land they are attached to.</p>
                    <p>“The leader also came to persuade them, but they still haven’t changed their mind.</p>
                    <p>“In recent years, there have been some minor floods occurring in their village, but nothing serious has ever happened. So, year after year, their relocation process has been put off.”</p>
                    <p>Wèi WúXiàn said, “The young dragon that had concealed itself inside the pond has caused changes in the weather conditions. That’s why we have this unusual heavy rain.</p>
                    <p>“So, this time, the disaster will happen and very soon. Those villagers must leave the village without delay.</p>
                    <p>“If you have the decree of your sect with you, go and ask the imperial officials to come to the village. We’ll wait for you there.”</p>
                    <p>Then, he talked to Lán WàngJī, “Lán Zhàn, let’s go to the village.”</p>
                    <p>“Okay.” agreed Lán WàngJī, then he set Bìchén in motion and flew towards the village, along with the rest of YúnmèngJiāng disciples.</p>
                    <br />
                    <p>... ... ...</p>
                    <br />
                    <p><MyAudio sound="/audio/weishan.mp3" name="Wěishàn" /> was the name of the village, and the negotiation began as soon as the imperial officials arrived.</p>
                    <p>“HánGuāng-Jūn, even though you are highly regarded in the elite society, you should not trouble yourself with our mundane matters.</p>
                    <p>“We have been living in this village for four or five generations. Are you really expecting us to move out just because you told us to do so?” said the village chief arrogantly, banging his walking stick on the floor as he uttered his last words.</p>
                    <p>“No way!” objected the rest of the villagers.</p>
                    <p>“We can’t just leave, and abandon our homes.” voiced a villager.</p>
                    <p>The drill instructor in charge of the relocation process stepped in, “Every year, in spring, the prefect issues a relocation order for you to move out.</p>
                    <p>“This year, because the warlock predicted changes in meteorological phenomena, the prefect has issued three consecutive emergency orders. And yet, you still refuse to be relocated.</p>
                    <p>“You are living in a land which is lower than the level of the river. Are you not afraid?</p>
                    <p>“I know that you have already packed your belongings, but you refuse to cooperate, unless someone gets tough on you. Am I right?”</p>
                    <p>After a short pause, the drill instructor resumed, “The compensation has already been assessed. Right now, you are taking the advantage of this emergency to increase the amount of the compensation.”</p>
                    <p>Persuading those people to move out from their village had always been a hassle. Upon seeing the decree of the YúnmèngJiāng sect, the authorities had mobilised nearly a hundred officials to assist in relocating the villagers.</p>
                    <p>Lán WàngJī reiterated, “As I have already said, I promise you that GūsūLán will pay for your looses, if the authorities fail to compensate you in time.”</p>
                    <p>The village chief reacted, “I don’t believe in your promise, because you people from the privileged sects are the most deceitful mankind. When the time comes, neither your sect nor the authorities will easily accept to compensate us.”</p>
                    <p>Another villager put forward, “We have never experienced any disaster despite the heavy rains that pour down every year. So, we won’t leave!”</p>
                    <p>Then, one after another, the villagers started to raise their voice, behaving as though the imminent threat was none of their concern.</p>
                    <p>Time was running out, and, standing behind Lán WàngJī, Wèi WúXiàn could not take it any longer. He approached the drill instructor, and, in deep voice, he asked, “Mr <MyAudio sound="/audio/zhang.mp3" name="Zhāng" />, is it true that the compensation has already been assessed?”</p>
                    <p>The drill instructor replied, “Yes, it’s true. The village chief saw it, and sighed it. However, the nine members of the village committee have not signed it yet.”</p>
                    <p>He then took out a stack of copies from his sleeve, and handed it over to Lán WàngJī. He added, “As a matter of fact, the villagers are ready to be relocated. They are just waiting for the compensation to be paid.”</p>
                    <p>For a while, the drill instructor cast a look at the villagers, then he said, “Earlier, when I inspected the village, I noticed that you have already packed your belongings.”</p>
                    <p>The villagers appeared to be indifferent to what the drill instructor had just said, wearing a disdainful look on their faces.</p>
                    <p>Wèi WúXiàn said, “Very well.”</p>
                    <p>He then pulled off <MyAudio sound="/audio/chenqing.mp3" name="Chénqíng" />* from his waist belt, and carelessly began to tap on the palm of his another hand with his flute.</p>
                    <small>*Chénqíng is the name of Wèi WúXiàn’s flute.</small>
                    <p>A rictus appeared on the corner of his mouth, he asked, “By the way, have you ever heard of <MyAudio sound="/audio/yilinglaozu.mp3" name="Yílíng Lǎozǔ" />*?”</p>
                    <small>*Yílíng Lǎozǔ is the honorific title of Wèi WúXiàn.</small>
                    <p>The village chief suddenly turned pale, saying inwardly, “Rumour has it that Yílíng Lǎozǔ and HánGuāng-Jūn got married, and become an inseparable couple. Could it be that this handsome young man is Yílíng Lǎozǔ?”</p>
                    <p>These villagers had never seen Yílíng Lǎozǔ. However, they had heard about his prowess during the Shooting Sun campaign, his hostility on Qióngqí Path and his atrocities at Nightless Sky City. They all had shuddered with horror listening to the vicious methods of Yílíng Lǎozǔ.</p>
                    <p>Wèi WúXiàn slowly turned his flute so that everyone could see the scarlet tassel that was dangling from one end of Chénqíng; the scarlet tassel was one of  Yílíng Lǎozǔ’s signatures.</p>
                    <p>He then smiled, and said, “I am Yílíng Lǎozǔ, also known as Wèi WúXiàn.”</p>
                    <p>As soon as he finished presenting himself, Wèi WúXiàn brought Chénqíng to his lower lip, and, at leisure, he blew a few notes.</p>
                    <p>All of a sudden, they started to hear some terrifying roars coming from outside. It seemed like the assembly hall was surrounded by fierce corpses.</p>
                    <p>As one would expect, the villagers got really frightened that they were no longer able to make noises.</p>
                    <p>Still, it was hard to believe that the vicious Yílíng Lǎozǔ was this fair-skinned and elegant young man.</p>
                </Content>
                <RightPicture>
                    <img src="/photos/lostOfOblivion/chapter02/rightPicture.png" alt="" />
                </RightPicture>
                <Sidebar>
                    <Icons />
                </Sidebar>
                <Footer>
                    <Link href="/lostOfOblivion/chapter01">
                        <PrevBtn>&larr;Prev</PrevBtn>
                    </Link>
                    <Link href="/lostOfOblivion/chapter03">
                        <NextBtn>Next&rarr;</NextBtn>
                    </Link>
                </Footer>
            </Container>
        </Wrapper>
    )
}

export default Chap02