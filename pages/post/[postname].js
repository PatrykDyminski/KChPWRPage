import matter from 'gray-matter'

import MyPage from '@components/MyPage'
import PostBody from '@components/PostBody'
import PostHeader from '@components/PostHeader'

export default function BlogPost({ data, markdown }) {
  if (!data) return <></>

  return (
    <>
      <MyPage pageTitle={data.title}>
          <PostHeader data={data} />
          <PostBody content={markdown} />   
      </MyPage>
    </>
  )
}

export async function getStaticProps({ params }) {
  const postname  = params.postname

  const content = await import(`../../posts/${postname}.md`)
  const data = matter(content.default)

  return {
    props: {
      data: data.data,
      markdown: data.content,
    },
  }
}

export async function getStaticPaths() {
  
  const blogSlugs = getSlugs(require.context('../../posts', true, /\.md$/))

  const paths = blogSlugs.map((slug) => `/post/${slug}`)

  return {
    paths,
    fallback: false
  }
}
  
const getSlugs = (context) => {
    
  const keys = context.keys()

    const data = keys.map((key) => {
      let slug = key.replace(/^.*[\\\/]/, '').slice(0, -3)
  
      return slug
    })

  return data
}