import getAllPost from "../../../lib/getAllPost";
import Link from "next/link";

const posts = async () => {
    const posts = await getAllPost();
    return (
        <div>
            <h1 className="text-2xl font-bold text-red-500 text-center my-10">all posts</h1>
            <ul>
                {
                   posts?.map(post=> <li className="mt-5" key={post?.title}> <Link href={`/posts/${post?.id}`}>{post?.title}</Link> </li>)
                }
            </ul>
        </div>
    );
};

export default posts;