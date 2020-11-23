import MyPage from '@components/MyPage'
import MorePosts from '@components/MorePosts'
import PostsGrid from '@components/PostsGrid'

import { getAllPosts } from '../lib/api'

const title = "Blog"

export default function Blog({ allPosts }) {
  const heroPost = allPosts[0]
  const heroPost2 = allPosts[1]
  const morePosts = allPosts.slice(2)

  return (
    <MyPage pageTitle={title}>
      <div className="my-8">
        <h2 className="mb-12 text-3xl md:text-6xl font-bold tracking-tighter leading-tight">
          Najnowsze wpisy
        </h2>
        <PostsGrid posts={[heroPost, heroPost2]} />
      </div>
      {morePosts.length > 0 && <MorePosts posts={morePosts} />}
    </MyPage>
  )
}

export async function getStaticProps() {
  const allPosts = getAllPosts([
    'title',
    'date',
    'slug',
    'author',
    'image'
  ])

  return {
    props: { allPosts },
  }
}
