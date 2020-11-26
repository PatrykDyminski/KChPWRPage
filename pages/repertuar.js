import MyPage from '@components/MyPage'
import MyProse from '@components/MyProse'

import { getRepertoire } from 'lib/api'

import Image from 'next/image'

const title = "Repertuar"

export default function Repertuar({ categories }) {
  return (
    <MyPage pageTitle={title}>
      <div className="flex flex-col items-center my-8">
        <Image src="/nuty.jpg" width={594} height={335} alt="nuty" />
      </div>
      <MyProse>
        <h3>Nasz Repertuar</h3>
        <p>W Kamerlnym Chórze PWr dbamy o jak najwyższą jakość prezentowanego mateiału, pomaga w tym idealnie wyselekcjonowny i zróżnicowany repertuar.</p>
        <p>Znajdują się w nim utwory zarówno klasyczne jak i współczesne. Accapella oraz z akompaniamentem.Spiewamy pieśni patriotyczne, sakralne, okresowe oraz rozrywkowe. Na zamówienie przygotujemy koncert z dowolnym repertuarem.
        </p>

        {categories.map((category) => (
          <div className="">
            <h2 className="text-3xl text-center text-accent-1 font-medium border-t-4 border-b-4 border-black mt-5 mb-5 py-2">{category.categoryName}</h2>

            <ol className="">
              {category.tracks.map((track) => (
                <li className="xl:prose-lg">{track}</li>
              ))}
            </ol>

          </div>
        ))}
      </MyProse>
    </MyPage>
  )
}

export async function getStaticProps() {

  const repertoire = getRepertoire()
  
  return {
    props: {
      categories: repertoire
    }
  }
}
