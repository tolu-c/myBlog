import React from 'react'
import { Link } from 'react-router-dom'

function Nav() {
    return (
        <nav className="shadow-lg border-green-700 text-center fixed top-0 bg-green-600 font-bold text-lg text-white w-full">
            <ul>
                <li className="inline-block py-4">
                    <Link to="/" className="px-8">Home</Link>
                </li>
                <li className="inline-block py-4">
                    <Link to="article-list" className="px-8">Articles</Link>
                </li>
            </ul>
        </nav>
    )
}

export default Nav
