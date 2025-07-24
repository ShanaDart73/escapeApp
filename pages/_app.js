import '../styles/global.css'
//import { Analytics } from '@vercel/analytics/react'
import { DefaultSeo } from 'next-seo'

export default function App({ Component, pageProps }) {
    return(
        <>
            <DefaultSeo
                title="Escape from your daily life and dive into a fantasy world"
                description="Lan WangJi and Wei WuXian side stories, the popular characters of The Founder of Demonic Cultivation."
                openGraph={{
                    type: 'website',
                    title: 'Escape from your daily life and dive into a fantasy world',
                    locale: 'en_GB',
                    url: 'https://escape.net.co',
                    siteName: 'escape',
                }}
                twitter={{
                    handle: '@handle',
                    site: '@site',
                    cardType: 'summary_large_image',
                }}
            />
            <Component {...pageProps} />
        </>
    )
}