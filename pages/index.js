import MyPage from '@components/MyPage'
import MyProse from '@components/MyProse'

import Image from 'next/image'

const title = "Dom"

export default function IndexPage() {
  return (
    <MyPage pageTitle={title}>
      <div className="flex flex-col text-center items-center my-8">
        <Image src="/zdj1.jpg" width={1152} height={583} alt="nasz zespół"/>
      </div>
      <MyProse>
        <h3>Jesteśmy chórem działającym na Politechnice Wrocławskiej</h3>
        <p>Naszą pasją jest śpiew. Wśród nas są studenci, pracownicy oraz osoby całkowicie niezwiązane z uczelnią.</p>
        <p>Łączy nas jedno: Pasja i miłość do śpiewania. W trakcie prób doskonalimy swoje umiejętności oraz przygotowujemy repertuar koncertowy. 
          Często występujemy, nie tylko we Wrocławiu. Angażujemy się w wiele inicjatyw często charytatywnych.
        </p>        
      </MyProse>
    </MyPage>
  )
}
