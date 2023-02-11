import Nav from '@components/Nav'
import Footer from '@components/Footer'

import Head from 'next/head'

import { Roboto_Mono } from '@next/font/google';

const roboto_mono = Roboto_Mono({
  variable: '--font-roboto-mono',
  subsets: ['latin'],
  display: 'swap'
});

export default function MyPage({ children, pageTitle }) {

  const title = `KCHPWR | ${pageTitle}`

  return (
    <>
      <Head>
        <title>{title}</title>
        <meta property="og:title" content="Strona Kameralnego Chóru Politechniki Wrocławskiej" key="title" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta charSet="utf-8" />
        <link rel="shortcut icon" href="/icon/K_logo_wob.png" />
      </Head>
      <div className={`px-4 py-4 max-w-3xl mx-auto sm:px-6 lg:max-w-4xl lg:px-8 xl:max-w-6xl min-h-screen ${roboto_mono.variable}`}>
        <Nav />
        <main>
          {children}
        </main>
      </div>
      <Footer />
    </>
  )
}