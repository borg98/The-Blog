import "./../scss/style.scss";
import { dateSort } from "./functions/dateSort";
import { selectCategories } from "./functions/selectCategories";

let dateSortblogPosts = dateSort(blogPosts);
console.log(dateSortblogPosts);
/* Call the create html-function and iterate through the new sorted list, dateSortblogPosts,
 to display the blog posts in descending order, with the newest blog post appearing first. */

selectCategories(blogPosts);
import { blog, displaySingleBlog } from "./functions/displaySingleBlog";

displaySingleBlog(blog);
