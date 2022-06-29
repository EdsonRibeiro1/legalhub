import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Login } from "../pages/Login"
import { RecoveryPassword } from "../pages/PasswordRecovery"


export const Router =() =>{
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Login/>}/>
                <Route path="/recoveryPassword" element={<RecoveryPassword/>}/>
            </Routes>
        </BrowserRouter>
    )

}