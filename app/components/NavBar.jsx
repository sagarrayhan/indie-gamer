import Link from 'next/link';
import React from 'react';


const NavBar = () => {
    return (
        <div>
            <ul className='py-4 flex gap-3'>
                <li className='hover:text-green-700 cursor-pointer'><Link href="/">Indie Gamer</Link></li>
                <li className='ml-auto hover:text-green-700 cursor-pointer'><Link href="/">Home</Link></li>
                <li className='hover:text-green-700 cursor-pointer'><Link href="/reviews">Reviews</Link></li>
                <li className='hover:text-green-700 cursor-pointer'><Link href="/about" prefetch={false}>About</Link></li>
            </ul>
        </div>
    );
};

export default NavBar;