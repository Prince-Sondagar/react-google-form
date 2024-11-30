import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import { Outlet } from "react-router";
import AuthGuard from "../../utils/route-guard/AuthGuard";



const DashboardLayout = () => {
    return (
        <>
            <AuthGuard>
                <Header />
                <Outlet />
                <Footer />
            </AuthGuard>

        </>
    );
};

export default DashboardLayout;