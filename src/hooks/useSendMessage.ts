import {apiError} from "@/lib/apiClient";
import {sendMessageValidation} from "@/lib/validation/sendMessageValidation";
import sendMessageService from "@/services/sendMessageService";
import SendMessageRequest from "@/types/SendMessageRequest";
import {zodResolver} from "@hookform/resolvers/zod";
import {useMutation} from "@tanstack/react-query";
import {useForm} from "react-hook-form";
import {toast} from "sonner";


export default function useSendMessage() {
    const {register, handleSubmit, formState: {errors}} = useForm({resolver: zodResolver(sendMessageValidation)});

    const {mutate, isPending, isError, error, isSuccess} = useMutation({
        mutationFn: (data: SendMessageRequest) => sendMessageService(data),
        onError: (error: Error) => {
            toast.error(apiError(error).message);
        },
        onSuccess: (data) => {
            if(data && data.status) {
                toast.success('Your message has been sent successfully.');
            }
        }
    });

    const onSubmit = async(data: SendMessageRequest) => {
        mutate(data);
    };

    return {register, handleSubmit, errors, onSubmit, isPending, isError, error, isSuccess};
}
