import React from "react";


type Props = {
    children: React.ReactNode;
};

const ServiceItemDescription: React.FC<Props> = async({children}) => {
    return <p className="text-sm md:text-base">{children}</p>;
};

export default ServiceItemDescription;
