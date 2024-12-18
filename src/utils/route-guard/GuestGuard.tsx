import { useEffect, useState } from "react";
import { Outlet, useNavigate } from "react-router";
import Loader from "../../components/Loader";


// This Guard is for UnProtected Routes
const GuestGuard = () => {
    const navigate = useNavigate();
    const [loading, setLoading] = useState(true);
    const [token, setToken] = useState<string | null>("");

    useEffect(() => {
        const checkAuth = async () => {
            await new Promise((resolve) => setTimeout(resolve, 2000));
            const token = localStorage.getItem('token');
            setToken(token);

            if (token) {
                return navigate('/dashboard');
            }
            setLoading(false);
        };
        checkAuth();
    }, [navigate, token]);


    if (loading || token) return <Loader />;

    return <Outlet />;

};

export default GuestGuard;