import React from "react";


type Props = {
    children?: React.ReactNode;
};

const TitleHeading: React.FC<Props> = ({children}) => {
    return <h2 className="py-7.5 text-2xl font-semibold md:text-4xl">{children}</h2>;
};

export default TitleHeading;
