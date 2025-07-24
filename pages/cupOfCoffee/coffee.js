
const Coffee = () => {
    return (
        <div className="h-screen bg-[url('/photos/cupOfCoffee/heart.png')] bg-cover bg-center">
            <div className="h-screen flex flex-col items-center justify-center">
                <img className="h-auto w-80 md:w-2/4 max-w-96 rounded-3xl drop-shadow-xl" src="/photos/cupOfCoffee/revolutMe.png" alt="rev" />
                <a className="py-2 text-stone-50 text-lg md:text-2xl" href="http://revolut.me/carolekay">
                    revolut.me/carolekay
                </a>
            </div>
        </div>
    )
}

export default Coffee;