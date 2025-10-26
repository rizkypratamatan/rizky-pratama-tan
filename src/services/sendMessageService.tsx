import apiClient from "@/lib/api-client";
import apiToken from "@/lib/api-token";
import {BaseResponse} from "@/types/interfaces/BaseResponse";
import {SendMessageRequest} from "@/types/interfaces/SendMessageRequest";


const sendMessageService = async(params: SendMessageRequest) => {
    params.token = apiToken('/site/send-message/');
    const {data} = await apiClient.post<BaseResponse>('/site/send-message/', params);

    return data;
};

export default sendMessageService;
