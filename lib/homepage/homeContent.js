import Link from 'next/link'

const HomeContent = () => {
    return (
        <>
            <Link href="/lostOfOblivion/chapters/1">
                <div className="block w-canvas-width h-canvas-height p-4 bg-gray-950 brightness-75 shadow-homePic-shadow rounded-lg hover:-translate-y-1 hover:shadow-homePic-hover">
                    <div className="text-gray-500 flex flex-col items-center">
                        <img className="rounded-tr-canvas-radius rounded-bl-canvas-radius" src="/photos/homepage/lostOfOblivion.png" alt="WangXian" />
                        <h2 className="italic font-canvas-font-title text-2xl text-center">Lost Of Oblivion</h2>
                    </div>
                    <div className="text-gray-500 font-canvas-font-title md:text-canvas-md-size">
                        <p><span className="font-semibold">Genre</span>: Historical, Supernatural, Mature</p>
                        <p><span className="font-semibold">Status</span>: Completed</p>
                        <p><span className="font-semibold">Plot</span>: Wei WuXian has formed a new golden core, however, some incident happens, causing him to lose not only his golden core, but also his happy memories spent with Lan WangJi.</p>
                    </div>
                </div>
            </Link>
            <Link href="/lanWangjiVsAlcohol/chapters/1" >
                <div className="block w-canvas-width h-canvas-height p-4 bg-gray-950 brightness-75 shadow-homePic-shadow rounded-lg hover:-translate-y-1 hover:shadow-homePic-hover">
                    <div className="text-gray-500 flex flex-col items-center">
                        <img className="rounded-tr-canvas-radius rounded-bl-canvas-radius" src="/photos/homepage/lanwangjiVsAlcohol.jpg" alt="WangXian" />
                        <h2 className="italic font-canvas-font-title text-2xl text-center">Lan WangJi versus Alcohol</h2>
                    </div>
                    <div className="text-gray-500 font-canvas-font-title md:text-canvas-md-size">
                        <p><span className="font-semibold">Genre</span>: Historical, Supernatural, Mild</p>
                        <p><span className="font-semibold">Status</span>: Ongoing</p>
                        <p><span className="font-semibold">Plot</span>: Our beloved couple, as usual, went Night Hunting. This time, however, something happened; Lan WangJi suddenly passed out. Later on, when he woke up, he was drunk.</p>
                    </div>
                </div>
            </Link>
            <div
                className="block w-canvas-width h-canvas-height p-4 bg-gray-950 brightness-75 shadow-homePic-shadow rounded-lg hover:-translate-y-1 hover:shadow-homePic-hover">
                <div className="text-gray-500 flex flex-col items-center">
                    <img className="rounded-tr-canvas-radius rounded-bl-canvas-radius" src="/photos/homepage/dreaming.jpg" alt="WangXian" />
                    <h2 className="italic font-canvas-font-title text-2xl text-center">Dreaming While Awake</h2>
                    <h2 className="italic font-canvas-font-title text-2xl">Coming soon</h2>
                </div>
            </div>
            <div className="block w-canvas-width h-canvas-height p-4 bg-gray-950 brightness-75 shadow-homePic-shadow rounded-lg hover:-translate-y-1 hover:shadow-homePic-hover">
                <div className="text-gray-500 flex flex-col items-center">
                    <h2 className="italic font-canvas-font-title text-2xl">Coming soon</h2>
                </div>
            </div>
            <div className="block w-canvas-width h-canvas-height p-4 bg-gray-950 brightness-75 shadow-homePic-shadow rounded-lg hover:-translate-y-1 hover:shadow-homePic-hover">
                <div className="text-gray-500 flex flex-col items-center">
                    <h2 className="italic font-canvas-font-title text-2xl">Coming soon</h2>
                </div>
            </div>
            <div className="block w-canvas-width h-canvas-height p-4 bg-gray-950 brightness-75 shadow-homePic-shadow rounded-lg hover:-translate-y-1 hover:shadow-homePic-hover">
                <div className="text-gray-500 flex flex-col items-center">
                    <h2 className="italic font-canvas-font-title text-2xl">Coming soon</h2>
                </div>
            </div>
        </>
    )
}

export default HomeContent