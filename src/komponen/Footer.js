import React from "react";
import medLogo from "../images/med-logo-sp.png";
import { Link } from "gatsby";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookF, faInstagram ,faXTwitter, faLinkedin} from "@fortawesome/free-brands-svg-icons";
const Footer = () => {
    
    return(
        <footer className="bg-black py-3 absolute bottom-0 w-full h-80 ">
            <div className="grid grid-cols-2">
            <div className="mx-8">
                <img src={medLogo} alt="logo" className="px-12 -mt-8"/>
                <h1 className="text-white -mt-4 px-10 text-justify ms-7">
                    Sumber pasir adalah Suplier bahan Bangunan yang menyediakan segala jenis pasir dan batu untuk kebutuhan pembagunan rumah dan lain-lain.
                </h1>
                <ul className="flex space-x-14 px-16 mt-7 ms-2">
                    <li><Link to="#"><FontAwesomeIcon icon={faFacebookF} size="2xl" className="text-color" /></Link></li>
                    <li><Link to="#"><FontAwesomeIcon icon={faInstagram} size="2xl" className="text-color" /></Link></li>
                    <li><Link to="#"><FontAwesomeIcon icon={faXTwitter} size="2xl" className="text-color" /></Link></li>
                    <li><Link to="#"><FontAwesomeIcon icon={faLinkedin} size="2xl" className="text-color" /></Link></li>
                </ul>
            </div>
            <div className="bg-red-400">
                <h1>ini buat contact</h1>
            </div>
            </div>
            <div className="border-b-2 border-white w-full my-4"/>
            <p className="text-slate-50 font-bold absolute bottom-0 left-1/3 my-2">Copyright © 2024 Sumber Pasir | Powered by Sumber Pasir</p>
        </footer>
    )
}

export default Footer