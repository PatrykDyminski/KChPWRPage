export default function MyProse({children}){
    return (
    <div className="space-y-10 sm:space-y-12 lg:space-y-20 xl:space-y-24">
        <article className="prose prose-sm sm:prose lg:prose-lg xl:prose-2xl mx-auto pb-16">
            {children}
        </article>
      </div>
    )
  }