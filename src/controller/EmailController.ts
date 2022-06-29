import axios from "axios";
import { IEmailInputModel } from "inputModel";

export const sendCode = async(email: IEmailInputModel)=>{
    const baseUrl= "https://localhost:5001/api/email/send-password-email"
    new Promise<void>((resolve, reject) =>{
        axios
            .post(baseUrl, email)
            .then(()=>resolve())
            .catch((error: any)=> reject(error));
    });

}