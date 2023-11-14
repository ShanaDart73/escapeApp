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
                    title: 'escape',
                    locale: 'en_IE',
                    url: 'https://www.escape.co.net',
                    siteName: 'escape',
                    description: 'Lan WangJi and Wei WuXian side stories, the popular characters of The Founder of Demonic Cultivation.',
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