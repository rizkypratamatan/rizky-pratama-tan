import {ReactNode} from "react";


export default interface EducationItem {
    button: string;

    certificate: string;

    description: string;

    image?: ReactNode;

    place: string;

    year: string;
}
