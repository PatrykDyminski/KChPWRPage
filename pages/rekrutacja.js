import MyPage from '@components/MyPage'

const title = "Rekrutacja"

export default function Rekrutacja() {
  return (
    <MyPage pageTitle={title}>
      <div className="hidden md:flex flex-col text-center items-center my-8">
        <iframe src="https://docs.google.com/forms/d/e/1FAIpQLSf9riNv0KfmkczBhW-CQ8wQ_g2qvWL3jnRgFG0HBjEU5w1hkg/viewform?embedded=true" width="700" height="1450">Ładuję…</iframe>
      </div>

      <div className="md:hidden flex flex-col text-center items-center my-8">
        <iframe src="https://docs.google.com/forms/d/e/1FAIpQLSf9riNv0KfmkczBhW-CQ8wQ_g2qvWL3jnRgFG0HBjEU5w1hkg/viewform?embedded=true" width="400" height="1600">Ładuję…</iframe>
      </div>
    </MyPage>
  )
}
