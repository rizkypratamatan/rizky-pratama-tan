import {BaseRequest} from "../core/BaseRequest.ts";


export class SendMessageRequest extends BaseRequest {
    public email: string | undefined;

    public message: string | undefined;

    public name: string | undefined;


    constructor(token: string | undefined, email: string | undefined, message: string | undefined, name: string | undefined) {
        super(token);
        this.email = email;
        this.message = message;
        this.name = name;
    }
}
