import PostOverview from '@components/PostOverview'

export default function PostsGrid({ posts }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8 justify-items-center">
      {posts.map((post) => (
        <PostOverview
          title={post.title}
          image={post.image}
          date={post.date}
          author={post.author}
          slug={post.slug}
        />
      ))}
    </div>
  )
}