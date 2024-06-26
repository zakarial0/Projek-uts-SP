import React from "react";
import cs1 from "../images/cs1.png"; 
import cs2 from "../images/cs2.png"; 
import cs3 from "../images/cs3.png"; 
import cs4 from "../images/cs4.png"; 
import cs5 from "../images/cs5.png"; 
import cs6 from "../images/cs6.png"; 

const clientScroll = () => {
    return (
        <div className="flex overflow-hidden space-x-20 h-64">
        <div className="flex animate-loop-scroll">
            <img src={cs1} alt="..." className=" max-w-none"/>
            <img src={cs2} alt="..." className=" max-w-none"/>
            <img src={cs3} alt="..." className=" max-w-none"/>
            <img src={cs4} alt="..." className=" max-w-none"/>
            <img src={cs5} alt="..." className=" max-w-none"/>
            <img src={cs6} alt="..." className=" max-w-none"/>
        </div>
        <div className="flex animate-loop-scroll" aria-hidden="true">
            <img src={cs1} alt="..." className=" max-w-none"/>
            <img src={cs2} alt="..." className=" max-w-none"/>
            <img src={cs3} alt="..." className=" max-w-none"/>
            <img src={cs4} alt="..." className=" max-w-none"/>
            <img src={cs5} alt="..." className=" max-w-none"/>
            <img src={cs6} alt="..." className=" max-w-none"/>
        </div>   
        </div>
    )

}

export default clientScroll ;