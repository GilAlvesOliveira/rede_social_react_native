import { ReactElement } from "react";
import { IFooter } from "./Footer/type";
import { IHeader } from "./Header/types";

export interface IContainer {
    children: ReactElement<any, any>
    footerProps: IFooter,
    headerProps: IHeader
}