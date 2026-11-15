import Link from "next/link";
import { Hero } from "@/components/Hero";
import { Projects } from "@/components/Projects";
import { Experience } from "@/components/Experience";
import { BlogList } from "@/components/BlogList";
import { SectionHeading } from "@/components/SectionHeading";
import { getPosts } from "@/lib/posts";

export default async function Home() {
  const posts = (await getPosts()).slice(0, 3);

  return (
    <main>
      <Hero />
      <Projects />
      <Experience />
      <section id="blog" className="scroll-mt-4 border-t border-line py-16">
        <div className="mb-6 flex flex-wrap items-end justify-between gap-4">
          <SectionHeading label="Blog" title="Latest writing" />
          <Link href="/blog" className="text-sm text-muted">
            All posts →
          </Link>
        </div>
        <BlogList posts={posts} />
      </section>
    </main>
  );
}
