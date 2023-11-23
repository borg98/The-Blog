import "./../scss/style.scss";
<<<<<<< HEAD
import { dateSort } from "./functions/dateSort";
import { selectCategories } from "./functions/selectCategories";




// Definiera en typ för nyhetsobjekten
type NewsItem = {
    title: string;       // Rubrik för nyhetsartikeln
    timestamp: string;   // Tidpunkt för publicering i formatet YYYY-MM-DDTHH:mm:ss
    category: string;    // Kategori till vilken nyhetsartikeln hör
    content: string;     // Innehållet i nyhetsartikeln
    author: string;      // Författare till nyhetsartikeln
};

// Skapa en array med 5 nyhetsobjekt av typen NewsItem
const blogPosts: NewsItem[] = [
    {
        title: "Nyhetsartikel 1",
        timestamp: "2023-11-23T12:00:00",
        category: "Teknik",
        content: "Innehåll för nyhetsartikel 1...",
        author: "Författare 1"
    },
    {
        title: "Nyhetsartikel 2",
        timestamp: "2023-11-23T12:30:00",
        category: "Sport",
        content: "Innehåll för nyhetsartikel 2...",
        author: "Författare 2"
    },
    {
        title: "Nyhetsartikel 3",
        timestamp: "2023-11-23T13:00:00",
        category: "Politik",
        content: "Innehåll för nyhetsartikel 3...",
        author: "Författare 3"
    }]



let dateSortblogPosts = dateSort(blogPosts)
console.log(dateSortblogPosts)
/* Call the create html-function and iterate through the new sorted list, dateSortblogPosts,
 to display the blog posts in descending order, with the newest blog post appearing first. */

selectCategories(blogPosts)




=======
import { Blog } from "./module/blog.ts";
import { createBlogpost } from "./function/createBlogpost.ts";
>>>>>>> feature-createblog
