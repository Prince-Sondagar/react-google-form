import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import { Outlet, useLocation, } from "react-router";
import GuestGuard from "../../utils/route-guard/GuestGuard";


const excludePath = [
    '/'
];


const AuthLayout = () => {
    const { pathname } = useLocation();

    return (
        <>
            <GuestGuard>
                {!excludePath.includes(pathname) && <Header />}
                <Outlet />
                {!excludePath.includes(pathname) && <Footer />}
            </GuestGuard>
        </>
    );
};

export default AuthLayout;