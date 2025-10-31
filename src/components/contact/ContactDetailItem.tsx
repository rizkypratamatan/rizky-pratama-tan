import React from "react";


type Props = {
    children: React.ReactNode;
    className?: string;
    name: string;
    value: string;
};

const ContactDetailItem: React.FC<Props> = async({children, className, name, value}) => {
    return <div className={`${className} border border-border-100 rounded-2xl gradient-container before:rounded-2xl`}>
        <div className="flex flex-col gap-2.5 justify-between items-start px-5 py-5 sm:flex-row sm:items-center md:flex-col md:items-start md:py-7.5 xl:flex-row xl:items-center">
            <div className="sm:basis-37.5 md:basis-auto flex gap-5 items-center">
                {children}
                <h3 className="text-sm text-text-300 md:text-base">{name}</h3>
            </div>
            <p className="text-sm md:text-base">{value}</p>
        </div>
    </div>;
};

export default ContactDetailItem;
