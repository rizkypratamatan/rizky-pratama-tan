import forge from "node-forge";


export class Encryption {
    public static rsaEncrypt(text: string): string {
        const rsa: forge.pki.rsa.PublicKey = forge.pki.publicKeyFromPem(import.meta.env.PLD_ENCRYPTION_RSA_PUBLIC_KEY as string);
        const raw: string = rsa.encrypt(text);

        return forge.util.encode64(raw);
    }
}
