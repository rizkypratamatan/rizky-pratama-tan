import {ContextDataToast} from "@/types/interfaces/ContextDataToast";
import {Dispatch, SetStateAction} from "react";


export interface ContextData {
    dark: boolean;

    setDark: Dispatch<SetStateAction<boolean>>;

    toast: ContextDataToast;

    setToast: Dispatch<SetStateAction<ContextDataToast>>;
}
