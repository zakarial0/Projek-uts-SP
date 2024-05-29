import React from "react";
import Layout from "../komponen/layout";
import { Link } from "gatsby";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons/faWhatsapp";
import { faTruck, faTruckRampBox, faHandshake } from "@fortawesome/free-solid-svg-icons";
const IndexPage = () => {
    return (
        <Layout>
            {/* banner */}
            <div className="banner px-20 py-48 space-y-10 h-2/5" id="banner">
                <h1 className="text-white text-6xl font-bold w-1/2">Supplier Pasir Dan Batu Jabodetabek</h1>
                <p className="text-white text-xl -mt-4">Aman Dan Terpercaya siap kirim ke semua wilayah Jabodetabek</p>
                <button className="text-color font-bold text-2xl bg-[#ffeb3b] rounded-2xl p-3
                hover:bg-[#fff9c4]">
                    <Link to="/">
                        <FontAwesomeIcon icon={faWhatsapp} size="xl" style={{color: "#000000",}}/>
                        <span className="mx-4 text-black">Hubungi Kami</span>
                    </Link>
                </button>
            </div>
            {/* reason */}
            <div className=" bg-[#eff2ff] h-1/5 p-8">
                <h1 className="text-black text-4xl font-bold text-center -mb-6">Kenapa Harus beli di Sumber Pasir ?</h1>
                <div className="grid grid-cols-3 my-16 space-x-6">
                    <div className="bg-white h-56 p-10 rounded-md ring-2 ring-[#ffeb3b]">
                    <FontAwesomeIcon icon={faTruck} size="2xl" style={{color: "#FFD43B",}} className="mb-6"/>
                        <h1 className=" font-bold text-black text-lg">Gratis Ongkos Kirim</h1>
                        <p className=" text-lg">Harga lebih murah jika dekat dengan lokasi kami, di nego aja !</p>
                    </div>
                    <div className="bg-white h-56 p-10 rounded-md ring-2 ring-[#ffeb3b]">
                    <FontAwesomeIcon icon={faTruckRampBox} size="2xl" style={{color: "#FFD43B",}} className="mb-6"/>
                        <h1 className=" font-bold text-black text-lg">Gratis Bongkar Muat</h1>
                        <p className=" text-lg">Tidak ada biaya tambahan lainnya, langsung kita bongkar muatan</p>
                    </div>
                    <div className="bg-white h-56 p-10 rounded-md ring-2 ring-[#ffeb3b]">
                    <FontAwesomeIcon icon={faHandshake} size="2xl" style={{color: "#FFD43B",}} className="mb-6"/>
                        <h1 className=" font-bold text-black text-lg">Bayar di Tempar (COD) </h1>
                        <p className=" text-lg">Pembayaran Aman & nyaman bisa langsung di lokasi tujuan</p>
                    </div>
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