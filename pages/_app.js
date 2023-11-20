import '../styles/global.css'
import { Analytics } from '@vercel/analytics/react'
import { DefaultSeo } from 'next-seo'

export default function App({ Component, pageProps }) {
    return(
        <>
            <DefaultSeo
                title="Lan WangJi & Wei WuXian"
                description="Lan WangJi and Wei WuXian side stories, the popular characters of The Founder of Demonic Cultivation."
                openGraph={{
                    type: 'website',
                    title: 'Lan WangJi & Wei WuXian',
                    locale: 'en_GB',
                    url: 'https://www.escape.net.co',
                    siteName: 'Lan WangJi & Wei WuXian',
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