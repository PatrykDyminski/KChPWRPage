import Link from 'next/link'
import Image from 'next/image'



export default function PostOverview({
  title,
  image,
  date,
  author,
  slug,
}) {
  return (
    <div className="mb-8 md:mb-16">
      <div className="mb-5">
        <Link as={`/post/${slug}`} href="/post/[slug]">
            <a aria-label={title}>
                <Image alt={title} src={image} width={300} height={150} className="shadow-md hover:shadow-2xl"/>
            </a>
        </Link>
      </div>
      <h3 className="text-3xl mb-2 leading-snug">
        <Link as={`/post/${slug}`} href="/post/[slug]">
          <a className="hover:underline">{title}</a>
        </Link>
      </h3>
      <div className="text-lg">
      <p className="">
        {date}
      </p>
      <p className="font-bold">{author}</p>
      </div>
    </div>
  )
}