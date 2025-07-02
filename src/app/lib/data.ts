import { createClient, sql } from '@vercel/postgres';
import { unstable_noStore as noStore } from 'next/cache';
import { Post } from './definition';
export async function ConnectToDB() {
  const client = await createClient();
  client.connect();

  try {
    if (!client) {
      throw new Error('Client not found');
    }
    return client;
  } catch (error) {
    console.error('Error connecting to Vercel Postgres:', error);
    throw error;
  }
}

export async function getPosts() {
  noStore();
  try {
    const posts = await sql`SELECT * FROM posts`;
    console.log(posts.rows);
    return posts.rows;
  } catch (error) {
    console.error('Error fetching posts:', error);
    throw error;
  }
}

export async function getPostsByUser(session: any) {
  noStore();
  try {
    const posts =
      await sql`SELECT * FROM posts WHERE author = ${session?.user?.name}`;
    console.log(posts.rows);
    return posts.rows;
  } catch (error) {
    console.error('Error fetching posts:', error);
    throw error;
  }
}

export async function insertPost(post: Post) {
  try {
    await sql`INSERT INTO posts (id, author, title, content, date) VALUES (${post.id}, ${post.author}, ${post.title}, ${post.content}, ${post.date})`;
    return { success: true, message: 'Post inserted successfully' };
  } catch (error) {
    console.error('Error inserting post:', error);
    throw error;
  }
}
