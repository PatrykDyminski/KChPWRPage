import MyPage from '@components/MyPage'
import MyProse from '@components/MyProse'

import { getRepertoire } from 'lib/api'

import Image from "next/image";

const title = "Repertuar"

export default function Repertuar({ categories }) {
  return (
    <MyPage pageTitle={title}>
      <div className="flex flex-col items-center my-8">
        <Image
          src="/nuty.jpg"
          width={594}
          height={335}
          alt="nuty"
        />
      </div>
      <MyProse>
        <h3>Nasz Repertuar</h3>
        <p>W Kamerlnym Chórze PWr dbamy o jak najwyższą jakość prezentowanego mateiału, pomaga w tym idealnie wyselekcjonowny i zróżnicowany repertuar.</p>
        <p>Znajdują się w nim utwory zarówno klasyczne jak i współczesne. Accapella oraz z akompaniamentem. Śpiewamy pieśni patriotyczne, sakralne, okresowe oraz rozrywkowe. Na zamówienie przygotujemy koncert z dowolnym repertuarem.
        </p>

        {categories.map((category) => (
          <div>
            <h3 className="text-center font-medium border-t-4 border-b-4 border-pwr mt-4 md:mt-10 py-2">{category.categoryName}</h3>

            <ol>
              {category.tracks.map((track) => (
                <li className="xl:prose-lg">{track}</li>
              ))}
            </ol>

          </div>
        ))}
      </MyProse>
    </MyPage>
  );
}

export async function getStaticProps() {

  const repertoire = getRepertoire()

  return {
    props: {
      categories: repertoire
    }
  }
}
