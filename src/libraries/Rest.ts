import {Core} from "./Core.ts";
import {Encryption} from "./Encryption.ts";


export class Rest {
    public static initializeRequest(data: any, path: string): any {
        const date: Date = new Date();
        data.timestamp = Core.toIsoDatetimeString(date);
        data.token = Encryption.rsaEncrypt(path + '~' + data.timestamp);

        return {
            method: 'POST',
            headers: new Headers({
                'Content-Type': 'application/json',
                'pld-key': import.meta.env.PLD_API_KEY!
            }),
            body: JSON.stringify(data)
        };
    }
}
