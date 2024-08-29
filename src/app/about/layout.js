import Link from 'next/link';
import React from 'react';
export const metadata = {
    title: "About us",
    description: "This is a about page",
  };
const layout = ({children}) => {
    return (
        <div>
            <nav>
            <ul className="flex justify-center my-5 gap-5">
            <li><Link href="/about/mission">mission</Link></li>
            <li><Link href="/about/vision">vision</Link></li>
          </ul>
            </nav>
            {children}
        </div>
    );
};

export default layout;