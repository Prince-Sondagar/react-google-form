import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import { Outlet, useLocation, } from "react-router";


const excludePath = [
    '/'
];


const AuthLayout = () => {
    const { pathname } = useLocation();

    return (
        <>
            {!excludePath.includes(pathname) && <Header />}
            <Outlet />
            {!excludePath.includes(pathname) && <Footer />}
        </>
    );
};

export default AuthLayout;