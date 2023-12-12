import { ReactElement } from "react";
import { IFooter } from "./Footer/type";

export interface IContainer {
    children: ReactElement<any, any>
    footerProps: IFooter
}