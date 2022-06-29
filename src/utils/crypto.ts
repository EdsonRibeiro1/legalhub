import CryptoJs from 'crypto-js';

export const ecryptoData = (data: any, salt:string)=> 
    CryptoJs.AES.encrypt(JSON.stringify(data),salt).toString();
    export const decryptData = (chiperText: string, salt:string)=>{
    const bytes = CryptoJs.AES.decrypt(chiperText, salt);
    try{
        return JSON.parse(bytes.toString(CryptoJs.enc.Utf8));
    }catch(err){
        return null;
    }
};