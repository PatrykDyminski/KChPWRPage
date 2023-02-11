import MyPage from '@components/MyPage'
import MorePosts from '@components/MorePosts'
import PostsGrid from '@components/PostsGrid'

import Link from 'next/link'

import { getAllPosts, sortPostsByDate } from '../../lib/api'

const title = "Blog"

export default function Blog({ allPosts }) {
  const heroPost = allPosts[0]
  const heroPost2 = allPosts[1]
  const morePosts = allPosts.slice(2,8)

  return (
    <MyPage pageTitle={title}>
      <div className="my-8">
        <h2 className="mb-12 text-3xl md:text-6xl font-bold tracking-tighter leading-tight">
          Najnowsze wpisy
        </h2>
        <PostsGrid posts={[heroPost, heroPost2]} />
      </div>
      {morePosts.length > 0 && <MorePosts posts={morePosts} />}
      {allPosts.length > 8 && <div className="flex flex-col text-center md:items-center my-8">
        <Link
          href="/blog/2"
          className="p-2 border-2 border-black tracking-wider hover:text-gray-500">Więcej Wpisów</Link>
      </div>}
    </MyPage>
  );
}

export async function getStaticProps() {
  let allPosts = getAllPosts([
    'title',
    'date',
    'slug',
    'author',
    'image'
  ])

  allPosts = sortPostsByDate(allPosts)

  return {
    props: { allPosts },
  }
}
