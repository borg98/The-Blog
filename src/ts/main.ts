import "./../scss/style.scss";
import { selectCategories } from "./functions/selectCategories";
import { Blog } from "./module/blog";
import { createBlogpost } from "./functions/createBlogpost";
import { creatHtml } from "./functions/creatHtml";
import { LoadFromLS, SaveToLS } from "./functions/ls";
let blogPosts: Blog[] = [];
let page = document.body.id;

switch (page) {
  case "1":
    creatHtml(LoadFromLS(blogPosts));
    break;
  case "createBlog":
    const submitBlogpost = document.getElementById(
      "formContainer__button__submit"
    ) as HTMLButtonElement;
    submitBlogpost.addEventListener("click", (e) => {
      const newLoadedList = LoadFromLS(blogPosts);
      e.preventDefault();
      const newBlog = createBlogpost();
      newLoadedList.push(newBlog);
      blogPosts = newLoadedList;

      SaveToLS([...blogPosts]);
      location.reload();
    });
    break;
  case "categoryBody":
    let loadedList: Blog[] = LoadFromLS(blogPosts);
    selectCategories(loadedList);
    creatHtml(blogPosts);
    break;
}
