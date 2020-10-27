import Link from 'next/link'
import { useState } from "react";

const localPages = [
  {href: '/', label: 'Dom'},
  {href: '/onas', label: 'O Nas'},
  {href: '/sklad', label: 'Skład'},
  {href: '/repertuar', label: 'Repertuar'},
  {href: '/historia', label: 'Historia'},
  {href: '/blog', label: 'Blog'},
]

export default function Nav() {
  const [showMe, setShowMe] = useState(false);
  function toggle(){
    setShowMe(!showMe);
  }

  return (
    <div className="font-roboto"> 
      <header className="flex text-2xl md:text-4xl justify-center text-center mt-5 mb-5">
        <h1>Kameralny Chór Politechniki Wrocławskiej</h1>
      </header>
      <div className="p-4 cursor-pointer md:hidden" onClick={toggle}>
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
      </div>
      <nav>
        <div className="hidden md:block">
          <ul className="flex justify-evenly items-center pt-4 pb-4 border-4 border-black">
              {localPages.map(({href, label}) => (
                <li key={`${href}${label}`}>
                  <Link href={href}>
                    <a className="no-underline p-2 m-2 text-xl tracking-wider hover:text-gray-500">{label}</a>
                  </Link>
                </li>
              ))}
          </ul>
        </div>
        <div className="md:hidden">
          <ul className="pt-4 pb-4 text-center text-2xl border-4 border-black rounded-lg" style={{display: showMe?"block":"none"}}>
              {localPages.map(({href, label}) => (
                <li key={`${href}${label}`} className="m-2">
                  <Link href={href}>
                    <a className="no-underline p-2 tracking-wider hover:text-gray-500">{label}</a>
                  </Link>
                </li>
              ))}
          </ul>
        </div>
      </nav>
    </div>
  )
}
