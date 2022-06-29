import axios from "axios";
import { IUser } from "entities";

const baseUrl = "https://localhost:5001/api/users/byemail"
const base ="https://localhost:5001/api/users/bydocument"

const findByEmail = (email: string)=>
new Promise<{user: IUser}> ((resolve,reject)=>{
    axios   
        .get(baseUrl,{params:{email}})
        .then(({data})=>resolve(data))
        .catch(reject);
});
const findByDocument =(document: string)=>
new Promise <{user: IUser}>((resolve,reject)=>{
    axios
        .get(base,{params:{document}})
        .then(({data})=>resolve(data))
        .catch(reject)
});
export const UserController = {findByEmail, findByDocument}