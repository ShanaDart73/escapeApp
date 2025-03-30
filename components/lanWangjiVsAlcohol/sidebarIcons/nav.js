import { useState } from 'react'

const Nav = () => {
	const [isDisplayed, setIsDisplayed] = useState(false)

	const chapList = [
		{ name: "Chapter One", link: "/lanWangjiVsAlcohol/chapters/1", id: 1 },
		{ name: "Chpater Two", link: "/lanWangjiVsAlcohol/chapters/2", id: 2 },
		{ name: "Chapter Three", link: "/lanWangjiVsAlcohol/chapters/3", id: 3 },
		{ name: "Chapter Four", link: "/lanWangjiVsAlcohol/chapters/4", id: 4 },
	]

	return (
		<div className="relative">
			{!isDisplayed ?
				(
					<div className="sm:w-10 md:w-16 lg:w-18 cursor-pointer" onClick={() => setIsDisplayed(!isDisplayed)}>
						<img src="/logos/nav.svg" height="auto" width="100%" alt=""/>
					</div>
				) : (
					<button className="fixed top-2 right-4 w-5 md:w-7 fill-current z-20" onClick={() => setIsDisplayed(!isDisplayed)}>
						<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><path d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z"/></svg>
					</button>
				)
			}
			<div
				className={`h-full w-72 top-0 right-0 fixed bg-blueBG z-10 ${isDisplayed ? 'translate-x-0' : 'translate-x-full'} ease-in-out duration-1000`}>
				<div className="flex flex-col h-4/5 pt-12 px-10 overflow-y-scroll">
					{chapList.map(({name, link, id}) => (
						<div
							className="block text-left pl-12 mt-6 text-gray-500 text-xl md:text-2xl hover:cursor-pointer hover:text-blue-300" key={id}>
							<a href={link}>{name}</a>
						</div>
					))}
				</div>
			</div>
		</div>
	)
}

export default Nav