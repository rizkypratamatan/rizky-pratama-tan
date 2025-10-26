import {BaseRequest} from "@/types/interfaces/BaseRequest";


export interface SendMessageRequest extends BaseRequest {
    email: string;

    message: string;

    name: string;
}
