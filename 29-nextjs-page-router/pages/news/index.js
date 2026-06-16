import Link from "next/link";

function NewsPage() {
  return (
    <>
      <h1>The news page</h1>
      <ul>
        <li>
          <Link href="/news/nextjs-is-great">Next js is a great framework</Link>
        </li>
        <li>Next js</li>
      </ul>
    </>
  );
}

export default NewsPage;
