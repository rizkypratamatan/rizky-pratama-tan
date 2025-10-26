import React from "react";


type Props = {
    children?: React.ReactNode;
};

const ServiceItem: React.FC<Props> = async({children}) => {
    return <div className="bg-background-100 border border-border-100 rounded-2xl gradient-container-hidden">
        <div className="flex flex-col gap-7.5 px-7.5 py-7.5 md:py-12.5">
            {children}
        </div>
    </div>;
};

export default ServiceItem;
