import React from 'react';

const layout = ({children}) => {
    return (
        <div>
            <nav>mission || vision</nav>
            {children}
        </div>
    );
};

export default layout;