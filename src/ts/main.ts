import "./../scss/style.scss";
import { dateSort } from "./functions/dateSort";
import { selectCategories } from "./functions/selectCategories";
import { blog, displaySingleBlog } from "./functions/displaySingleBlog";
import { Blog } from "./module/blog";
import { createBlogpost } from "./functions/createBlogpost";
import { creatHtml } from "./functions/creatHtml";
import { LoadFromLS, SaveToLS } from "./functions/ls";
let blogPosts: Blog[] = [];
let page = document.body.id;

switch (page) {
  case "1":
    creatHtml(LoadFromLS(blogPosts));
    // displaySingleBlog(blog);
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
      SaveToLS(blogPosts);
    });
    break;
  case "3":
    let loadedList: Blog[] = LoadFromLS(blogPosts);
    /* Call the create html-function and iterate through the new sorted list, dateSortblogPosts,
    to display the blog posts in descending order, with the newest blog post appearing first. */

    selectCategories(loadedList);
    creatHtml(blogPosts);
    break;
}
