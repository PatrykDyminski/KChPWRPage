import Image from "next/image";

export default function PostHeader({ image, author, title, date }) {
  return (
    <div className="flex flex-col text-center items-center">
      <h1 className="text-2xl sm:text-3xl xl:text-4xl md:leading-smug uppercase my-8 md:my-16">{title}</h1>
      {image && (
        <Image
          src={image}
          alt={title}
          width={840}
          height={472}
         />
      )}

      <div className="md:text-xl md:leading-smug tracking-wide uppercase mt-2 p-4">
        <h3>{date}</h3>
        <h3>{author}</h3>
      </div>
    </div>
  );
}