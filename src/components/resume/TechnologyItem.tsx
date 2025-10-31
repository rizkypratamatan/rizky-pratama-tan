import React from "react";


type Props = {
    children: React.ReactNode;
    stack: string;
    percentage: number;
};

const TechnologyItem: React.FC<Props> = async({children, stack, percentage}) => {
    return <div className="relative flex flex-col gap-7.5 px-7.5 pt-7.5 bg-background-rgba-200 border border-border-100 rounded-2xl">
        <div className="flex gap-7.5 items-center">
            {children}
            <h3 className="text-base font-medium md:text-lg">{stack}</h3>
        </div>
        <div className="h-0.75 bg-border-100 rounded-md">
            <div className="h-full bg-text-100 rounded-md" style={{width: `${percentage}%`}}></div>
        </div>
        <p className="absolute top-2.5 right-2.5 px-3 py-1 border border-border-100 rounded-3xl text-xs md:text-sm">{percentage}%</p>
    </div>;
};

export default TechnologyItem;
