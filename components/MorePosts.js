import PostsGrid from '@components/PostsGrid'

export default function MoreStories({ posts }) {
  return (
    <section>
      <h2 className="mb-12 text-6xl md:text-7xl font-bold tracking-tighter leading-tight">
        Inne Historie
      </h2>
      <PostsGrid posts={posts}/>
    </section>
  )
}