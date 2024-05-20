import React from "react";
import { Link } from "gatsby";

const Header = () => {
    
    return (
        <header className="flex py-4 px-6 bg-slate-950">
            <h1 className=" text-red-500 font-bold text-4xl w-4/5 ml-12">sumberpasir</h1>
            <nav className=" w-2/5">
            <ul className="flex my-1.5 space-x-8 w-1/5 ml-28">
                <li>
                    <Link to="/" className="text-xl text-neutral-50 ms-10">Home</Link>
                </li>
                <li>
                    <Link to="/about" className="text-xl text-neutral-50 ms-10">About</Link>
                </li>
                <li>
                    <Link to="/contact" className="text-xl text-neutral-50 ms-10">Contact</Link>
                </li>
            </ul>
            </nav>
        </header>
    )
}
export default Header;