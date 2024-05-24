import React from "react";
import medLogo from "../images/med-logo-sp.png";
import { Link } from "gatsby";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookF, faInstagram ,faXTwitter, faLinkedin,} from "@fortawesome/free-brands-svg-icons";
import { faMapLocationDot, faEnvelope } from "@fortawesome/free-solid-svg-icons";

const Footer = () => {
    
    return(
        <footer className="bg-black py-3 solid bottom-0 w-full h-80 ">
            <div className="grid grid-cols-2">
            <div className="mx-8">
                <img src={medLogo} alt="logo" className="px-12 -mt-8"/>
                <h1 className="text-white -mt-4 px-10 text-justify ms-7">
                    Sumber pasir adalah Suplier bahan Bangunan yang menyediakan segala jenis pasir dan batu untuk kebutuhan pembagunan rumah dan lain-lain.
                </h1>
                <ul className="flex space-x-14 px-16 mt-7 ms-1.5">
                    <li><Link to="#"><FontAwesomeIcon icon={faFacebookF} size="2xl" className="text-color" /></Link></li>
                    <li><Link to="#"><FontAwesomeIcon icon={faInstagram} size="2xl" className="text-color" /></Link></li>
                    <li><Link to="#"><FontAwesomeIcon icon={faXTwitter} size="2xl" className="text-color" /></Link></li>
                    <li><Link to="#"><FontAwesomeIcon icon={faLinkedin} size="2xl" className="text-color" /></Link></li>
                </ul>
            </div>
            <div className=" mx-10 mt-5">
                <h1 className="text-white text-3xl font-bold">
                    More info about us :
                </h1>

                <ul className=" space-y-10 my-6">
                    <li className="flex me-20">
                    <FontAwesomeIcon icon={faMapLocationDot} size="2xl" style={{color: "#FFD43B",}} />
                    <p className="text-yellows text-xl ms-6">Desa Jatake Kec. Pagedangan Kab. Tangerang, Prov. Banten</p>
                    </li>
                    <li className="flex me-20">
                    <FontAwesomeIcon icon={faEnvelope} size="2xl" style={{color: "#FFD43B",}} />
                    <p className="text-yellows text-xl ms-6">sumberpasir618@gmail.com</p>
                    </li>
                </ul>
            </div>
            </div>
            <div className="border-b-2 border-[#ffeb3b] w-full my-4"/>
            <p className="text-white font-bold solid bottom-0 text-center my-3">Copyright © 2024 Sumber Pasir | Powered by Sumber Pasir</p>
        </footer>
    )
}

export default Footer