export const selectCategories = (blogPosts) => {
const btn = document.getElementById('categorySort')
const selected = document.getElementById('category')
selected?.addEventListener('change', (e: Event) => {
  const newValue = (e.target as HTMLInputElement).value;
  document.getElementById('category').value = newValue;
});
btn?.addEventListener('click', (e: MouseEvent) => 
{e.preventDefault() 
  const selectedValue = document.getElementById('category').value
let newListSelectedCategory = blogPosts.filter(item => {
return item.category.toLowerCase() === selectedValue
})
console.log(newListSelectedCategory)
return newListSelectedCategory
}) 

}
