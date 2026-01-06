import {ReactNode} from "react";


export default interface ServiceItem {
    button: ServiceItemButton;

    description: string;

    heading: ServiceItemHeading;
}


export interface ServiceItemButton {
    href: string;

    text: string;
}


export interface ServiceItemHeading {
    description: string;

    heading: string;

    icon: ReactNode;
}
