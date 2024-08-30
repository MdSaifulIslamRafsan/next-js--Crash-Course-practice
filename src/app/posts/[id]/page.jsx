import React from 'react';
import getPost from '../../../../lib/getPost';

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
    const post = await getPost(id);

    
    
    
    return (
        <div className='mt-6 space-y-4'>
            <h2 className='text-xl font-bold'>title:- {post?.title}</h2>
            <p>body:- {post?.body}</p>
        </div>
    );
};

export default page;