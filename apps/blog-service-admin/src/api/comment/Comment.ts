import { BlogPost } from "../blogPost/BlogPost";

export type Comment = {
  author: string | null;
  authorField: string | null;
  authorFieldComment: string | null;
  blogPost?: BlogPost | null;
  blogPostRef: string | null;
  content: string | null;
  contentField: string | null;
  contentFieldComment: string | null;
  createdAt: Date;
  id: string;
  updatedAt: Date;
};
