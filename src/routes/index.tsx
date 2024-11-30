import { BrowserRouter, Route, Routes } from "react-router";
import Login from "../pages/auth/login";
import SignUp from "../pages/auth/signup";
import { IRouteArray } from "../types";
import Dashboard from "../pages/main/dashboard";
import AuthLayout from "../layouts/AuthLayout";
import DashboardLayout from "../layouts/DashboardLayout";

const AuthRoutes: IRouteArray[] = [
    {
        path: '/login',
        component: <Login />
    },
    {
        path: "/signUp",
        component: <SignUp />,
    }
];

const AppRoutes: IRouteArray[] = [
    {
        path: '/dashboard',
        component: <Dashboard />
    }
];

const RouterComponent = () => {

    return (
        <BrowserRouter>
            <Routes>
                <Route element={<AuthLayout />}>
                    {AuthRoutes.map((route) => (
                        <Route path={route.path} element={route.component} />
                    ))}
                </Route>

                <Route element={<DashboardLayout />}>
                    {AppRoutes.map((route) => (
                        <Route path={route.path} element={route.component} />
                    ))}
                </Route>
            </Routes>
        </BrowserRouter>
    );
};


export default RouterComponent;