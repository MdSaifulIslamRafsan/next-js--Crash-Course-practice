export default async function getPostComment(id){
    const result =  await fetch(`https://jsonplaceholder.typicode.com/comments?postId=${id}`);
    return result.json();
  }