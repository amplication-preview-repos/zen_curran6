import { Comment } from "../comment/Comment";

export type BlogPost = {
  author: string | null;
  authorField: string | null;
  comments?: Array<Comment>;
  content: string | null;
  contentField: string | null;
  createdAt: Date;
  id: string;
  title: string | null;
  titleField: string | null;
  updatedAt: Date;
};
