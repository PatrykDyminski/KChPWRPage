import Image from 'next/image'

export default function HeroIdCard({name, imgSource, text}){
    return(
        <div className="pb-4 grid grid-cols-1 md:grid-cols-2 justify-items-center my-8">
          <Image src={imgSource} width={300} height={300} className="rounded-full transform"></Image>
            <div className="py-5">
              <h2 className="text-lg font-bold leading-relaxed">{name}</h2>
              <p className="my-2">
                  {text}
              </p>
            </div>
        </div>
    )
}