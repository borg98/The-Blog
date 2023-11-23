import { Blog } from "../module/blog";
import { creatHtml } from "./creatHtml";

export const selectCategories = (blogPosts: Blog[]) => {
  const btn = document.getElementById("categorySort");
  const selected = document.getElementById("category");
  selected?.addEventListener("change", (e: Event) => {
    const newValue = (e.target as HTMLInputElement).value;
    (document.getElementById("category") as HTMLInputElement).value = newValue;
  });
  btn?.addEventListener("click", () => {
    const selectedValue = (
      document.getElementById("category") as HTMLInputElement
    ).value;

    let newListSelectedCategory = blogPosts.filter((item) => {
      return item.category.toLowerCase() === selectedValue;
    });
    if (newListSelectedCategory.length > 0) {
      creatHtml(newListSelectedCategory);
    } else {
      const mainDiv = document.getElementById(
        "mainContainer"
      ) as HTMLDivElement;
      const pTag = document.createElement("p");
      pTag.innerHTML = "Finns inget i den här kategorin";
      mainDiv.innerHTML = "";
      mainDiv.appendChild(pTag);
    }
  });
};
