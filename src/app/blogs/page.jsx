import Link from "next/link";

const blogs =[
    {
        title: 'blog1',
        description: 'blog 1 description'
    },
    {
        title: 'blog2',
        description: 'blog 2 description'
    },
]

const BlogsPage = () => {
    return (
        <div className='my-10'>
            <h1>This is blog page</h1>
            <section className="grid grid-cols-2">
            {
                blogs?.map((blog)=><div key={blog?.title}>
                    <h1>{blog?.title}</h1>
                    <h1>{blog?.description}</h1>
                    <Link href={`/blogs/${blog?.title}`}>details</Link>
                </div>)
            }
            </section>
        </div>
    );
};

export default BlogsPage;