import type { Metadata } from "next";
import { BlogList } from "@/components/BlogList";
import { SectionHeading } from "@/components/SectionHeading";
import { getPosts } from "@/lib/posts";

export const metadata: Metadata = {
  title: "Blog",
  description: "Writing on frontend engineering, startups and DevOps.",
};

export default async function BlogPage() {
  const posts = await getPosts();

  return (
    <main className="pt-24 pb-16">
      <div className="mb-6">
        <SectionHeading label="Blog" title="All writing" />
      </div>
      <BlogList posts={posts} />
    </main>
  );
}
