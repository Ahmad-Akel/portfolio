import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Suspense } from "react";
import { formatPostDate, getPost, getPostSlugs } from "@/lib/posts";

type Params = PageProps<"/blog/[slug]">["params"];

export function generateStaticParams() {
  return getPostSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: PageProps<"/blog/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const post = await getPost(slug);
  if (!post) return {};
  return { title: post.title, description: post.summary };
}

/**
 * The shell (back link + layout) doesn't depend on the slug, so it renders instantly on
 * navigation. Everything that reads `params` streams inside <Suspense>. Known posts are
 * prerendered via generateStaticParams, so on a page load the fallback never shows.
 */
export default function PostPage({ params }: PageProps<"/blog/[slug]">) {
  return (
    <main className="pt-24 pb-16">
      <article className="mx-auto max-w-[720px]">
        <Link href="/blog" className="font-mono text-[12px] font-medium text-accent">
          ← Blog
        </Link>
        <Suspense fallback={<PostSkeleton />}>
          <PostBody params={params} />
        </Suspense>
      </article>
    </main>
  );
}

async function PostBody({ params }: { params: Params }) {
  const { slug } = await params;
  const post = await getPost(slug);
  if (!post) notFound();
  const { Content } = post;

  return (
    <>
      <h1 className="mt-4 mb-0 text-[clamp(32px,5vw,48px)] leading-[1.1] font-semibold tracking-[-0.03em]">
        {post.title}
      </h1>
      <div className="mt-4 text-[13px] text-subtle">
        {post.tag} · {formatPostDate(post)}
      </div>
      <div className="mt-10 border-t border-line pt-10">
        <Content />
      </div>
    </>
  );
}

function PostSkeleton() {
  return (
    <div aria-hidden="true" className="animate-pulse">
      <div className="mt-5 h-10 w-4/5 rounded-lg bg-surface" />
      <div className="mt-5 h-4 w-40 rounded bg-surface" />
      <div className="mt-10 flex flex-col gap-3 border-t border-line pt-10">
        <div className="h-4 rounded bg-surface" />
        <div className="h-4 w-11/12 rounded bg-surface" />
        <div className="h-4 w-3/4 rounded bg-surface" />
      </div>
    </div>
  );
}
