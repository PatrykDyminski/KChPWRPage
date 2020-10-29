import MyPage from '@components/MyPage'
import PostBody from '@components/PostBody'
import PostHeader from '@components/PostHeader'

import { getPostBySlug, getAllPosts } from '../../lib/api'

export default function BlogPost({ data }) {
  if (!data) return <></>

  return (
    <>
      <MyPage pageTitle={data.title}>
          <PostHeader 
            image={data.image}
            author={data.author}
            title={data.title}
            date={data.date}
          />
          <PostBody content={data.content} />   
      </MyPage>
    </>
  )
}


export async function getStaticProps({ params }) {

  const post = getPostBySlug(params.slug, [
    'title',
    'date',
    'slug',
    'author',
    'image',
    'content'
  ])

  return {
    props: {
      data: post,
    },
  }

}

export async function getStaticPaths() {
  const posts = getAllPosts(['slug'])

  return {
    paths: posts.map((post) => {
      return {
        params: {
          slug: post.slug,
        },
      }
    }),
    fallback: false,
  }
}