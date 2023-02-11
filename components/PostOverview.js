import Link from 'next/link'
import Image from "next/image";

export default function PostOverview({
  title,
  image,
  date,
  author,
  slug,
}) {
  return (
    <div key={slug} className="max-w-lg rounded overflow-hidden shadow-lg my-2 cursor-pointer">
      <Link as={`/post/${slug}`} href={`/post/${slug}`} legacyBehavior>
        <div>
          <Image
            alt={title}
            src={image}
            width={600}
            height={337}
          />
          <div className="px-6 py-4">
            <h3 className="text-xl mb-2 font-medium hover:underline">{title}</h3>
            <p className="text-grey-darker text-base">{date}</p>
            <p className="text-grey-darker text-base font-medium">{author}</p>
          </div>
        </div>
      </Link>
    </div>
  );
}