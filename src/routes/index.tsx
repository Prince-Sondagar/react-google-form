import { BrowserRouter, Route, Routes } from "react-router";
import Login from "../pages/auth/login";
import SignUp from "../pages/auth/signup";
import { IRouteArray } from "../types";
import Dashboard from "../pages/main/dashboard";
import DashboardLayout from "../layouts/DashboardLayout";
import Root from "../pages/landing";
import ProfileSetting from "../pages/main/settings/profile";
import ArtistSetting from "../pages/main/settings/artist";
import SettingLayout from "../layouts/SettingLayout";
import AuthGuard from "../utils/route-guard/AuthGuard";
import AppointmentCreationForm from "../pages/main/dashboard/components/appointCreationForm";
import GuestGuard from "../utils/route-guard/GuestGuard";

const AuthRoutes: IRouteArray[] = [
    {
        path: "/",
        component: <Root />
    },
    {
        path: '/login',
        component: <Login />
    },
    {
        path: "/signUp",
        component: <SignUp />,
    }
];

// const AppRoutes: IRouteArray[] = [
//     {
//         path: '/dashboard',
//         component: <Dashboard />
//     },
//     {
//         path: '/appointmentCreate',
//         component: <AppointmentCreationForm />,
//     },
//     {
//         path: "/settings",
//         component: <SettingLayout />,
//         children: [
//             {
//                 // path: 'profile',
//                 component: <ProfileSetting />,
//                 index: true
//             },
//             {
//                 path: 'artist',
//                 component: <ArtistSetting />
//             }
//         ]
//     }
// ];

const AppRoutes: IRouteArray[] = [
    {
        path: '/',
        component: <DashboardLayout />,
        children: [
            {
                path: '/dashboard',
                component: <Dashboard />,
            },
            {
                path: '/appointmentCreate',
                component: <AppointmentCreationForm />,
            }
        ]
    },
    {
        path: "/settings",
        component: <SettingLayout />,
        children: [
            {
                // path: 'profile',
                index: true,
                component: <ProfileSetting />,
            },
            {
                path: 'artist',
                component: <ArtistSetting />
            }
        ]
    }
];


const renderRoutes = (routes: IRouteArray[]) => {
    return routes.map((route, index) => {
        if (route.children) {
            return (
                <Route path={route.path} element={route.component} key={index}>
                    {renderRoutes(route.children)}
                </Route>
            );
        }

        if (route.index) {
            return (
                <Route index element={route.component} key={index} />
            );
        }

        return (
            <Route path={route.path} element={route.component} key={index} />
        );
    });
};

const RouterComponent = () => {

    return (
        <BrowserRouter>
            <Routes>
                <Route element={<GuestGuard />}>
                    {renderRoutes(AuthRoutes)}
                </Route>

                <Route element={<AuthGuard />}>
                    {renderRoutes(AppRoutes)}
                </Route>
            </Routes>
        </BrowserRouter>
    );
};


export default RouterComponent;