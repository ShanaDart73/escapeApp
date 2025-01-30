//import Router from 'next/router'
import Head from 'next/head'
import { getAllChapters, getAllChapIds } from '../../../lib/lanWangJiVsAlcohol/allDataArrays'
import { deserialize } from 'react-serialize'

const pageTitle = "escape"

export async function getStaticPaths() {
	const paths = await getAllChapIds()
	return {
		paths,
		fallback: false
	}
}

export async function getStaticProps({ params }) {
	const data = await getAllChapters(params.id)
	return {
		props: {
			data
		}
	}
}

const DynamicsPages = ({ data }) => {
	return (
		<div className="select-none text-base md:text-lg lg:text-xl xl:text-2xl text-textColor bg-blueBG"
		     onContextMenu={(e) => e.preventDefault()}
		>
			<Head>
				<link rel="apple-touch-icon" sizes="180x180" href="/icon/apple-touch-icon.png" />
				<link rel="icon" type="image/png" sizes="32x32" href="/icon/favicon-32x32.png" />
				<link rel="icon" type="image/png" sizes="16x16" href="/icon/favicon-16x16.png" />
				<link rel="manifest" href="/icon/site.webmanifest" />
				<link rel="mask-icon" href="/icon/safari-pinned-tab.svg" color="#5bbad5" />
				<meta name="msapplication-TileColor" content="#603cba" />
				<meta name="theme-color" content="#ffffff" />
				<title>{pageTitle}</title>
			</Head>
			<div className="flex h-screen w-full items-center justify-center">
				<div className="grid h-screen w-full grid-cols-12 grid-rows-12 gap-1">
					<div className="col-span-12 row-span-1 sticky top-0 right-0 left-0 flex items-center justify-center font-canvas-font-title text-xl md:text-2xl lg:text-3xl p-4 bg-gradient-to-b from-gradientTop to-gradientBottom">
						{data.header}
					</div>
					<div className="hidden md:flex col-span-4 lg:col-span-3 row-span-11 sticky top-14">
						Left image
					</div>
					<div className="col-span-10 md:col-span-7 lg:col-span-5 row-span-10 font-canvas-font-title text-justify pl-4 pr-2 lg:pr-4 overflow-y-scroll">
						{deserialize(data.content)}
					</div>
					<div className="hidden lg:flex col-span-3 row-span-11 sticky top-14">
						Right image
					</div>
					<div className="flex flex-col items-center col-span-2 md:col-span-1 row-span-11 sticky top-14">
						Icons
					</div>
					<div
						className="flex justify-between col-span-10 md:col-span-7 lg:col-span-5 row-span-1 sticky bottom-0 bg-blueBG">
						<button
							className="text-textColor p-4 bg-gradient-to-t from-gradientTop to-gradientBottom cursor-pointer hover:text-blue-400">
							<span>&larr;Prev</span>
						</button>
						<button
							className="text-textColor p-4 bg-gradient-to-t from-gradientTop to-gradientBottom cursor-pointer hover:text-blue-400">
							<span>Next&rarr;</span>
						</button>
					</div>
				</div>
			</div>
		</div>
	)
}

export default DynamicsPages