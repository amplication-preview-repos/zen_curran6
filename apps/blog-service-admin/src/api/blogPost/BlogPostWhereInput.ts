import { StringNullableFilter } from "../../util/StringNullableFilter";
import { CommentListRelationFilter } from "../comment/CommentListRelationFilter";
import { StringFilter } from "../../util/StringFilter";

export type BlogPostWhereInput = {
  author?: StringNullableFilter;
  authorField?: StringNullableFilter;
  comments?: CommentListRelationFilter;
  content?: StringNullableFilter;
  contentField?: StringNullableFilter;
  id?: StringFilter;
  title?: StringNullableFilter;
  titleField?: StringNullableFilter;
};
