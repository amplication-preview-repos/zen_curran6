import { BlogPostWhereUniqueInput } from "../blogPost/BlogPostWhereUniqueInput";

export type CommentCreateInput = {
  author?: string | null;
  authorField?: string | null;
  authorFieldComment?: string | null;
  blogPost?: BlogPostWhereUniqueInput | null;
  blogPostRef?: string | null;
  content?: string | null;
  contentField?: string | null;
  contentFieldComment?: string | null;
};
