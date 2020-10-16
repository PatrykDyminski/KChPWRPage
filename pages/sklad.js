import Nav from '../components/nav'

import fs from 'fs'
import path from 'path'

export default function Sklad({ peopleInVoices }) {
  return (
    <div>
      <Nav />
      <div className="py-10">
        <h1 className="text-5xl text-center text-accent-1">
          Skład
        </h1>
        <p className="text-xl text-accent-1 text-center mb-3">
        Dyrygentką Kameralnego chóru Politechniki Wrocławskiej jest Anna Sipak asystentem dyrygenta jest Dominik Kozłowski
        </p>

        <ul className="grid grid-cols-1 sm:grid-cols-2">
          {peopleInVoices.map((voice) => (
            <li className="text-center border-4 border-black rounded-lg px-4 py-2 m-2">
              <h2 className="text-2xl text-accent-1">{voice.voiceName}</h2>
              
              <ul>
                {voice.people.map((person) => (
                  <li>
                    <p className="my-2">{person}</p>
                  </li>
                ))}
              </ul>

            </li>
          ))}
        </ul>

      </div>
    </div>
  )
}

export async function getStaticProps() {
  const peopleDir = path.join(process.cwd(), 'data', 'people')
  const filenames = fs.readdirSync(peopleDir)

  const peopleInVoices = filenames.map((filename) => {
    const filePath = path.join(peopleDir, filename)
    const fileContents = fs.readFileSync(filePath, 'utf8')
    const voiceName = filename.split('\.')[0]
    const people =  fileContents.split(/\n/);

    return {
      voiceName,
      people: people,
    }
  })

  return {
    props: {
      peopleInVoices: peopleInVoices.sort((a,b) => b.people.length - a.people.length),
    },
  }
}
