import React from "react";
import logo from "../images/small-logo-sp.png";
import { Link } from "gatsby";

const Header = () => {
    
    return (
        <header className="bg-[#000000] flex solid top-0 w-full">
            <img src={ logo } alt="logo" className="flex-none mx-44" />
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
                <li className="text-xl font-bold text-color" id="dropdown">
                    <Link to="#">Produk</Link>
                    <div className="z-10 absolute invisible" id="submenu">
                        <ul className="">
                            <li className="text-black w-[4.5rem] bg-[#ffeb3b] hover:bg-[#fff9c3] rounded-t-md px-3"><Link to="#">Pasir</Link></li>
                            <li className="text-black w-[4.5rem] bg-[#ffeb3b] hover:bg-[#fff9c3] rounded-b-md px-3"><Link to="#">Batu</Link></li>
                        </ul>
                    </div>
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