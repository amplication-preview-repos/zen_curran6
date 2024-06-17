import { SortOrder } from "../../util/SortOrder";

export type CommentOrderByInput = {
  author?: SortOrder;
  authorField?: SortOrder;
  authorFieldComment?: SortOrder;
  blogPostId?: SortOrder;
  blogPostRef?: SortOrder;
  content?: SortOrder;
  contentField?: SortOrder;
  contentFieldComment?: SortOrder;
  createdAt?: SortOrder;
  id?: SortOrder;
  updatedAt?: SortOrder;
};
