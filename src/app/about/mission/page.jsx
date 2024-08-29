
import Button from "@/app/component/Button";
import Image from "next/image";
import thumb from "@/../public/images/pang-yuhao-oRwZvLYL1Ug-unsplash.jpg"

const MissionPage = () => {
    return (
        <main className='my-10'>
            <h1>this is mission page</h1>
            <Image placeholder="blur" src={thumb} alt="thumb"></Image>
            <Button></Button>
        </main>
    );
};

export default MissionPage;