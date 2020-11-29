import IdCard from '@components/IdCard'
import MyPage from '@components/MyPage'

import HeroIdCard from '@components/HeroIdCard'
import { getPeopleInVoices } from 'lib/api'

const title = "Skład"

export default function Sklad({ peopleInVoices }) {
  return (
    <MyPage pageTitle={title}>
      <div className="py-4 md:py-8">

        <p className="text-xl text-center mt-8 mb-16">
          Dyrygentką Kameralnego chóru Politechniki Wrocławskiej jest Anna Sipak asystentem dyrygenta jest Dominik Kozłowski
        </p>

        <HeroIdCard name="Anna Sipak"
          imgSource="/ania2optK.jpg"
          link="/dyrygent"
          text="Anna Sipak – chórmistrz, dyrygent symfoniczny, pedagog. Absolwentka Uniwersytetu Warmińsko-Mazurskiego w Olsztynie (Edukacja Artystyczna w Zakresie Sztuki Muzycznej) oraz Akademii Muzycznej im. Karola Lipińskiego we Wrocławiu (Edukacja Muzyczna, Prowadzenie Zespołów Wokalnych i Wokalno-Instrumentalnych, Dyrygentura Symfoniczno-Operowa). Współzałożycielka i kierownik artystyczny Kameralnego Chóru Politechniki Wrocławskiej. Założycielka chóru Tre sta cantando III Liceum Ogólnokształcącego we Wrocławiu. Współpracuje m.in. z Narodowym Forum Muzyki i Wrocławskim Centrum Rozwoju Społecznego." />

        <HeroIdCard name="Dominik Kozłowski"
          imgSource="/dominik3K.jpg"
          link="/dominik"
          text="Dominik Kozłowski – dyrygent, wokalista, pianista, organista, kompozytor. Studiuje dyrygenturę symfoniczno-operową w klasie dr hab. Marzeny Diakun oraz wokalistykę w  klasie prof. Bogdana Makala. Zwycięzca i laureat Ogólnopolskich Konkursów Organowych w  Olsztynie. Członek Polskiego Narodowego Chóru Młodzieżowego. Występował podczas licznych wydarzeń kulturalnych w całej Polsce, m.in. w ramach 58. Międzynarodowego Festiwalu Moniuszkowskiego w Kudowie-Zdroju oraz X i XI Międzynarodowego Festiwalu Muzyka u J. I. Schnabla w Nowogrodźcu. W 2019 roku został uhonorowany stypendium Rektora Akademii Muzycznej we Wrocławiu." />

        <ul>
          {peopleInVoices.map((voice) => (
            <li key={voice.voiceName} className="px-4 py-2 m-2">
              <h2 className="text-3xl text-center font-medium border-t-4 border-b-4 border-pwr mt-4 md:mt-10 py-2">{voice.voiceName}</h2>

              <ul className="grid grid-cols-2 md:grid-cols-4">
                {voice.people.map((person) =>
                  (<IdCard name={person.name} imgSource={person.picture} />)
                )}
              </ul>

            </li>
          ))}
        </ul>

      </div>
    </MyPage>
  )
}

export async function getStaticProps() {

  const ppl = getPeopleInVoices()

  return {
    props: {
      peopleInVoices: ppl
    }
  }
}
