

const Comments = async({promise}) => {
    const comments = await promise;
    return (
        <div className="mt-10">
            <h1>comments</h1>
            <ul>
                {
                    comments?.map((comment)=><li key={comment?.id}>{comment?.body}</li>
                    )
                }
               
            </ul>
        </div>
    );
};

export default Comments;