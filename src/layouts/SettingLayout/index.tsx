import { Outlet } from "react-router";
import Footer from "./Footer";
import Header from "./Header";


const SettingLayout = () => {

    return (
        <>
            <Header />
            <Outlet />
            <Footer />
        </>
    )
};

export default SettingLayout;