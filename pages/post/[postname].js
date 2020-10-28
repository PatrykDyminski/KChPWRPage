import matter from 'gray-matter'

import MyPage from '@components/MyPage'
import PostBody from '@components/PostBody'

export default function BlogPost({ frontmatter, markdownBody }) {
  if (!frontmatter) return <></>

  return (
    <>
      <MyPage pageTitle="eee">
        <article>
          <h1>{frontmatter.title}</h1>
          {frontmatter.hero_image && (
            <img
              src={frontmatter.hero_image}
              className="hero"
              alt={frontmatter.title}
            />
          )}
          <PostBody content={markdownBody} />
            
        </article>
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
      frontmatter: data.data,
      markdownBody: data.content,
    },
  }
}

export async function getStaticPaths() {
  const blogSlugs = ((context) => {
    return getSlugs(context)
  })(require.context('../../posts', true, /\.md$/))

  const paths = blogSlugs.map((slug) => `/post/${slug}`)

  return {
    paths, // An array of path names, and any params
    fallback: false, // so that 404s properly appear if something's not matching
  }
}

const getPosts = (context) => {
  const keys = context.keys()
  const values = keys.map(context)

  const data = keys.map((key, index) => {
    let slug = key.replace(/^.*[\\\/]/, '').slice(0, -3)
    const value = values[index]
    const document = matter(value.default)
    return {
      frontmatter: document.data,
      markdownBody: document.content,
      slug,
    }
  })
  return data
}

  
const getSlugs = (context) => {
    const keys = context.keys()
  
    const data = keys.map((key, index) => {
      let slug = key.replace(/^.*[\\\/]/, '').slice(0, -3)
  
      return slug
    })
    return data
}
