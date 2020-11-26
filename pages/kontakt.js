import MyPage from '@components/MyPage'
import MyProse from '@components/MyProse'

import Image from 'next/image'
import Link from 'next/link'

const title = "Kontakt"

export default function Kontakt() {
  return (
    <MyPage pageTitle={title}>
      <MyProse>
        <h2 className="pt-4 md:pt-8">Lokalizacja siedziby</h2>
        <p>Studenckie Centrum Kultury Muzycznej, ul. Powstańców Śląskich 137a</p>
      </MyProse>
      <div className="flex flex-col items-center my-8">
        <Image src="/siedziba.jpg" width={600} height={407} alt="Nasz siedziba" />
      </div>
      <MyProse>
        <h3>Próby</h3>
        <p>Próby chóru odbywają się w:
        <ul>
          <li>poniedziałki: 18:45 – 21:30</li>
          <li>środy: 18:00 – 20:00</li>
        </ul>
        </p>
        <h3>Poczta tradycyjna</h3>
        <ul>
          <li>Kameralny Chór Politechniki Wrocławskiej</li>
          <li>Dział Studencki PWr</li>
          <li>Politechnika Wrocławska</li>
          <li>Wybrzeże Wyspiańskiego 27</li>
          <li>50-370 Wrocław</li>
        </ul>
        <h3>Poczta elektroniczna</h3>
        <p>kameralny@pwr.edu.pl</p>
        <h3>facebook</h3>
        <Link href="https://www.facebook.com/KameralnyChorPWr" passHref={true}>
          <p className="cursor-pointer hover:text-blue-600">facebook.com/KameralnyChorPWr</p>
        </Link>
      </MyProse>
    </MyPage>
  )
}
