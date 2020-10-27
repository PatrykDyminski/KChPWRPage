import MyPage from '@components/MyPage'

const title = "Historia"

export default function Historia() {
  return (
    <MyPage pageTitle={title}>
      <div className="py-20">
        <h1 className="text-5xl text-center text-accent-1">
          {title}
        </h1>
      </div>
    </MyPage>
  )
}
