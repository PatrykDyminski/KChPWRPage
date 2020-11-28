import MyPage from '@components/MyPage'
import PostsGrid from '@components/PostsGrid'

import Link from 'next/link'

import { getAllPosts, sortPostsByDate } from '../../lib/api'

const title = "Blog"

export default function BlogPage({ posts, page, more }) {

  const pageNum = parseInt(page)
  const link = "/blog/" + (pageNum+1).toString()

  return (
    <MyPage pageTitle={title}>
      <div className="my-8">
        <h2 className="mb-12 text-3xl md:text-6xl font-bold tracking-tighter leading-tight">
          Strona {page}
        </h2>
        <PostsGrid posts={posts} />
      </div>
      {more && <div className="flex flex-col text-center md:items-center my-8">
        <Link href={link}><a className="p-2 border-2 border-black tracking-wider hover:text-gray-500">Więcej Wpisów</a></Link>
      </div>}
    </MyPage>
  )
}

const numberOfPosts = 8

export async function getStaticProps({ params }) {

  const pageNum = parseInt(params.page)
  let posts = getAllPosts([
    'title',
    'date',
    'slug',
    'author',
    'image',
    'content'
  ])

  posts = sortPostsByDate(posts)

  const start = (pageNum - 1) * numberOfPosts
  let end = start + numberOfPosts

  if(posts.length < end){
    end = posts.length
  }

  const isMore = posts.length >= pageNum * numberOfPosts

  return {
    props: {
      posts: posts.slice(start, end),
      page: params.page,
      more: isMore
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