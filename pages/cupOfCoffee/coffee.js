import styles from '../../styles/coffee.module.css'
import Image from 'next/image'

const Coffee = () => {
    return (
        <div>
            <div style={{
                zIndex: -1,
                position: "fixed",
                width: "100vw",
                height: "100vh"
            }}>
                <Image
                    src="/photos/cupOfCoffee/heart.png"
                    alt=""
                    layout="fill"
                    objectFit="cover"
                />
            </div>
            <div className={styles.scan}>
                <Image
                    src="/photos/cupOfCoffee/revolutMe.png"
                    width="300"
                    height="300"
                />
                <a href="http://revolut.me/carolekay"
                   style={{
                       position: "relative",
                       textDecoration: "none",
                       fontSize: "1.2rem",
                       color: "bisque"
                }}
                >
                    revolut.me/carolekay
                </a>
            </div>
        </div>
    )
}

export default Coffee;