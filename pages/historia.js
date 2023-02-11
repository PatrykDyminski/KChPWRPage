import MyPage from '@components/MyPage'
import MyProse from '@components/MyProse'

import Image from "next/image";

const title = "Historia"

export default function Historia() {
  return (
    <MyPage pageTitle={title}>
      <div className="flex flex-col items-center my-8">
        <Image
          src="/zdj2.jpg"
          width={768}
          height={512}
          alt="koncert barburkowy 2018"
        />
      </div>
      <MyProse>
        <h2>Historia Chóru</h2>
        <p>Kameralny Chór Politechniki Wrocławskiej powstał z miłości do śpiewu. Nasza historia sięga 2015 roku, gdy byli chórzyści Politechnicznego zespołu Consonanza podjęli decyzję o założeniu nowego zespołu. Początkowo chór liczył 14 osób i co ciekawe – w naszych szeregach znajdowała się tylko jedna studentka i dwóch pracowników Politechniki Wrocławskiej. Dziś sytuacja wygląda zupełnie inaczej! Jest nas 39 osób, 23 to studenci, 5 absolwentów oraz 1 pracownik Politechniki. Oczywiście pozostali chórzyści to wielcy sympatycy naszej uczelni!
        </p>
        <p>Nasz skład rozrastał się stopniowo. Poraz pierwszy publicznie wystąpiliśmy podczas wydarzenia Opery Wrocławskiej ,,Zarzuela Show” 7 grudnia 2015. Było to swoiste preludium do wielkiego przedsięwzięcia w ramach programu ,,Wrocław Europejską Stolica Kultury 2016”. 18 czerwca 2016 wzięliśmy udział w wyjątkowym spektaklu ,,Carmen – Zarzuela Show” na Wrocławskim Stadionie Miejskim. Kilkuset wykonawców na estradzie, kilkadziesiąt tysięcy widzów, próby do 3 nad ranem... to było wspaniałe przeżycie!
        </p>
        <p>Wśród naszych najciekawszych, przedsięwzięć (a było ich przez te 5 lat prawie 100) znajdują się wykonania muzyki wokalno-instrumentalnej, a'cappella, wykonania muzyki w spektaklu teatralnym na żywo (w ramach 40. Przeglądu Piosenki Aktorskiej), prawykonania utworów, nagrania audio oraz video, performance muzyczne na żywo, kilka ciekawych artystycznych współprac, wywiady w radiu oraz prasie.Jeśli chcecie dokładnie poznać nasze dokonania, zapraszamy do śledzenia naszego konta na facebooku oraz informacji na naszym blogu. Zapraszamy również na próby. Istnieje szansa, że nie będziecie chcieli już opuścić naszych szeregów!
        </p>
        <h3>Czekamy na was!</h3>
      </MyProse>
    </MyPage>
  );
}
