import { Blog } from "../module/blog";
import { dateSort } from "./dateSort";

export function SaveToLS(blogList: Blog[]) {
  localStorage.setItem("blogs", JSON.stringify(blogList));
}

export function LoadFromLS(blogList: Blog[]) {
  const savedBlogList = localStorage.getItem("blogs");
  if (savedBlogList) {
    blogList = JSON.parse(savedBlogList);
    const sortedList = dateSort(blogList);
    return sortedList;
  } else {
    return [];
  }
}
