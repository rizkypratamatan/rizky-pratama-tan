import React from "react";


type Props = {
    children: React.ReactNode;
    className: string;
    title: string;
};

const TitleBullet: React.FC<Props> = async({children, className, title}) => {
    return <div className={`${className} flex gap-2.5 justify-center items-center py-1.5 border border-border-100 rounded-4xl`}>
        {children}
        <p className="text-sm uppercase md:text-base">{title}</p>
    </div>;
};

export default TitleBullet;
