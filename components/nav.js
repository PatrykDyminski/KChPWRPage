import Link from 'next/link'

const localPages = [
  {href: '/', label: 'Dom'},
  {href: '/onas', label: 'O Nas'},
  {href: '/sklad', label: 'Skład'},
  {href: '/repertuar', label: 'Repertuar'},
  {href: '/historia', label: 'Historia'},
]

export default function Nav() {
  return (
    <div> 
      <header className="flex font-roboto text-5xl justify-center mt-8">
        <h1>Kameralny Chór Politechniki Wrocławskiej</h1>
      </header>
      <nav>
        <ul className="flex justify-center items-center p-8">
            {localPages.map(({href, label}) => (
              <li key={`${href}${label}`}>
                <Link href={href}>
                  <a className="btn-blue no-underline p-2 m-2">{label}</a>
                </Link>
              </li>
            ))}
        </ul>
      </nav>
    </div>
  )
}
