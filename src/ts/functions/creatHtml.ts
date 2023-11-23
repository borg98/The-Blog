import { Blog } from "../module/blog";
import { displaySingleBlog } from "./displaySingleBlog";

export function creatHtml(blogPosts: Blog[]) {
  const mainContainer = document.getElementById(
    "mainContainer"
  ) as HTMLDivElement;
  mainContainer.innerHTML = "";
  for (let i = 0; i < blogPosts.length; i++) {
    const blogContainer = document.createElement("div");
    blogContainer.className = "blogContainer";
    const titleTag = document.createElement("h2");
    const categoryDocument = document.createElement("h4");
    const contentDocument = document.createElement("p");
    const authorDocument = document.createElement("p");
    const timestampDocument = document.createElement("p");

    titleTag.innerHTML = blogPosts[i].title;
    categoryDocument.innerHTML = blogPosts[i].category;
    contentDocument.innerHTML = blogPosts[i].content;
    authorDocument.innerHTML = blogPosts[i].author;
    timestampDocument.innerHTML = blogPosts[i].timestamp;

    blogContainer.addEventListener("click", () => {
      displaySingleBlog(blogPosts[i], blogPosts);
    });

    blogContainer?.appendChild(titleTag);
    blogContainer?.appendChild(categoryDocument);
    blogContainer?.appendChild(contentDocument);
    blogContainer?.appendChild(authorDocument);
    blogContainer?.appendChild(timestampDocument);
    mainContainer?.appendChild(blogContainer);
  }
}
