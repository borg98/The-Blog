import { Blog } from "../module/blog";

export const blog: Blog = new Blog(
  "test",
  "2023-05-05",
  "kategori",
  "lorem ipsum dolar is emet",
  "jag"
);

export function displaySingleBlog(aBlog: Blog) {
  const mainContainer = document.querySelector(
    "#mainContainer"
  ) as HTMLDivElement;
  mainContainer.innerHTML = "";

  const titleTag = document.createElement("h3");
  titleTag.className = "main-container__heading-container__title";
  titleTag.innerHTML = aBlog.title;

  const dateTag = document.createElement("p");
  dateTag.className = "main-container__heading-container__date";
  dateTag.innerHTML = aBlog.timestamp;

  const categoryTag = document.createElement("p");
  categoryTag.className = "main-container__heading-container__category";
  categoryTag.innerHTML = aBlog.category;

  const contentTag = document.createElement("p");
  contentTag.className = "main-container__content";
  contentTag.innerHTML = aBlog.content;

  const authorTag = document.createElement("p");
  authorTag.className = "main-container__author";
  authorTag.innerHTML = aBlog.author;

  const headingContainer = document.createElement("div");
  headingContainer.className = "main-container__heading-container";

  headingContainer.appendChild(titleTag);
  headingContainer.appendChild(dateTag);
  headingContainer.appendChild(categoryTag);

  mainContainer?.appendChild(headingContainer);
  mainContainer?.appendChild(contentTag);
  mainContainer?.appendChild(authorTag);
}
