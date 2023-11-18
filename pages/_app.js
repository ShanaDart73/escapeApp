import '../styles/global.css'
import { Analytics } from '@vercel/analytics/react'
import { DefaultSeo } from 'next-seo'

export default function App({ Component, pageProps }) {
    return(
        <>
            <DefaultSeo
                title="escape"
                description="Lan WangJi and Wei WuXian side stories, the popular characters of The Founder of Demonic Cultivation."
                openGraph={{
                    type: 'website',
                    title: 'escape',
                    locale: 'en_GB',
                    url: 'https://www.escape.co.net',
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