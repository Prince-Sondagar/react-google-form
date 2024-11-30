import { ReactNode } from "react";

export type IRouteArray = {
    path: string;
    component: ReactNode;
};

export type GuardProps = {
    children: ReactNode;
};