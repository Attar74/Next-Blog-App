import { sql } from '@vercel/postgres';
import { NextResponse } from 'next/server';
import { auth } from '../../../../auth-config';
export async function GET() {
  try {
    const posts = await sql`SELECT * FROM posts ORDER BY date DESC LIMIT 2;`;
    return NextResponse.json({ posts }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error }, { status: 500 });
  }
}

export async function POST(request: Request) {
  const { searchParams } = new URL(request.url);

  const id = searchParams.get('id');
  const title = searchParams.get('title');
  const content = searchParams.get('content');
  const date = searchParams.get('date');
  const author = searchParams.get('author');

  const session = await auth();
  if (!session?.user) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  try {
    // SQL query to insert a new post
    await sql`INSERT INTO posts (id, author, title, content, date) VALUES (${id}, ${author}, ${title}, ${content}, ${date});`;
    return NextResponse.json(
      { message: 'Post successfully inserted' },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json({ error }, { status: 500 });
  }
}

export async function DELETE(request: Request) {
  const { searchParams } = new URL(request.url);
  const id = searchParams.get('id');

  const session = await auth();
  if (!session?.user) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  if (!id) {
    return NextResponse.json({ error: 'Post ID is required' }, { status: 400 });
  }

  try {
    // SQL query to delete a post by ID
    const result = await sql`DELETE FROM posts WHERE id = ${id};`;

    if (result.rowCount === 0) {
      return NextResponse.json({ error: 'Post not found' }, { status: 404 });
    }

    return NextResponse.json(
      { message: 'Post successfully deleted' },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json({ error }, { status: 500 });
  }
}
