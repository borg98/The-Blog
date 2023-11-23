import { Blog } from "./../module/blog.ts";

export const createBlogpost = () => {
  const timestampDate = Date().slice(0, 21);

  const inputTitle = (
    document.getElementById("formContainer__input__title") as HTMLInputElement
  ).value;

  const inputCategory = (
    document.getElementById(
      "formContainer__input__category"
    ) as HTMLInputElement
  ).value;

  const textareaContent = (
    document.getElementById(
      "formContainer__textarea__content"
    ) as HTMLTextAreaElement
  ).value;

  const inputAuthor = (
    document.getElementById("formContainer__input__author") as HTMLInputElement
  ).value;

  const newBlog = new Blog(
    inputTitle,
    timestampDate,
    inputCategory,
    textareaContent,
    inputAuthor
  );
  return newBlog;
};
