import BaseRequest from "@/types/BaseRequest";


export default interface SendMessageRequest extends BaseRequest {
    email: string;

    message: string;

    name: string;
}
