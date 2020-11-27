import Nav from '@components/Nav'
import Footer from '@components/Footer'

import Head from 'next/head'

export default function MyPage({ children, pageTitle }) {
  return (
    <>
      <Head>
        <title>KCHPWR | {pageTitle}</title>
        <meta property="og:title" content="Strona Kameralnego Chóru Politechniki Wrocławskiej" key="title" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta charSet="utf-8" />
        <link rel="shortcut icon" href="/icon/K_logo_wob.png" />
      </Head>
      <div className="bg-gradient-to-r from-white via-gray-200 to-white">
      <div className="px-4 py-8 max-w-3xl mx-auto sm:px-6 lg:max-w-4xl lg:px-8 xl:max-w-6xl min-h-screen ">
        <Nav />
        <main>
          {children}
        </main>
      </div>
      </div>
      <Footer />
    </>
  )
}