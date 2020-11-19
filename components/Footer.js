import Link from 'next/link'

export default function Footer() {
    return (
      <footer className="border-t border-accent-2 bg-gray-500">
        <div className="container mx-auto px-5">
          <div className="py-28 flex flex-col lg:flex-row items-center">
            <div className="text-md lg:text-lg font-bold tracking-tighter leading-tight text-center lg:text-left mb-10 lg:mb-0 lg:pr-4 lg:w-1/2">
              <Link href="https://www.facebook.com/KameralnyChorPWr" passHref={true}>
                <h3 className="cursor-pointer hover:text-blue-600">https://www.facebook.com/KameralnyChorPWr</h3>
              </Link>
              <h3>kameralny@pwr.edu.pl</h3>
            </div>
            <h3 className="text-2xl lg:text-5xl font-bold tracking-tighter leading-tight text-center mb-10 lg:mb-0 lg:pr-4 lg:w-1/2">
              #KCHPWR
            </h3>
            <div className="text-md lg:text-lg font-bold tracking-tighter leading-tight text-center lg:text-left mb-10 lg:mb-0 lg:pr-4 lg:w-1/2">
              <h3>Studenckie Centrum Kultury Muzycznej</h3>
              <h3>ul. Powstańców Śląskich 137a</h3>
            </div>
          </div>
        </div>
      </footer>
    )
}