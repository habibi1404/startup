
import Link from 'next/link'
import React from 'react'

export default function Navbar(){ 
    return (
        <nav>
            <ul className='flex justify-between p-8 bg-blue-900 text-white'>
                <li>
                    <Link href='/'>Home</Link>
                </li>
                <li>
                    <Link href='/signup'>Sign Up</Link>
                </li>
                <li>
                    <Link href='/login'>Log In</Link> 
                </li>
            </ul>
        </nav>
    )
}