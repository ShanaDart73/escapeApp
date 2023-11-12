import '../styles/global.css'
import { Analytics } from '@vercel/analytics/react'
import { DefaultSeo } from 'next-seo'

export default function App({ Component, pageProps }) {
    return(
        <>
            <DefaultSeo
                title="escape"
                description="Enjoy reading side stories of Lan WangJi and Wei WuXian, the popular characters of Modaozushi."
                openGraph={{
                    type: 'website',
                    locale: 'en_IE',
                    url: 'https://www.url.ie/',
                    siteName: 'escape',
                }}
                twitter={{
                    handle: '@handle',
                    site: '@site',
                    cardType: 'summary_large_image',
                }}
            />
            <Component {...pageProps} />
            <Analytics />
        </>
    )
}