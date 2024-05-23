import React from "react";
import logo from "../images/small-logo-sp.png";
import { Link } from "gatsby";

const Header = () => {
    
    return (
        <header className="bg-[#000000] flex absolute w-full">
            <img src={ logo } alt="logo" className="flex-none mx-44"/>
            <nav className=" w-full">
            <ul className="flex my-6 space-x-9">
                <li>
                    <Link to="/" className="text-xl font-bold text-color">
                    Home</Link>
                </li>
                <li>
                    <Link to="/about" className="text-xl font-bold text-color">
                    Tentang Kami</Link>
                </li>
                <li className="text-xl font-bold text-color"><Link to="#">Produk</Link>
                    <ul className="">
                    <li className="produk"><Link to="#">Pasir</Link></li>
                    <li className="produk"><Link to="#">Batu</Link></li>
                    </ul>
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