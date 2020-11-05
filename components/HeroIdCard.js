import Image from 'next/image'
import Link from 'next/link'

export default function HeroIdCard({name, link, imgSource, text}){
    return(
        <div className="pb-4 grid grid-cols-1 md:grid-cols-2 justify-items-center my-8">
          <Image src={imgSource} width={300} height={300} className="rounded-full transform" alt={`Zdjęcie - ${name}`}></Image>
          <div className="py-5">
            <h2 className="text-lg font-bold leading-relaxed">{name}</h2>
            <p className="my-2 mb-5">{text}</p>
            <Link href={link}><a className="p-2 border-2 border-black tracking-wider hover:text-gray-500">Więcej informacji</a></Link>
          </div>
        </div>
    )
}