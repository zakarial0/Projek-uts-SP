import React from "react";
import Header from "./Header";
import Footer from "./Footer";

const Layout = ({ children }) => {
    return (
        <div className=" w-1">
            <Header className="w-2/3"/>
            <main className="flex-grow">
                {children}
            </main>
            <Footer />
        </div>
    )
}

export default Layout