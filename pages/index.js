import Head from 'next/head'
import { NextSeo } from 'next-seo'
import HomeContent from '../lib/homepage/homeContent'
import FooterNote from '../lib/homepage/footerNote/footer'

const pageTitle = "Escape from your daily life and dive into a fantasy world"

const Homepage = () => {
    return (
        <div className="bg-[url('/photos/homepage/stars.png')]">
            <NextSeo
                title="Lan WangJi & Wei WuXian"
                description="Lan WangJi and Wei WuXian side stories, the popular characters of The Founder of Demonic Cultivation."
            />
            <Head>
                <link rel="apple-touch-icon" sizes="180x180" href="/icon/apple-touch-icon.png"/>
                <link rel="icon" type="image/png" sizes="32x32" href="/icon/favicon-32x32.png"/>
                <link rel="icon" type="image/png" sizes="16x16" href="/icon/favicon-16x16.png"/>
                <link rel="manifest" href="/icon/site.webmanifest"/>
                <link rel="mask-icon" href="/icon/safari-pinned-tab.svg" color="#5bbad5"/>
                <meta name="msapplication-TileColor" content="#603cba"/>
                <meta name="theme-color" content="#ffffff"/>
                <meta httpEquiv='content-language' content='en-gb'/>
                <meta name="robots" content="index"/>
                <meta name="googlebot" content="index"/>
                <meta name="keywords" content="WangXian, Lan WangJi, Wei WuXian, Modaozushi, Demonic Cultivation"/>
                <meta name="msvalidate.01" content="6AAB940142707795076943EDBAD8FB19"/>
                <meta name="google-site-verification" content="ygigt7CFXyUyeMm3KZI8o1-8gnOrV9WMTkLEAha33c4"/>
                <meta name="p:domain_verify" content="6b5a72759d763c791263fd92f986a1f4"/>
                <title>{pageTitle}</title>
            </Head>
            <div className="flex flex-col items-center gap-y-8">
                <div className="m-10">
                    <img className="rounded-2xl brightness-50" src="/photos/homepage/home.png" alt="head-image" />
                </div>
                <h1 className="brightness-50 italic font-canvas-font-title text-purple-500 text-center px-5 mb-3 text-2xl lg:text-3xl">{pageTitle}</h1>
                <div className="flex flex-col md:flex-row md:flex-wrap justify-center gap-y-8 gap-x-8 lg:gap-16 max-w-4xl">
                    <HomeContent />
                </div>
                <div className="">
                    <FooterNote />
                </div>
            </div>
        </div>
    )
}

export default Homepage