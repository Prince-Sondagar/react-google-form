import React, { useEffect, useState } from "react";
import { Outlet, useNavigate } from "react-router";
import Loader from "../../components/Loader";

// This Guard is for Protected Routes
const AuthGuard = () => {
    const [loading, setLoading] = useState(true);
    const [token, setToken] = useState<string | null>("");
    const navigate = useNavigate();

    useEffect(() => {
        const checkAuth = async () => {
            await new Promise((resolve) => setTimeout(resolve, 2000));
            const token = localStorage.getItem('token');
            setToken(token);
            if (!token) {
                return navigate('/login');
            }
            setLoading(false);
        };
        checkAuth();
    }, [navigate, token]);

    if (loading || !token) return <Loader />;

    return <Outlet />;

};

export default AuthGuard;