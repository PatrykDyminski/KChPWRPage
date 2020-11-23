import MyPage from '@components/MyPage'
import MyProse from '@components/MyProse'

import Image from 'next/image'

const title = "Asystent"

export default function Dominik() {
  return (
    <MyPage pageTitle={title}>
      <div className="flex flex-col text-center items-center my-8">
        <Image src="/dominik.jpg" width={1008} height={672} alt="Dominik Kozłowski" />
      </div>
      <MyProse>
        <h1>Dominik Kozłowski</h1>
        <p>Dominik Kozłowski – ukończył Państwową Szkołę Muzyczną I stopnia im. Wojciecha Kilara
        w Dzierżoniowie w klasie fortepianu, następnie kontynuował naukę w Salezjańskiej
        Ogólnokształcącej Szkole Muzycznej II stopnia w Lutomiersku ucząc się gry na organach.
        W tym czasie został zwycięzcą i laureatem ogólnopolskich i regionalnych konkursów
        organowych, m.in. Ogólnopolskiego Konkursu Organowego w Olsztynie – I miejsce (2013),
        II miejsce (2015). Został także wyróżniony na konkursie kompozytorskim w ramach
        XXVIII Legnickiego Conversatorium Organowego.
        </p>
        <p>W 2019 roku uzyskał tytuł licencjata w klasie dyrygentury dr hab. Marzeny Diakun
        w Akademii Muzycznej im. Karola Lipińskiego we Wrocławiu. Obecnie kontynuuje naukę
        dyrygentury na studiach magisterskich w tej samej klasie, równocześnie studiując śpiew
        solowy w klasie prof. Bogdana Makala. Od czterech lat jest asystentem dyrygenta
        w Kameralnym Chórze Politechniki Wrocławskiej. Debiutował prowadząc koncert z udziałem
        solistów, chóru oraz zespołu instrumentalnego w ramach obchodów Dnia Papieskiego
        w 2017 roku.
        </p>
        <p>Umiejętności dyrygenckie rozwijał podczas kursów i warsztatów z Jos Van Immerseelem
        (Belgia), Kerry Strattonem (Kanada), Markiem Pijarowskim (Polska) oraz
        Jüri Alpertenem (Estonia). Współpracował z Akademicką Orkiestrą Kameralną i Akademicką
        Orkiestrą Symfoniczną rodzimej uczelni, Orkiestrą Symfoniczną ZSM w Legnicy, Orkiestrą
        Symfoniczną Filharmonii Dolnośląskiej, a także z NFM Filharmonią Wrocławską. Swój
        głos kształcił również pod okiem Roberta Nakonecznego (Polska), Jamesa Gilchrista
        (Wielka Brytania) oraz Nicholasa Mulroya (Wielka Brytania). Jest stypendystą stypendium
        Rektora Akademii Muzycznej we Wrocławiu.
        </p>
      </MyProse>
    </MyPage>
  )
}
