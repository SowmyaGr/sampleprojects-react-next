import { posts } from "../../data/posts";

export default function BlogPage() {
  return (
    <main className="container">
      <h1>Blog Posts</h1>

      <ul>
        {posts.map((post) => (
          <li key={post.slug}>
            <a href={`/blog/${post.slug}`}>{post.title}</a>
          </li>
        ))}
      </ul>
    </main>
  );
}
