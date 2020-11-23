import PostOverview from '@components/PostOverview'

export default function PostsGrid({ posts }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-4 mb-8 justify-items-center place-content-around">
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