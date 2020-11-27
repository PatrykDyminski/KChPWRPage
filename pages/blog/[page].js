import MyPage from '@components/MyPage'
import PostsGrid from '@components/PostsGrid'

import { getAllPosts } from '../../lib/api'

const title = "Blog"

export default function BlogPage({ posts, page }) {
  return (
    <MyPage pageTitle={title}>
      <div className="my-8">
        <h2 className="mb-12 text-3xl md:text-6xl font-bold tracking-tighter leading-tight">
          Strona {page}
        </h2>
        <PostsGrid posts={posts} />
      </div>
    </MyPage>
  )
}

const numberOfPosts = 8

export async function getStaticProps({ params }) {

  const pageNum = parseInt(params.page)
  const posts = getAllPosts([
    'title',
    'date',
    'slug',
    'author',
    'image',
    'content'
  ])

  const start = (pageNum - 1) * numberOfPosts
  let end = start + numberOfPosts

  if(posts.length < end){
    end = posts.length
  }

  posts.slice(start, end)

  return {
    props: {
      posts: posts.slice(start, end),
      page: params.page,
      last: false
    }
  }
}

export async function getStaticPaths() {

  const posts = getAllPosts(['slug'])
  let pages = [];

  for (var i=0; i<posts.length; i+=numberOfPosts) {
    let page = i / numberOfPosts + 1
    pages.push(page.toString());
  }

  const paths = pages.map((page) => {
    return {
      params: {
        page: page,
      },
    }
  })

  return {
    paths: paths,
    fallback: false,
  }
}