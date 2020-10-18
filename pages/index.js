import Nav from '../components/Nav'

export default function IndexPage() {
  return (
    <div>
      <Nav />
      <img src="/zdj1.jpg" className="rounded-sm border-1 border-black mt-5"></img>
      <div className="mt-10 flex flex-row place-content-center">
      <article className="prose lg:prose-xl pb-16">
        <h2 className="text-center">Jesteśmy chórem działającym na Politechnice Wrocławskiej</h2>
        <p>Naszą pasją jest śpiew. Wśród nas są studenci, pracownicy oraz osoby całkowicie niezwiązane z uczelnią.</p>
        <p>Łączy nas jedno: Pasja i miłość do śpiewania. W trakcie prób doskonalimy swoje umiejętności oraz przygotowujemy repertuar koncertowy. 
          Często występujemy, nie tylko we Wrocławiu. Angażujemy się w wiele inicjatyw często charytatywnych.
        </p>        
      </article>
      </div>
    </div>
  )
}
