import React from "react";
import Link from "next/link";

const Navbar = () => (
    <nav className="navbar navbar-top-bar navbar-static-top">
        <div className="container">
            <ul className="navbar-nav nav">
                <li>
                    <Link href="/">Home</Link>
                </li>
                <li>
                    <Link href="/Users/uzquiano/projects/sdk/ui-frameworks/nextjs/bookstore/pages/books">Books</Link>
                </li>
                <li>
                    <Link href="/Users/uzquiano/projects/sdk/ui-frameworks/nextjs/bookstore/pages/authors">Authors</Link>
                </li>
                <li>
                    <Link href="/Users/uzquiano/projects/sdk/ui-frameworks/nextjs/bookstore/pages/tags">Tags</Link>
                </li>
            </ul>
        </div>
    </nav>
)

export default Navbar
