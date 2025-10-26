import rsaEncrypt from "@/lib/rsa-encrypt";


const apiToken = (path: string) => {
    return rsaEncrypt(path + '~' + new Date().toISOString());
};

export default apiToken;
