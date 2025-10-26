import {RequestStatus} from "@/types/enums/RequestStatus";


export interface ContextDataToast {
    message: string;

    open: boolean;

    status: RequestStatus;
}
