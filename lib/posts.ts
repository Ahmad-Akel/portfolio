import fs from "node:fs";
import path from "node:path";
import type { ComponentType } from "react";
import type { PostMeta } from "@/content/types";

const POSTS_DIR = path.join(process.cwd(), "content/posts");

export type Post = PostMeta & { slug: string };

export function getPostSlugs(): string[] {
  return fs
    .readdirSync(POSTS_DIR)
    .filter((file) => file.endsWith(".mdx"))
    .map((file) => file.replace(/\.mdx$/, ""));
}

async function loadPost(slug: string) {
  const mod = (await import(`@/content/posts/${slug}.mdx`)) as {
    default: ComponentType;
    metadata: PostMeta;
  };
  return mod;
}

export async function getPost(slug: string) {
  if (!getPostSlugs().includes(slug)) return null;
  const { default: Content, metadata } = await loadPost(slug);
  return { slug, ...metadata, Content };
}

/** All posts, newest first. */
export async function getPosts(): Promise<Post[]> {
  const posts = await Promise.all(
    getPostSlugs().map(async (slug) => ({ slug, ...(await loadPost(slug)).metadata })),
  );
  return posts.sort((a, b) => b.date.localeCompare(a.date));
}

export function formatPostDate(post: PostMeta): string {
  if (post.draft) return "Draft";
  return new Date(post.date).toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
    timeZone: "UTC",
  });
}
