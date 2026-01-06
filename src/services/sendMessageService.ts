import {apiClient} from "@/lib/apiClient";
import apiToken from "@/lib/apiToken";
import BaseResponse from "@/types/BaseResponse";
import SendMessageRequest from "@/types/SendMessageRequest";


export default async function sendMessageService(params: SendMessageRequest) {
    params.token = apiToken('/site/send-message');
    const {data} = await apiClient.post<BaseResponse>('/site/send-message', params);

    return data;
}
