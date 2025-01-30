import { useState } from 'react'
import MyAudio from '../../sounds/my-audio'

const Sound = () => {
	const [audio, setAudio] = useState(false)

	const soundList = [
		{ name: <MyAudio sound="/audio/gusulan.mp3" name="GūsūLán" />, id: 1 },
	]

	return (
		<div className="relative">
			{!audio ?
				(
					<div className="sm:w-10 md:w-16 lg:w-18 cursor-pointer" onClick={() => setAudio(!audio)}>
						<img src="/logos/audio.svg" height="auto" width="100%" alt=""/>
					</div>
				) : (
					<button className="fixed top-2 right-4 w-5 md:w-7 fill-current z-10" onClick={() => setAudio(!audio)}>
						<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512">
							<path d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z"/></svg>
					</button>
				)
			}
			<div
				className={`fixed top-0 right-0 h-4/5 w-72 bg-blueBG ${audio ? 'translate-x-0' : 'translate-x-full'} ease-in-out duration-1000`}>
				<div className="flex flex-col pt-8 px-10 md:px-4 overflow-y-scroll h-full">
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