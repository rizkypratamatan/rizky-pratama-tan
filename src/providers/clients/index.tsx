import Toast from "@/components/ui/Toast";
import {ContextProvider} from "@/providers/clients/ContextProvider";
import TanstackProvider from "@/providers/clients/TanstackProvider";
import React from "react";


type Props = {
    children?: React.ReactNode;
};

const ClientProviders: React.FC<Props> = ({children}) => {
    return (
        <ContextProvider>
            <TanstackProvider>
                <Toast/>
                {children}
            </TanstackProvider>
        </ContextProvider>
    );
};

export default ClientProviders;
