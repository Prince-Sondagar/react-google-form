import { useEffect, useState } from "react";
import { GuardProps } from "../../types";
import { useNavigate } from "react-router";
import Loader from "../../components/Loader";


// This Guard is for UnProtected Routes
const GuestGuard = ({ children }: GuardProps) => {
    const navigate = useNavigate();
    const [loading, setLoading] = useState(true);
    const [token, setToken] = useState<string | null>("");

    useEffect(() => {
        const checkAuth = async () => {
            // setLoading(true);
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

    return <>{children}</>;
};

export default GuestGuard;