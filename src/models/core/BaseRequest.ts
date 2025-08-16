export class BaseRequest {
    public token: string | undefined;


    constructor(token: string | undefined) {
        this.token = token;
    }
}
