import {ReactNode} from "react";


export default interface ContactDetailItem {
    className?: string;

    icon: ReactNode;

    name: string;

    value: string;
}
