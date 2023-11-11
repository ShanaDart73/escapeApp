import '../styles/global.css'
import { Analytics } from '@vercel/analytics/react'
import { NextSeo } from 'next-seo'

export default function App({ Component, pageProps }) {
    return(
        <>
            <Component {...pageProps} />
            <Analytics />
            <NextSeo
                title="escape"
                description="Enjoy reading side stories of Lan WangJi and Wei WuXian, the popular characters of Modaozushi."
            />
        </>
    )
}