import React from 'react';

const Header = ({children}) => {
    return (
        <div>
            <h1 className='text-xl font-orbitron font-extrabold'>{children}</h1>           
        </div>
    );
};

export default Header;