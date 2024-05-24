import React from "react";
import Layout from "../komponen/layout";
import { Link } from "gatsby";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons/faWhatsapp";
const IndexPage = () => {
    return (
        <Layout>
            {/* banner */}
            <div className="banner px-20 py-48 space-y-10 h-2/5" id="banner">
                <h1 className="text-white text-6xl font-bold w-1/2">Supplier Pasir Dan Batu Jabodetabek</h1>
                <p className="text-white text-xl -mt-4">Aman Dan Terpercaya siap kirim ke semua wilayah Jabodetabek</p>
                <Link to="/" className="text-color font-bold text-2xl bg-[#ffeb3b] rounded-2xl p-3
                hover:bg-[#fff9c4]">
                    <FontAwesomeIcon icon={faWhatsapp} size="xl" style={{color: "#000000",}}/>
                    <span className="mx-4 text-black">Hubungi Kami</span>
                </Link>
            </div>
            {/* reason */}
            <div className="bg-[#c0c0c0] h-1/5 p-8">
                <h1 className="text-black text-4xl font-bold text-center">Kenapa Harus beli di Sumber Pasir</h1>
                <div className="grid grid-cols-3 my-16">
                    <div className="bg-red-400 size-40"></div>
                    <div className="bg-green-400 size-40"></div>
                    <div className="bg-blue-400 size-40"></div>
                </div>
            </div>
        </Layout>
    )
}

export default IndexPage;

export const Head = () => {
 return ( 
 <title>Sumber Pasir | Home</title>
    )
}