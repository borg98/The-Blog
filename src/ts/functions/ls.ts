import { Blog } from "../module/blog";
import { creatHtml } from "./creatHtml";

export function SaveToLS(blogList: Blog[]) {
  localStorage.setItem("blogs", JSON.stringify(blogList));
}

export function LoadFromLS(blogList: Blog[]) {
  const savedBlogList = localStorage.getItem("blogs");
  if (savedBlogList) {
    blogList = JSON.parse(savedBlogList);
    creatHtml(blogList);
  }
}
