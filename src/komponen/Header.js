import React from "react";
import logo from "../images/small-logo-sp.png";
import { Link } from "gatsby";

const Header = () => {
    
    return (
        <header className="bg-[#000000] flex absolute w-full">
            <img src={ logo } alt="logo" className="flex-none mx-44"/>
            <nav className=" w-full">
            <ul className="flex my-6 space-x-8">
                <li>
                    <Link to="/" className="text-xl font-bold text-color">
                    Home</Link>
                </li>
                <li>
                    <Link to="/about" className="text-xl font-bold text-color">
                    Tentang Kami</Link>
                </li>
                <li>
                    <label>
                        <select value="value">
                            <option value="pasir">Pasir</option>
                            <option value="batu">Batu</option>
                        </select>
                    </label>
                </li>
                <li>
                    <Link to="/contact" className="text-xl font-bold text-color">
                    Kontak</Link>
                </li>
                <li>
                    <Link to="/contact" className="text-xl font-bold text-color">
                    Blog</Link>
                </li>
                <li>
                    <Link to="/contact" className="text-xl font-bold galeri rounded-md px-3 pb-1">
                    Galeri</Link>
                </li>
            </ul>
            </nav>
        </header>
    )
}
export default Header;