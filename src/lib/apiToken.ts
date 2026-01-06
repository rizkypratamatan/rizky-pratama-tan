import rsaEncrypt from "@/lib/rsaEncrypt";


export default function apiToken(path: string) {
    return rsaEncrypt(path + '~' + new Date().toISOString());
}
