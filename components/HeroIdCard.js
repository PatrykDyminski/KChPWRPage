import Link from 'next/link'
import Image from 'next/image'

export default function HeroIdCard({ name, link, imgSource, text }) {
  return (
    <div className="pb-4 grid grid-cols-1 md:grid-cols-2 mt-4 lg:my-8">
      <div className="flex flex-col items-center">
        <Image src={imgSource} width={350} height={350} className="rounded-full" alt={`Zdjęcie - ${name}`} />
      </div>
      <div className="pt-5 px-5 md:pt-0">
        <h2 className="text-md lg:text-lg font-bold leading-relaxed">{name}</h2>
        <p className="my-2 mb-5">{text}</p>
        <div className="flex flex-col text-center md:items-end my-8">
          <Link href={link}><a className="p-2 border-2 border-black tracking-wider hover:text-gray-500">Więcej informacji</a></Link>
        </div>
      </div>
    </div>
  )
}