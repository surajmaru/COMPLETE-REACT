export default function blogPostPage({ params }) {
  return (
    <main>
      <h1>Blog post</h1>
      <p>{params.slug}</p>
    </main>
  );
}
