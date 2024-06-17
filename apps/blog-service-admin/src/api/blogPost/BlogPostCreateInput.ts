import { CommentCreateNestedManyWithoutBlogPostsInput } from "./CommentCreateNestedManyWithoutBlogPostsInput";

export type BlogPostCreateInput = {
  author?: string | null;
  authorField?: string | null;
  comments?: CommentCreateNestedManyWithoutBlogPostsInput;
  content?: string | null;
  contentField?: string | null;
  title?: string | null;
  titleField?: string | null;
};
