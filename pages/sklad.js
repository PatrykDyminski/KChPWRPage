import IdCard from '@components/IdCard'
import MyPage from '@components/MyPage'

import Image from 'next/image'

import fs from 'fs'
import path from 'path'
import HeroIdCard from '@components/HeroIdCard'

const title = "Skład"

export default function Sklad({ peopleInVoices }) {
  return (
    <MyPage pageTitle={title}>
      <div className="py-10">

        <p className="text-xl text-accent-1 text-center mt-8 mb-16">
        Dyrygentką Kameralnego chóru Politechniki Wrocławskiej jest Anna Sipak asystentem dyrygenta jest Dominik Kozłowski
        </p>

        <HeroIdCard name="Anna Sipak"
                    imgSource="/avatar.png"
                    link="/dyrygent"
                    text="Anna Sipak – chórmistrz, dyrygent symfoniczny, pedagog. Absolwentka Uniwersytetu Warmińsko-Mazurskiego w Olsztynie (Edukacja Artystyczna w Zakresie Sztuki Muzycznej) oraz Akademii Muzycznej im. Karola Lipińskiego we Wrocławiu (Edukacja Muzyczna, Prowadzenie Zespołów Wokalnych i Wokalno-Instrumentalnych, Dyrygentura Symfoniczno-Operowa). Współzałożycielka i kierownik artystyczny Kameralnego Chóru Politechniki Wrocławskiej. Założycielka chóru Tre sta cantando III Liceum Ogólnokształcącego we Wrocławiu. Współpracuje m.in. z Narodowym Forum Muzyki i Wrocławskim Centrum Rozwoju Społecznego."/>

        <HeroIdCard name="Dominik Kozłowski"
                    imgSource="/avatar.png"
                    link="/dominik"
                    text="Dominik Kozłowski – dyrygent, wokalista, pianista, organista, kompozytor. Studiuje dyrygenturę symfoniczno-operową w klasie dr hab. Marzeny Diakun oraz wokalistykę w  klasie prof. Bogdana Makala. Zwycięzca i laureat Ogólnopolskich Konkursów Organowych w  Olsztynie. Członek Polskiego Narodowego Chóru Młodzieżowego. Występował podczas licznych wydarzeń kulturalnych w całej Polsce, m.in. w ramach 58. Międzynarodowego Festiwalu Moniuszkowskiego w Kudowie-Zdroju oraz X i XI Międzynarodowego Festiwalu Muzyka u J. I. Schnabla w Nowogrodźcu. W 2019 roku został uhonorowany stypendium Rektora Akademii Muzycznej we Wrocławiu."/>

        <ul className="">
          {peopleInVoices.map((voice) => (
            <li className="px-4 py-2 m-2">
              <h2 className="text-3xl text-center text-accent-1 font-medium border-t-4 border-b-4 border-black mt-10 py-2">{voice.voiceName}</h2>
              
              <div className="grid grid-cols-2 md:grid-cols-4">
                {voice.people.map((person) => 
                  (<IdCard name={person.name} imgSource={person.picture} />)
                  )}
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

    const people2 = people.map((p) => {
      const p2 = p.split(',')
      var img = p2[1]
      if(p2[1] == null || p2[1] == ""){
        img = "/avatar.png"
      }
      console.log(img)
      return {
        name: p2[0],
        picture: img
      }}
    )

    return {
      voiceName,
      people: people2,
    }
  })

  return {
    props: {
      peopleInVoices: peopleInVoices.sort((a,b) => b.people.length - a.people.length),
    },
  }
}
