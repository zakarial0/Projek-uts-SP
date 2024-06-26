import React from "react";
import Layout from "../komponen/layout";
import Itembox from "../komponen/Item-container";
import medLogo from "../images/med-logo-sp.png";
import { Link } from "gatsby";
import SPactivity1 from "../images/sp-activity1.png";
import ClientScroll from "../komponen/client-scroll";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons/faWhatsapp";
import { faTruck, faTruckRampBox, faHandshake, } from "@fortawesome/free-solid-svg-icons";



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
            <div className=" bg-[#eff2ff] h-1/5 p-10">
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
            {/* produk terlaris*/}
            <div className="bg-white h-4/5 p-10 pb-14">
                <h1 className=" text-center text-4xl font-bold py-4">Produk Terlaris</h1>
                <p className=" text-center text-wrap px-[25%] pb-10">Butuh pasir segera? Langsung hubungi SUMBERPASIR! Melayani segela kebutuhan konstruksi seperti pasir, batu, dan juga lainnya. Pengiriman dilakukan di hari yang sama dengan hari pemesanan. Pesan pasir di SUMBER PASIR dijamin anti worry!.</p>
                <Itembox/>
            </div>

            {/* tentang kami */}
            <div className="bg-black h-1/5 flex">
                <img src={SPactivity1} alt="just a random thing for decoration w-1/3"></img>
                <div className="p-10 w-2/3">
                    <h1 className="text-white text-4xl font-bold text-center ">Tentang Kami</h1>
                    <img src={medLogo} alt="logo sumberpasir"/>
                    <p className="text-white ps-4 text-2xl pe-8 text-wrap text-justify pt-4">
                    Sumber pasir adalah Suplier bahan Bangunan yang menyediakan segala jenis pasir dan batu untuk kebutuhan pembagunan rumah dan lain-lain. System pembayaran bisa melalui COD “Barang sampai langsung bayar”
                    </p>
                </div>
            </div>
            
            {/* CTA */}
            <div className="bg-[#eff2ff] h-[15%] px-[15%] py-10">
                <div class="shadow-lg grid grid-cols-3 grid-rows-2 w-full justify-center p-10 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                    <h5 class="my-3 ms-10 mb-2 col-span-2 text-2xl font-bold tracking-tight text-black dark:text-white">
                        Hubungi Kami Segera</h5>
                    <p class="row-start-2 col-start-1 col-span-2 my-3 mx-10 font-bold text-black dark:text-gray-400">
                        Untuk informasi mengenai Harga Pasir & Harga Batu terbaru.</p>
                    <a href="#" class="col-start-3 row-span-2  inline-flex items-center my-8 mx-6 px-10 py-2 text-xl font-bold text-center text-black bg-[#ffeb3b] rounded-lg hover:bg-[#fff9c4] ring-2 ring-[#ffeb3b]">
                        081218851654
                    </a>
                </div>
            </div>

            {/* client */}
            <div className="bg-[#eff2ff] h-1/5">
                <h1 className="pt-10 pb-6 text-[3rem] font-bold text-center">Costumer Kami</h1>
                <hr className="w-48 h-1 mx-auto my-4 bg-[#ffeb3b] border-0 rounded"/>
                <ClientScroll/>
                <br/><br/>
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