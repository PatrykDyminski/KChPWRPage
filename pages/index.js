import MyPage from '@components/MyPage'
import MyProse from '@components/MyProse'
import PostsGrid from '@components/PostsGrid'

import Image from 'next/image'
import Link from 'next/link'

import { getLatestPosts } from '../lib/api'

const title = "Dom"

export default function IndexPage({ posts }) {
  return (
    <MyPage pageTitle={title}>
      <div className="flex flex-col text-center items-center my-8">
        <Image src="/zdj1.jpg" width={1152} height={583} alt="nasz zespół" />
      </div>
      <MyProse>
        <h2 className="text-left">Kameralny Chór Politechniki Wrocławskiej to:</h2>
        <h3>Pasja</h3>
        <p>Jesteśmy grupą amatorów pasjonatów, którzy spotykają się dwa razy w tygodniu dla czystej przyjemności śpiewania. Niektórzy z nas studiują, inni łączą obowiązki chóralne z zawodowymi i rodzicielskimi. Są wśród nas ludzie najróżniejszych profesji związanych w różny sposób z Politechniką Wrocławską.
        </p>
        <h3>Przyjaźń</h3>
        <p>Łączy nas przyjaźń i chęć wspólnego muzykowania. Jesteśmy chórem kameralnym, więc panuje u nas prawdziwie rodzinna atmosfera. Nikt (a w szczególności jego głos) nie pozostaje niezauważony czy anonimowy.
        </p>
        <h3>Wyzwania</h3>
        <p>Śpiew chóralny jest dla nas odskocznią od codzienności, relaksem, źródłem radości i wzruszenia. I sięganiem „do gwiazd”. Wspólna praca daje nam możliwość nauczenia się nowych umiejętności: pracy w zespole, słuchania innych, prowadzenia projektów, jak również śpiewania.
        </p>
        <h4>Jeśli chcesz do nas dołączyć odwiedź stronę <Link href="/rekrutacja"><a> REKRUTACJI</a></Link></h4>
        <h4>Dowiedz się więcej o <Link href="/historia"> HISTORII</Link></h4>
        <h4>Poznaj ludzi tworzących nasz <Link href="/sklad"> ZESPÓŁ</Link></h4>
      </MyProse>

      <div className="flex flex-col text-center items-center my-8">
        <h2 className="text-3xl mb-2 leading-snug text-center p-2 font-bold border-4 border-black md:w-10/12">Najnowsze wpisy na naszym blogu</h2>
      </div>

      <PostsGrid posts={posts} />

    </MyPage>
  )
}

export async function getStaticProps() {
  const posts = getLatestPosts([
    'title',
    'date',
    'slug',
    'author',
    'image'
  ], 2)

  return {
    props: { posts }
  }
}