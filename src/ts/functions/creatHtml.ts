import { Blog } from "../module/blog";

export function creatHtml(blogPosts: Blog[]) {
  for (let i = 0; i < blogPosts.length; i++) {
    const mainContainer = document.getElementById("mainContainer");
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

    blogContainer?.appendChild(titleTag);
    blogContainer?.appendChild(categoryDocument);
    blogContainer?.appendChild(contentDocument);
    blogContainer?.appendChild(authorDocument);
    blogContainer?.appendChild(timestampDocument);
    mainContainer?.appendChild(blogContainer);
  }
}
