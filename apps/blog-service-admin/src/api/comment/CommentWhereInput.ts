import { StringNullableFilter } from "../../util/StringNullableFilter";
import { BlogPostWhereUniqueInput } from "../blogPost/BlogPostWhereUniqueInput";
import { StringFilter } from "../../util/StringFilter";

export type CommentWhereInput = {
  author?: StringNullableFilter;
  authorField?: StringNullableFilter;
  authorFieldComment?: StringNullableFilter;
  blogPost?: BlogPostWhereUniqueInput;
  blogPostRef?: StringNullableFilter;
  content?: StringNullableFilter;
  contentField?: StringNullableFilter;
  contentFieldComment?: StringNullableFilter;
  id?: StringFilter;
};
