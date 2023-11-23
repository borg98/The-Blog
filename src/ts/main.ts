import "./../scss/style.scss";
import { dateSort } from "./functions/dateSort";
import { selectCategories } from "./functions/selectCategories";
import { blog, displaySingleBlog } from "./functions/displaySingleBlog";
import { Blog } from "./module/blog";
import { createBlogpost } from "./functions/createBlogpost";

let blogPosts: Blog[] = [];
let dateSortblogPosts = dateSort(blogPosts);
console.log(dateSortblogPosts);
/* Call the create html-function and iterate through the new sorted list, dateSortblogPosts,
 to display the blog posts in descending order, with the newest blog post appearing first. */

selectCategories(blogPosts);
let page = document.body.id;

switch (page) {
  case "1":
    displaySingleBlog(blog);
    break;
  case "2":
    const submitBlogpost = document.getElementById(
      "formContainer__button__submit"
    ) as HTMLButtonElement;
    submitBlogpost.addEventListener("click", (e) => {
      e.preventDefault();
      const newBlog = createBlogpost();
      blogPosts.push(newBlog);
      console.log(blogPosts);
    });
    break;
}
