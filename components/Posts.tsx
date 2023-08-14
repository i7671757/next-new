import Link from "next/link";

type Post = {
  id: number;
  title: string;
  // Добавьте другие свойства вашей записи (поста) сюда
};

type Props = {
  posts: Post[];
};
const Posts = ({ posts }: Props) => {
  return (
    <ul>
      {posts.map((post: any) => (
        <li key={post.id} className="underline decoration-dotted">
          <Link href={`/blog/${post.id}`}>{post.title}</Link>
        </li>
      ))}
    </ul>
  );
};

export { Posts };
