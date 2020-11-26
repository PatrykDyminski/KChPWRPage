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
    <div className="max-w-4xl rounded overflow-hidden shadow-lg my-2 cursor-pointer">
      <Link as={`/post/${slug}`} href="/post/[slug]">
        <div>
          <Image alt={title} src={image} width={400} height={200} />
          <div class="px-6 py-4">
            <h3 className="font-bold text-xl mb-2 hover:underline">{title}</h3>
            <p className="text-grey-darker text-base">{date}</p>
            <p className="text-grey-darker text-base font-bold">{author}</p>
          </div>
        </div>
      </Link>
    </div>
  )
}