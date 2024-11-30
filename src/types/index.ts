import { ReactNode } from "react";

export interface IRouteArray {
    path: string;
    component?: JSX.Element;
    children?: IRouteArray[];
};

export type GuardProps = {
    children: ReactNode;
};