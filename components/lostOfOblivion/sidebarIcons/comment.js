import { useState, useEffect } from "react"

const Comment = () => {
	const [display, setDisplay] = useState(false)
	const [comment, setComment] = useState(JSON.parse(localStorage.getItem("commentList")) || [])
	const [name, setName] = useState("")
	const [text, setText] = useState("")

	useEffect(() => {
		localStorage.setItem("commentList", JSON.stringify(comment))
	}, [comment])

	const handleSubmit = (e) => {
		e.preventDefault()
		if (!name.trim() || !text.trim() || !text) return

		const newComment = {
			id: Date.now(),
			name: name.trim(),
			text: text.trim(),
			date: new Date().toLocaleString(),
		}

		setComment([newComment, ...comment])
		setName("")
		setText("")
	}

	return (
		<div className="relative">
			{!display ? (
					<div className="p-2 sm:w-10 md:w-16 lg:w-18 cursor-pointer" onClick={() => setDisplay(!display)}>
						<img src="/logos/comments.svg" height="auto" width="100%" alt="" />
					</div>
				) : (
					<button className="fixed top-2 right-4 w-5 md:w-7 fill-current z-30" onClick={() => setDisplay(!display)}>
						<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><path d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z"/></svg>
					</button>
				)
			}
			<div className={`h-full w-10/12 top-0 right-0 fixed bg-blueBG z-10 p-6 overflow-y-scroll ${display ? "translate-x-0" : "translate-x-full"} ease-in-out duration-1000`}>
				<h2 className="p-2">Comments</h2>
				<form onSubmit={handleSubmit} className="max-w-xl mx-auto space-y-4 mb-6">
					<input
						type="text"
						placeholder="Your Name"
						value={name}
						onChange={(e) => setName(e.target.value)}
						className="w-full border rounded-lg px-4 py-2 mt-2 focus:outline-none focus:ring-2 focus:ring-blue-300"
					/>
					<textarea
						placeholder="Your Comments"
						value={text}
						onChange={(e) => setText(e.target.value)}
						rows={4}
						className="w-full border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-300"
					/>
					<button className="bg-blue-900 text-gray-400 px-6 py-2 rounded-lg hover:bg-blue-800 transition">
						Post Comment
					</button>
				</form>

				<div className="space-y-4">
					{comment.length === 0 ? (
						<p className="text-gray-500 text-center">No comments yet. Be the first!</p>
					) : (
						comment.map((chat) => (
							<div key={chat.id} className="border-t pt-4 border-gray-400 space-y-1">
								<p className="font-semibold">{chat.name}</p>
								<p className="text-gray-300">{chat.text}</p>
								<p className="text-xs text-gray-400">{text.date}</p>
							</div>
						))
					)}
				</div>
			</div>
		</div>
	)
}

export default Comment