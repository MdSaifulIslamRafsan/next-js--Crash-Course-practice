

const page = ({params}) => {
const {title} = params;
    console.log(title);
    
    return (
        <div>
            <h1>The blog title is {title}</h1>
        </div>
    );
};

export default page;