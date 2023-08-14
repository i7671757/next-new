"use client";
import { PostSearch } from "@/components/PostSearch";
import { Posts } from "@/components/Posts";
import { Metadata } from "next";
import { useEffect, useState } from "react";

async function getData() {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts", {
    next: {
      revalidate: 60,
    },
  });
  // if (!response.ok) throw new Error("Unable to fetch posts!");

  return response.json();
}

const metadata: Metadata = {
  title: "Blog | Next App",
};

export default function Blog() {
  const [posts, setPosts] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getData()
      .then(setPosts)
      .finally(() => setLoading(false));
  }, []);

  return (
    <>
      <h1 className="text-emerald-950 font-mono text-4xl text-center">
        Blog pages
      </h1>
      <PostSearch onSearch={setPosts} />
      {loading ? <h3>Loading...</h3> : <Posts posts={posts} />}
    </>
  );
}
function getAllPosts() {
  throw new Error("Function not implemented.");
}
