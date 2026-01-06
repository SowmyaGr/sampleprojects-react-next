import { posts } from "../../../data/posts";

export default function BlogPost({ params }) {
  const post = posts.find((p) => p.slug === params.slug);

  if (!post) {
    return <h1>Post not found</h1>;
  }

  return (
    <main className="container">
      <h1>{post.title}</h1>
      <p>{post.content}</p>
    </main>
  );
}
