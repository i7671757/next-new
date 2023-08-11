import { Metadata } from "next";
import Link from "next/link";

async function getData() {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts", {
    next: {
      revalidate: 60,
    },
  });
  if (!response.ok) throw new Error("Unable to fetch posts!");

  return response.json();
}

export const metadata: Metadata = {
  title: "Blog | Next App",
};

export default async function Blog() {
  const posts = await getData();

  return (
    <>
      <h1 className="text-emerald-950 font-mono text-4xl text-center">
        Blog pages
      </h1>
      <ul>
        {posts.map((post: any) => (
          <li key={post.id} className="underline decoration-dotted">
            <Link href={`/blog/${post.id}`}>{post.title}</Link>
          </li>
        ))}
      </ul>
    </>
  );
}
