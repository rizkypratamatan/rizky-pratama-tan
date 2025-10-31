import React from "react";


export interface EducationItem {
    buttonText: string;

    certificate: string;

    description: string;

    image?: React.ReactNode;

    place: string;

    year: string;
}
