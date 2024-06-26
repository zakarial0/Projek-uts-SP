import React from "react";
import { Link } from "gatsby";
import produk1 from "../images/abu-batu.png";
import produk2 from "../images/bata-merah.png";
import produk3 from "../images/batu-screening.png";
import produk4 from "../images/batu-sirdam.png";
import produk5 from "../images/batu-sk.png";
import produk6 from "../images/pasir-bangka.png";
import produk7 from "../images/pasir-cor.png";
import produk8 from "../images/pasir-rangkas.png";

const itembox = () => {
    return (
        <div className="grid grid-cols-4 gap-4">
            <div className="block max-w-sm p-2 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
                <Link to="#">
                    <img src={produk1} alt="abu batu"></img>
                </Link>
            </div>
            <div className="block max-w-sm p-2 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
                <Link to="#">
                    <img src={produk2} alt="bata-merah"></img>
                </Link>
            </div>
            <div className="block max-w-sm p-2 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
                <Link to="#">
                    <img src={produk3} alt="batu-screening"></img>
                </Link>
            </div>
            <div className="block max-w-sm p-2 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
                <Link to="#">
                    <img src={produk4} alt="batu-sirdam"></img>
                </Link>
            </div>
            <div className="block max-w-sm p-2 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
                <Link to="#">
                    <img src={produk5} alt="batu-sk"></img>
                </Link>
            </div>
            <div className="block max-w-sm p-2 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
                <Link to="#">
                    <img src={produk6} alt="pasir bangka"></img>
                </Link>
            </div>
            <div className="block max-w-sm p-2 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
                <Link to="#">
                    <img src={produk7} alt="pasir cor"></img>
                </Link>
            </div>
            <div className="block max-w-sm p-2 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
                <Link to="#">
                    <div>
                        <img src={produk8} alt="anoter produk" width="278px"  className=" opacity-60 absolute -z-1 blur-sm"></img>
                        <h1 className="font-bold text-4xl text-wrap p-16 text-center text-black">Lihat Produk Lainnya</h1>
                    </div>
                </Link>
            </div>
        </div>
    )
}

export default itembox