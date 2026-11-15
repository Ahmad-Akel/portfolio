import Link from "next/link";
import { formatPostDate, type Post } from "@/lib/posts";

export function BlogList({ posts }: { posts: Post[] }) {
  if (posts.length === 0) {
    return <p className="border-t border-line-soft py-5 text-[15px] text-subtle">No posts yet.</p>;
  }
  return (
    <div>
      {posts.map((post) => (
        <Link
          key={post.slug}
          href={`/blog/${post.slug}`}
          className="flex flex-wrap items-baseline justify-between gap-5 border-t border-line-soft py-5"
        >
          <span className="flex-[1_1_400px] text-[17px] font-medium text-fg">{post.title}</span>
          <span className="text-[13px] text-subtle">
            {post.tag} · {formatPostDate(post)}
          </span>
        </Link>
      ))}
    </div>
  );
}
