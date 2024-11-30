import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import { Outlet } from "react-router";
import GuestGuard from "../../utils/route-guard/GuestGuard";




const AuthLayout = () => {

    return (
        <>
            <GuestGuard>
                <Header />
                <Outlet />
                <Footer />
            </GuestGuard>
        </>
    );
};

export default AuthLayout;