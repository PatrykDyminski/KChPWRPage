import MyPage from '@components/MyPage'
import MyProse from '@components/MyProse'

import Image from 'next/image'

const title = "Dyrygent"

export default function Dyrygent() {
  return (
    <MyPage pageTitle={title}>
      <div className="flex flex-col items-center my-8">
        <Image src="/aniaopt.jpg" width={1074} height={746} alt="Anna Sipak" />
      </div>
      <MyProse>
        <h1>Anna Sipak</h1>
        <p>Anna Sipak (ur.1989) – dyrygent, chórmistrz, pedagog. W 2012 roku ukończyła z wynikiem
        bardzo dobrym studia licencjackie na kierunku Edukacja Artystyczna W Zakresie Sztuki Muzycznej
        Uniwersytetu Warmińsko-Mazurskiego w Olsztynie, w klasie dyrygowania prof. Benedykta Błońskiego.
        Podczas studiów dwukrotnie otrzymała nagrodę dziekana Wydziału Sztuki za zaangażowanie w działalność
        artystyczną uczelni. Umiejętności w zakresie prowadzenia zespołów chóralnych doskonaliła podczas
        studiów magisterskich w Akademii Muzycznej im. Karola Lipińskiego we Wrocławiu, studiując dwie
        specjalności: Edukacja Muzyczna oraz Prowadzenie Zespołów Wokalnych I Wokalno-Instrumentalnych
        w klasie dyrygowania prof. Haliny Bobrowicz. Następnie podjęła studia w zakresie dyrygentury
        symfonicznej w klasie dyrygowania dr hab. Marzeny Diakun i prof. Mieczysława Gawrońskiego we
        wrocławskiej Akademii Muzycznej, uzyskując dyplom licencjata z oceną bardzo dobrą. Obecnie
        pracuje nad przygotowaniem dyplomu magisterskiego.
        </p>
        <p>Debiutowała w roli dyrygenta, prowadząc w 2012 roku w ramach egzaminu dyplomowego koncert Chóru
        Filharmonii Warmińsko – Mazurskiej, na estradzie tejże instytucji. Z zespołem tym przez 3 lata
        współpracowała także w charakterze artysty chóru, wykonując dzieła takie jak m.in. Requiem Polskie
        Krzysztofa Pendereckiego, Missa Pro Pace Wojciecha Kilara, Requiem Johna Ruttera, opery Tosca G. Pucciniego
        i La Traviata G. Verdiego, oraz liczne operetki.
        </p>
        <p>Jako dyrygent występowała m.in. na estradach i scenach Filharmonii Warmińsko-Mazurskiej,
        Narodowego Forum Muzyki we Wrocławiu, Filharmonii Dolnośląskiej w Jeleniej Górze oraz Opery Wrocławskiej.
        </p>
        <p>W latach 2013 – 2015 związana była z Chórem Kameralnym Politechniki Wrocławskiej Consonanza, gdzie aktywnie
        działała w roli chórzysty i asystenta dyrygenta.
        Współpracowała z wieloma zespołami w roli dyrygenta gościnnego.
        Od grudnia 2014 roku w ramach programu Akademia Chóralna Narodowego Forum Muzyki we Wrocławiu, prowadzi
        chór dziecięcy "Dolnośląskie Nutki" oraz chór "Tre sta Cantando" przy III Liceum Ogólnokształcącego im. Adama Mickiewicza we Wrocławiu.
        Od października 2015 roku jest kierownikiem artystycznym Kameralnego Chóru Politechniki Wrocławskiej.
        Aktywnie zajmuje się animacją kulturalną wśród osób starszych, prowadząc dwa zespoły senioralne – chór "Słoneczniki" oraz chór "Ballada".
        </p>
        <p>Poza działalnością chórmistrzowską zajmuje się wykonawstwem muzyki symfonicznej. Współpracowała m.in.
        z orkiestrą NFM Filharmonii Wrocławskiej i Filharmonii Dolnośląskiej w Jeleniej Górze. Swoje umiejętności
        doskonaliła podczas mistrzowskich kursów dyrygenckich, prowadzonych przez wybitne osobowości świata dyrygenckiego:
        Gabriela Chmurę, sir Colina Mettersa, Pawła Przytockiego, Jacka Delektę, Stanisława Krawczyńskiego,
        Kerrego Strattona i Marka Pijarowskiego. W dorobku dyrygentki znajduje się dokonanie dwóch prawykonań
        dzieł autorstwa Agnieszki Rucieckiej - Nature 12-9-7-8-20-8-15-21-19-5 na orkiestrę smyczkową i kieliszki oraz ziMnICA na smyczki, instrumenty dęte i wibrafon.
        </p>
      </MyProse>
    </MyPage>
  )
}
