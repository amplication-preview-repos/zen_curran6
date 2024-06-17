import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  ReferenceInput,
  SelectInput,
} from "react-admin";
import { BlogPostTitle } from "../blogPost/BlogPostTitle";

export const CommentCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="author" source="author" />
        <TextInput label="AuthorField" source="authorField" />
        <TextInput label="AuthorFieldComment" source="authorFieldComment" />
        <ReferenceInput
          source="blogPost.id"
          reference="BlogPost"
          label="BlogPost"
        >
          <SelectInput optionText={BlogPostTitle} />
        </ReferenceInput>
        <TextInput label="BlogPostRef" source="blogPostRef" />
        <TextInput label="content" multiline source="content" />
        <TextInput label="ContentField" multiline source="contentField" />
        <TextInput
          label="ContentFieldComment"
          multiline
          source="contentFieldComment"
        />
      </SimpleForm>
    </Create>
  );
};
