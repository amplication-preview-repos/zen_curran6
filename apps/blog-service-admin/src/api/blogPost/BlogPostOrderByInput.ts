import { SortOrder } from "../../util/SortOrder";

export type BlogPostOrderByInput = {
  author?: SortOrder;
  authorField?: SortOrder;
  content?: SortOrder;
  contentField?: SortOrder;
  createdAt?: SortOrder;
  id?: SortOrder;
  title?: SortOrder;
  titleField?: SortOrder;
  updatedAt?: SortOrder;
};
