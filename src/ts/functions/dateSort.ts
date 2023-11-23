import { Blog } from "../module/blog";

export const dateSort = (blogPosts: Blog[]) => {
  let sortedList = [];
  sortedList = blogPosts.sort(function (a, b) {
    return new Date(b.timestamp).valueOf() - new Date(a.timestamp).valueOf();
  });
  return sortedList;
};
