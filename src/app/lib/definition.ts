export type Post = {
  id: string;
  author: string;
  title: string;
  content: string;
  date: string;
  email: string;
};

export type User = {
  id: string | undefined | null;
  name: string | undefined | null;
  email: string | undefined | null;
  image: string | undefined | null;
};
