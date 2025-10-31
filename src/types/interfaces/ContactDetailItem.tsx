import React from "react";


export interface ContactDetailItem {
    className?: string;

    icon: React.ReactNode;

    name: string;

    value: string;
}
