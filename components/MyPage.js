import Nav from '@components/Nav'
import Footer from '@components/Footer'

import Head from 'next/head'

export default function MyPage({children, pageTitle}){
  return (
    <>
      <Head>
        <title>KCHPWR | {pageTitle}</title>
        <meta property="og:title" content="Strona Kameralnego Chóru Politechniki Wrocławskiej" key="title" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <div className="px-4 py-10 max-w-3xl mx-auto sm:px-6 sm:py-12 lg:max-w-4xl lg:py-16 lg:px-8 xl:max-w-6xl min-h-screen">
        <Nav/>
        <main>
          {children}
        </main>
      </div>
      <Footer/>
    </>
  )
}