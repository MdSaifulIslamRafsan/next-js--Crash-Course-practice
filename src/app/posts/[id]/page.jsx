import React, { Suspense } from "react";
import getPost from "../../../../lib/getPost";
import getPostComment from "../../../../lib/getPostComment";
import loading from './../loading';
import Comments from './../../component/Comments';

export async function generateMetadata({ params }) {
  const { id } = params;
  const post = await getPost(id);
  return {
    title: post?.title,
    description: post?.body,
  };
}
const page = async ({ params }) => {
  const { id } = params;
  const postPromise =  getPost(id);
  const commentPromise = getPostComment(id);
//   const [post, comments] = await Promise.all([postPromise, commentPromise]);
const post = await postPromise;
  return (
    <div className="mt-6 space-y-4">
      <h2 className="text-xl font-bold">title:- {post?.title}</h2>
      <p>body:- {post?.body}</p>

      <Suspense fallback="<h1>loading Comments.....</h1>">
        <Comments promise={commentPromise}></Comments>
      </Suspense>
    </div>
  );
};

export default page;
