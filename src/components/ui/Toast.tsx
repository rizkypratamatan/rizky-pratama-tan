"use client";

import toastContext from "@/lib/toast-context";
import {useAppContext} from "@/providers/clients/ContextProvider";
import {RequestStatus} from "@/types/enums/RequestStatus";
import {ContextData} from "@/types/interfaces/ContextData";
import {IconX} from "@tabler/icons-react";
import {Toast as RadixToast} from "radix-ui";
import React, {useEffect} from "react";


const Toast: React.FC = () => {
    const context: ContextData | undefined = useAppContext();

    useEffect(() => {
        if(context?.toast.open) {
            setTimeout(() => {
                context.setToast(toastContext(context?.toast, false));
            }, 7000);
        }
    }, [context?.toast]);

    return <RadixToast.Provider swipeDirection="right">
        <RadixToast.Root className="transition-all duration-300 data-[state=open]:animate-[slide-in_0.2s_ease-out] data-[state=closed]:animate-[slide-out_0.2s_ease-in]" open={context?.toast.open}>
            <div className={`${context?.toast.status === RequestStatus.Success ? 'bg-green-600' : 'bg-red-600'} flex gap-5 px-4 py-2 rounded-lg shadow-lg`}>
                <RadixToast.Title className="text-sm">{context?.toast.message}</RadixToast.Title>
                <RadixToast.Action className="ToastAction" altText="Close Toast" aria-label="Close Toast">
                    <IconX className="size-4"/>
                </RadixToast.Action>
            </div>
        </RadixToast.Root>
        <RadixToast.Viewport className="fixed z-60 right-5 top-5"/>
    </RadixToast.Provider>
};

export default Toast;
