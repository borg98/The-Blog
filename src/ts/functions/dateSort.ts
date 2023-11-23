export const dateSort = (blogPosts) => {
let sortedList = []
sortedList = blogPosts.sort(function(a,b){
    return new Date(b.timestamp) - new Date(a.timestamp);
    })
return sortedList
}
