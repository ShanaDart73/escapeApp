import { useState } from 'react'
import Router from 'next/router'

const Nav = () => {
    let [display, setDisplay] = useState(false)
    const [isDisplayed, setIsDisplayed] = useState(false)
    const handleClick = () => {
        setDisplay(!display)
    }
    const chapList = [
        { name: "Chapter One", link: "/lostOfOblivion/chapters/1", id: 1 },
        { name: "Chapter Two", link: "/lostOfOblivion/chapters/2", id: 2 },
        { name: "Chapter Three", link: "/lostOfOblivion/chapters/3", id: 3 },
        { name: "Chapter Four", link: "/lostOfOblivion/chapters/4", id: 4 },
        { name: "Chapter Five", link: "/lostOfOblivion/chapters/5", id: 5 },
        { name: "Chapter Six", link: "/lostOfOblivion/chapters/6", id: 6 },
        { name: "Chapter Seven", link: "/lostOfOblivion/chapters/7", id: 7},
        { name: "Chapter Eight", link: "/lostOfOblivion/chapters/8", id: 8 },
        { name: "Chapter Nine", link: "/lostOfOblivion/chapters/9", id: 9 },
        { name: "Chapter Ten", link: "/lostOfOblivion/chapters/10", id: 10 },
        { name: "Chapter 11", link: "/lostOfOblivion/chapters/11", id: 11 },
        { name: "Chapter 12", link: "/lostOfOblivion/chapters/12", id: 12 },
        { name: "Chapter 13", link: "/lostOfOblivion/chapters/13", id: 13 },
        { name: "Chapter 14", link: "/lostOfOblivion/chapters/14", id: 14 },
        { name: "Chapter 15", link: "/lostOfOblivion/chapters/15", id: 15 },
        { name: "Chapter 16", link: "/lostOfOblivion/chapters/16", id: 16 },
        { name: "Chapter 17", link: "/lostOfOblivion/chapters/17", id: 17 },
        { name: "Chapter 18", link: "/lostOfOblivion/chapters/18", id: 18 },
        { name: "Chapter 19", link: "/lostOfOblivion/chapters/19", id: 19 },
        { name: "Chapter 20", link: "/lostOfOblivion/chapters/20", id: 20 },
        { name: "Chapter 21", link: "/lostOfOblivion/chapters/21", id: 21 },
        { name: "Chapter 22", link: "/lostOfOblivion/chapters/22", id: 22 },
        { name: "Chapter 23", link: "/lostOfOblivion/chapters/23", id: 23 },
        { name: "Chapter 24", link: "/lostOfOblivion/chapters/24", id: 24 },
        { name: "Chapter 25", link: "/lostOfOblivion/chapters/25", id: 25 },
        { name: "Chapter 26", link: "/lostOfOblivion/chapters/26", id: 26 },
        { name: "Chapter 27", link: "/lostOfOblivion/chapters/27", id: 27 },
        { name: "Chapter 28", link: "/lostOfOblivion/chapters/28", id: 28 },
        { name: "Chapter 29", link: "/lostOfOblivion/chapters/29", id: 29 },
    ]

    return (
        <>
            {!isDisplayed ?
                (
                    <div className="sm:w-10 md:w-16 lg:w-18 cursor-pointer" onClick={() => setIsDisplayed(!isDisplayed)}>
                        <img src="/logos/nav.svg" height="auto" width="100%" alt="" />
                    </div>
                ) : (
                    <button className="fixed top-2 right-4 w-5 md:w-7 fill-current z-10" onClick={() => setIsDisplayed(!isDisplayed)}>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><path d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z"/></svg>
                    </button>
                )
            }
            <div className={`h-full w-72 top-0 right-0 fixed bg-blueBG ${isDisplayed ? 'translate-x-0': 'translate-x-full'} ease-in-out duration-1000`}>
                <div className="flex flex-col h-4/5 pt-12 px-10 overflow-y-scroll">
                    {chapList.map(({ name, link, id }) => (
                        <div className="block text-left pl-12 mt-6 text-gray-500 text-xl md:text-2xl hover:cursor-pointer hover:text-blue-300" key={id} onClick={() => Router.push(link)}>
                            {name}
                        </div>
                    ))}
                </div>
            </div>
        </>
    )
}

export default Nav
