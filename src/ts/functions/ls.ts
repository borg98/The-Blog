import { Blog } from "../module/blog";
import { creatHtml } from "./creatHtml";
import { dateSort } from "./dateSort";

export function SaveToLS(blogList: Blog[]) {
  localStorage.setItem("blogs", JSON.stringify(blogList));
}

export function LoadFromLS(blogList: Blog[]) {
  const savedBlogList = localStorage.getItem("blogs");
  if (savedBlogList) {
    blogList = JSON.parse(savedBlogList);
    const sortedList = dateSort(blogList);
    creatHtml(sortedList);
    return blogList;
  } else {
    return [];
  }
}
