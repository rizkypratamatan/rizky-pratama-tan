import React from "react";


type Props = {
    children?: React.ReactNode;
    description?: string;
    heading?: string;
};

const ServiceItemHeading: React.FC<Props> = async({children, description, heading}) => {
    return <div className="flex gap-7.5 items-center">
        {children}
        <div>
            <span className="text-sm text-text-300 md:text-base">{description}</span>
            <h3 className="text-sm md:text-base">{heading}</h3>
        </div>
    </div>;
};

export default ServiceItemHeading;
