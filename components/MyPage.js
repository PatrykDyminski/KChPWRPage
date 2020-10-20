export default function MyPage({children}){
  return (
    <div className="px-4 py-10 max-w-3xl mx-auto sm:px-6 sm:py-12 lg:max-w-4xl lg:py-16 lg:px-8 xl:max-w-6xl">
      {children}
    </div>
  )
}