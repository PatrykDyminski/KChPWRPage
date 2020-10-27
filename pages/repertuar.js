import MyPage from '@components/MyPage'
import MyProse from '@components/MyProse'

import fs from 'fs'
import path from 'path'

const title = "Repertuar"

export default function Repertuar({ categories }) {
  return (
    <MyPage pageTitle={title}>
      <div className="flex flex-row place-content-center">
        <img src="/nuty.jpg" className="rounded-sm border-1 border-black my-5"></img>
      </div> 
      <MyProse>
        <h3>Nasz Repertuar</h3>
        <p>W Kamerlnym Chórze PWr dbamy o jak najwyższą jakość prezentowanego mateiału, pomaga w tym idealnie wyselekcjonowny i zróżnicowany repertuar.</p>
        <p>Znajdują się w nim utwory zarówno klasyczne jak i współczesne. Accapella oraz z akompaniamentem.
          Spiewamy pieśni patriotyczne, sakralne, okresowe oraz rozrywkowe. Na zamówienie przygotujemy koncert z dowolnym repertuarem.
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
  const musicDir = path.join(process.cwd(), 'data', 'repertoire')
  const filenames = fs.readdirSync(musicDir)

  const categories = filenames.map((filename) => {
    const filePath = path.join(musicDir, filename)
    const fileContents = fs.readFileSync(filePath, 'utf8')

    const tracks =  fileContents.split(/\n/)
    const categoryName = tracks[0]
    tracks.shift()

    return {
      categoryName: categoryName,
      tracks: tracks
    }
  })

  return {
    props: {
      categories: categories.sort((a,b) => b.tracks.length - a.tracks.length)
    }
  }
}
