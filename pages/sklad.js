import IdCard from '@components/IdCard'
import MyPage from '@components/MyPage'

import Image from 'next/image'

import fs from 'fs'
import path from 'path'

const title = "Skład"

export default function Sklad({ peopleInVoices }) {
  return (
    <MyPage pageTitle={title}>
      <div className="py-10">

        <p className="text-xl text-accent-1 text-center mb-3">
        Dyrygentką Kameralnego chóru Politechniki Wrocławskiej jest Anna Sipak asystentem dyrygenta jest Dominik Kozłowski
        </p>

        <div className="pb-4 grid grid-cols-2">
          <Image src="/avatar.png" width={500} height={500} className="rounded-full transform scale-50"></Image>
            <div className="self-start">
              <div>Anna Sipak</div>
              <div className="">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
              </div>
            </div>
        </div>

        <div className="pb-4 grid grid-cols-2">
          <Image src="/avatar.png" className="rounded-full transform scale-50"></Image>
            <div className="self-start">
              <div>Dominik Kozłowski</div>
              <div className="">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
              </div>
            </div>
        </div>

        <ul className="">
          {peopleInVoices.map((voice) => (
            <li className="px-4 py-2 m-2">
              <h2 className="text-3xl text-center text-accent-1 font-medium border-t-4 border-b-4 border-black mt-10 py-2">{voice.voiceName}</h2>
              
              <div className="grid grid-cols-2 md:grid-cols-4">
                {voice.people.map((person) => (
                  <IdCard name={person} imgSource="/avatar.png" />
                ))}
              </div>

            </li>
          ))}
        </ul>

      </div>
    </MyPage>
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
