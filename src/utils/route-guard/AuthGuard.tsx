// import React, { useEffect, useState } from "react";
// import { useNavigate } from "react-router";
// import { GuardProps } from "../../types";

// // This Guard is for Protected Routes
// const AuthGuard = ({ children }: GuardProps) => {
//     const [loading, setLoading] = useState(true);
//     const [token, setToken] = useState<string | null>("");
//     const navigate = useNavigate();

//     useEffect(() => {
//         const checkAuth = async () => {
//             setLoading(true);
//             await new Promise((resolve) => setTimeout(resolve, 2000));
//             const token = localStorage.getItem('token');
//             setToken(token);
//             if (!token) {
//                 return navigate('/login');
//             }
//             setLoading(false);
//         };
//         checkAuth();
//     }, [navigate, token]);

//     if (loading || !token) return <h1>Loading ........</h1>;

//     return <>{children}</>;
// };

// export default AuthGuard;

import React, { useEffect, useState } from "react";
import { Outlet, useNavigate } from "react-router";
import Loading from "../../components/loading";

// This Guard is for Protected Routes
const AuthGuard = () => {
    const [loading, setLoading] = useState(true);
    const [token, setToken] = useState<string | null>("");
    const navigate = useNavigate();

    useEffect(() => {
        const checkAuth = async () => {
            setLoading(true);
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

    if (loading || !token) return <Loading />;

    return <><Outlet /></>;
};

export default AuthGuard;