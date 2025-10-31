"use client";

import {RequestStatus} from "@/types/enums/RequestStatus";
import {ContextData} from "@/types/interfaces/ContextData";
import {ContextDataToast} from "@/types/interfaces/ContextDataToast";
import React, {Context, createContext, useContext, useState} from "react";


const AppContext: Context<ContextData | undefined> = createContext<ContextData | undefined>(undefined);

type Props = {
    children: React.ReactNode;
}

export const ContextProvider: React.FC<Props> = ({children}) => {
    const [dark, setDark] = useState<boolean>(true);
    const [toast, setToast] = useState<ContextDataToast>({message: '', open: false, status: RequestStatus.Failed});

    const context: ContextData = {
        dark: dark,
        setDark: setDark,
        toast: toast,
        setToast: setToast
    };

    return <AppContext.Provider value={context}>{children}</AppContext.Provider>;
}

export const useAppContext: () => ContextData | undefined = (): ContextData | undefined => {
    const context: ContextData | undefined = useContext(AppContext);

    if(!context) {
        throw new Error("useAppContext must be used within a Provider");
    }

    return context;
}
