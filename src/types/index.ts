import { ReactNode } from "react";

export interface IRouteArray {
    path?: string;
    component?: JSX.Element;
    children?: IRouteArray[];
    index?: boolean
};

export type GuardProps = {
    children: ReactNode;
};