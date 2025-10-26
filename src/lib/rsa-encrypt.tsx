import forge from "node-forge";


const rsaEncrypt = (text: string) => {
    const rsa: forge.pki.rsa.PublicKey = forge.pki.publicKeyFromPem(process.env.NEXT_PUBLIC_ENCRYPTION_RSA_PUBLIC_KEY as string);
    const raw: string = rsa.encrypt(text);

    return forge.util.encode64(raw);
};

export default rsaEncrypt;
