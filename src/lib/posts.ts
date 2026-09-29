import { getCollection, type CollectionEntry } from 'astro:content';
export const postPath = (post: CollectionEntry<'posts'>) => post.data.path || `posts/${post.id}`;
export const postUrl = (post: CollectionEntry<'posts'>) => '/' + postPath(post).split('/').map(encodeURIComponent).join('/') + '/';
export async function publishedPosts(includeDrafts = import.meta.env.DEV) {
  const posts = (await getCollection('posts', ({data}) => includeDrafts || !data.draft)).sort((a,b) => b.data.date.valueOf() - a.data.date.valueOf());
  const paths = new Set<string>();
  for (const post of posts) {
    const path = postPath(post);
    if (path.startsWith('/') || path.endsWith('/') || path.split('/').some(p => !p || p === '.' || p === '..') || paths.has(path)) throw new Error(`Invalid or duplicate article path: ${path}`);
    paths.add(path);
  }
  return posts;
}
export const formatDate = (date: Date) => date.toISOString().slice(0,10).replaceAll('-', '.');
