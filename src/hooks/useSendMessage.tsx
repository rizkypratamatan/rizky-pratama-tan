import toastContext from "@/lib/toast-context";
import sendMessageValidation from "@/lib/validations/sendMessageValidation";
import sendMessageService from "@/services/sendMessageService";
import {RequestStatus} from "@/types/enums/RequestStatus";
import {ContextDataToast} from "@/types/interfaces/ContextDataToast";
import {SendMessageRequest} from "@/types/interfaces/SendMessageRequest";
import {zodResolver} from "@hookform/resolvers/zod";
import {useMutation} from "@tanstack/react-query";
import {Dispatch, SetStateAction} from "react";
import {useForm} from "react-hook-form";


const useSendMessage = (toast?: ContextDataToast, setToast?: Dispatch<SetStateAction<ContextDataToast>>) => {
    const {register, control, setValue, handleSubmit, formState: {errors}, reset} = useForm({
        resolver: zodResolver(sendMessageValidation),
        defaultValues: {email: '', message: '', name: '', token: ''}
    });

    const {mutate, isPending, isError, error, isSuccess} = useMutation({
        mutationFn: (data: SendMessageRequest) => sendMessageService(data),
        onError: (error: Error) => {
            setToast!(toastContext(toast, true, RequestStatus.Failed, error.toString()));
        },
        onSettled: (data) => {
            if(data && data.result) {
                setToast!(toastContext(toast, true, RequestStatus.Success, 'Your message has been sent successfully.'));
            }
        }
    });

    const onSubmit = async(data: SendMessageRequest) => {
        mutate(data);
    };

    return {register, control, setValue, handleSubmit, errors, reset, onSubmit, isPending, isError, error, isSuccess};
};

export default useSendMessage;
