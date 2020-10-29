export default function PostHeader({ data }) {
    return (
        <div className="flex flex-col text-center items-center">
        <h1 className="text-2xl sm:text-3xl xl:text-5xl md:leading-smug tracking-wide font-extrabold uppercase my-8 md:my-16">{data.title}</h1>
        {data.hero_image && (
              <div className="">
          <img
            src={data.hero_image}
            className="xl:mt-0 rounded-sm border-1 border-black"
            alt={data.title}
          />
              </div> 
        )}
        <div className="text-xl md:leading-smug tracking-wide uppercase">
        <h3 className="mt-4">{data.date}</h3>
        <h3>{data.author}</h3>
        </div>
        </div>
    )
  }