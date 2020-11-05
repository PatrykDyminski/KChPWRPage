import MyPage from '@components/MyPage'
import MyProse from '@components/MyProse'

const title = "Historia"

export default function Historia() {
  return (
    <MyPage pageTitle={title}>
      <div className="mt-8">
      <MyProse>
        <h2>Historia Chóru</h2>
        <p>
          Kameralny Chór Politechniki Wrocławskiej powstał z miłości – miłości do śpiewania! Nasza historia sięga 2015 roku, gdy to byli chórzyści politechnicznej Consonanzy (w tym nasza dyrygentka), podjęli decyzję o założeniu nowego zespołu. Początkowo chór liczył 14 osób i co ciekawe – w naszych szeregach znajdowała się tylko jedna studentka i dwóch pracowników Politechniki Wrocławskiej. Dziś sytuacja wygląda zupełnie inaczej! Jest nas 39 osób, 23 to studenci, 5 absolwentów i 1 pracownik Politechniki. Oczywiście pozostali chórzyści to wielcy sympatycy naszej uczelni!
	      </p>
        <p>
          Choć nasz skład rozrastał się stopniowo, to już pierwszym koncertem w naszym wykonaniu był udział w biletowanym wydarzeniu Opery Wrocławskiej ,,Zarzuela Show” 7 grudnia 2015, na deskach tej wrocławskiej świątyni muzycznej. Było to swoiste preludium do wielkiego przedsięwzięcia w ramach programu ,, Wrocław Europejską Stolica Kultury 2016”. 18 czerwca 2016 wzięliśmy udział w wyjątkowym spektaklu ,,Carmen – Zarzuela Show” na Wrocławskim Stadionie Miejskim. Kilkuset wykonawców na estradzie, kilkadziesiąt tysięcy widzów na publiczności, próby do 3 nad ranem... to było wspaniałe przeżycie!
          Wśród naszych najciekawszych, przedsięwzięć (a było ich przez te 5 lat prawie 100!!!) znajdziecie wykonania muzyki wokalno-instrumentalnej, a'cappella, wykonania muzyki w spektaklu teatralnym na żywo (w ramach 40. Przeglądu Piosenki Aktorskiej), prawykonania utworów, nagrywanie utworów, fulmów video, performance muzyczne na żywo, kilka ciekawych artystycznych współprac, wywiady w radiu, artykuły w prasie...ach, długo można wymieniać.
          Jeśli chcecie dokładnie poznać nasze dokonania, w tym te ostatnie covidowo-youtubowe, zapraszamy do śledzenia naszego konta na facebooku. A najlepiej przyjdźcie do nas na próbę, wszystko Wam opowiemy. Jest też szansa, że nie będziecie chcieli już opuścić naszych szeregów! Kiedyś pewna dziennikarka radiowa przyszła przeprowadzić z nami wywiad i już została!
        </p>
        <h3>Czekamy na WasKameralny Chór Politechniki Wrocławskiej</h3>
      </MyProse>
      </div>
    </MyPage>
  )
}
