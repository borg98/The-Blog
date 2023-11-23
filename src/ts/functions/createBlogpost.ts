import { Blog } from "./module/blog.ts";

export const createBlogpost = () => {
  const timestampDate = new Date();

const inputTitle = (document.getElementById("formContainer__input__title") as HTMLInputElement).value;
const inputCategory = (document.getElementById("formContainer__input__category") as HTMLInputElement).value;
const spanTimestamp = (document.getElementById("formContainer__span__timestamp") as HTMLSpanElement).innerHTML = timestampDate.toString();
const textareaContent = (document.getElementById("formContainer__textarea__content") as HTMLTextAreaElement).value;
const inputAuthor = (document.getElementById("formContainer__input__author") as HTMLInputElement).value;
const newBlog = new Blog(inputTitle, inputCategory, spanTimestamp, textareaContent, inputAuthor);

console.log(newBlog);
}