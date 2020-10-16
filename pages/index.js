import Nav from '../components/nav'

export default function IndexPage() {
  return (
    <div>
      <Nav />
      <div className="py-10 text-xl text-accent-1 text-center mb-3">
        <h1>Jesteśmy chórem działającym w obrębie Politechniki Wrocławskiej</h1>
        <p>Naszą pasją jest śpiew. Wśród nas są studenci, pracownicy oraz osoby całkowicie niezwiązane z uczelnią.</p>
        <p>Łączy nas jedno: Pasja i miłość do śpiewania. W trakcie prób doskonalimy swoje umiejętności oraz przygotowujemy repertuar koncertowy.
            Często występujemy, nie tylko we Wrocławiu. Angażujemy się w wiele inicjatyw często charytatywnych.
        </p>        
      </div>
    </div>
  )
}
