import LayoutProvider from "@/providers/servers/LayoutProvider";
import React from "react";


type Props = {
    children?: React.ReactNode;
};

const ServerProviders: React.FC<Props> = ({children}) => {
    return (
        <LayoutProvider>{children}</LayoutProvider>
    );
};

export default ServerProviders;
