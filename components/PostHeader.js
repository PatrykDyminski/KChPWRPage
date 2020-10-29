export default function PostHeader({ image, author, title, date}) {
    return (
        <div className="flex flex-col text-center items-center">
        <h1 className="text-2xl sm:text-3xl xl:text-5xl md:leading-smug tracking-wide font-extrabold uppercase my-8 md:my-16">{title}</h1>
        {image && (
              <div className="">
          <img
            src={image}
            className="xl:mt-0 rounded-sm border-1 border-black"
            alt={title}
          />
              </div> 
        )}
        <div className="text-xl md:leading-smug tracking-wide uppercase">
        <h3 className="mt-4">{date}</h3>
        <h3>{author}</h3>
        </div>
        </div>
    )
  }