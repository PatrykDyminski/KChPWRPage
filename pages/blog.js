import MyPage from '@components/MyPage'
import MorePosts from '@components/MorePosts'
import PostOverview from '@components/PostOverview'

import { getAllPosts } from '../lib/api'

const title = "Blog"

export default function Blog({ allPosts }) {
  const heroPost = allPosts[0]
  const morePosts = allPosts.slice(1)

  
  return (
    <MyPage pageTitle={title}>
      <div className="my-8 md:my-16">
      <PostOverview
        title={heroPost.title}
        image={heroPost.image}
        date={heroPost.date}
        author={heroPost.author}
        slug={heroPost.slug}
      />
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
