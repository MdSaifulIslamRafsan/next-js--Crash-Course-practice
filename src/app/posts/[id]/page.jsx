import React from 'react';
import getPost from '../../../../lib/getPost';
import getPostComment from '../../../../lib/getPostComment';

export async function generateMetadata({params}) {
    const {id} = params;
    const post = await getPost(id);
   return {
    title: post?.title,
    description: post?.body,
   }
}
const page = async ({params}) => {
    const {id} = params;
    const postPromise =  getPost(id);
    const commentPromise = getPostComment(id);
    const [post , comments] = await Promise.all([postPromise , commentPromise])
console.log(comments);


    
    
    
    return (
        <div className='mt-6 space-y-4'>
            <h2 className='text-xl font-bold'>title:- {post?.title}</h2>
            <p>body:- {post?.body}</p>
            {/* <p>{comments}</p> */}
        </div>
    );
};

export default page;