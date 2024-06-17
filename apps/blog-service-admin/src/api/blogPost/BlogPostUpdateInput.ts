import { CommentUpdateManyWithoutBlogPostsInput } from "./CommentUpdateManyWithoutBlogPostsInput";

export type BlogPostUpdateInput = {
  author?: string | null;
  authorField?: string | null;
  comments?: CommentUpdateManyWithoutBlogPostsInput;
  content?: string | null;
  contentField?: string | null;
  title?: string | null;
  titleField?: string | null;
};
