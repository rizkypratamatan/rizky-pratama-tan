import {RequestStatus} from "@/types/enums/RequestStatus";
import {ContextDataToast} from "@/types/interfaces/ContextDataToast";


const toastContext = (toast?: ContextDataToast, open?: boolean, status?: RequestStatus, message?: string) => {
    const result: ContextDataToast = {
        message: message !== undefined ? message : toast?.message ?? '',
        open: open !== undefined ? open : toast?.open ?? false,
        status: status !== undefined ? status : toast?.status ?? RequestStatus.Failed
    };

    return result;
};

export default toastContext;
