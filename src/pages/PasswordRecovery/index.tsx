import { CodRecovery, Container, Content, SendEmail, NewPassword, ColContent } from "./styles";
import React, { useState } from 'react';
import InputCode from "../../components/InputCod";
import { Input } from "../../components";
import axios from "axios";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { encryptPassword } from "../../utils/encryptPassword";
import { useNavigate } from "react-router-dom";
import { sendCode } from "../../controller/EmailController"
import { ReactComponent as IconPassword } from "../../assets/IconPassword.svg";
import { ReactComponent as SendIcon } from "../../assets/FeatherSend.svg";
import { UserController } from "../../controller/UserController";

interface IValues {
    email: string;
    newPassword: string;
}


export function RecoveryPassword() {


    const generateVerificationCode = () => {
        let c = '';
        for (let i = 0; i < 4; i++) {
            c += Math.floor(Math.random() * 10).toString();
        }
        return c;

    };

    const [defaultValues] = useState({
        email: "",
        newPassword: "",
        confirmPassword: "",
    });

    const updatePassword = async (form: IValues) => {
        console.log(form);
        await axios.put(baseUrl, { ...form, Password: encryptPassword(form.newPassword) })
            .then(response => {
                setData(data.concat(response.data))
                console.log(response.data);
                navigate("/");
            }).catch(error => {
                console.log(error)
            })

    }


    const validationEmailSchema = yup.object().shape({
        email: yup.string().required("O campo e-mail é obrigatório").email("Digite um e-mail válido"),
    });

    const validationPasswordSchema = yup.object().shape({
        newPassword: yup.string().required("O campo senha é obrigatório").min(6, "Senha deve ter no mínimo 6 dígitos"),
        confirmPassword: yup.string().oneOf([yup.ref("newPassword"), null], "Senhas não coincidem")

    });

    const [activeFormNewPassword, setActiveFormNewPassword] = useState(false);
    const [activeForm, setActiveForm] = useState(false);
    const [code, setCode] = useState("");
    const [espectedCode, setEspectedCode] = useState("");


    const navigate = useNavigate();


    const handleEnableForms = async () => {

        const result = await UserController.findByEmail(getValues("email"))

        if(result){
        setActiveForm(true);
        let randomCode = generateVerificationCode();
        sendCode({
            to: getValues("email"),
            subject: "Recuperação de senha",
            description: "Seu código para redefinir a senha é o:",
            subtitle: "Código de recuperação",
            value: randomCode,
        }).then(() => {
            setEspectedCode(randomCode);
        })
    }
    else{
        setError("email", {
            message: "Email não encontrado"
        });
    }

    }

    const verifyCode = () => {
        console.log(code);
        console.log(espectedCode);
        if (code === espectedCode && code !== "") {
            setActiveFormNewPassword(true);
        }
        console.log(activeFormNewPassword);

    }

    const { handleSubmit, formState: { errors }, control, getValues, setError } = useForm({ defaultValues, resolver: yupResolver(activeForm ? validationPasswordSchema : validationEmailSchema) });


    const baseUrl = `https://localhost:5001/api/users/${getValues("email")}`
    const [data, setData] = useState([]);

    return (
        <Container>
            <h1>Recuperação de senha</h1>
            <Content>
                <ColContent>
                    <SendEmail >
                        <div className="txtSend">
                            <SendIcon />
                            <p>Para iniciar a recuperação de senha, coloque o seu e-mail cadastrado para enviarmos um código de recuperação.</p>
                        </div>
                        <form onSubmit={handleSubmit(handleEnableForms)} className="inputSend">
                            <Input name="email" control={control} type="text" placeholder="E-mail" error={errors.email?.message} />
                            <div className="btnSend">
                                <button type="submit">ENVIAR</button>
                            </div>
                        </form>
                    </SendEmail>
                    <CodRecovery className={`${activeForm === false ? 'disabled' : ''}`}>

                        <div className="ContentInputs">

                            <div className="DivTitle">
                                <div className="div">
                                    <h1>@</h1>
                                </div>
                                <div>
                                    <h2>Veja seu e-mail</h2>
                                    <p>Insira o código de recuperação</p>
                                </div>
                            </div>

                            <div className="inputsCod">
                                <InputCode
                                    id="code"
                                    disabled={!activeForm}
                                    length={4}
                                    onComplete={(c) => setCode(c)}
                                />
                            </div>
                        </div>
                        <div className="BtnVerify">
                            <button type="submit" disabled={!activeForm} onClick={verifyCode}>VERIFICAR</button>
                        </div>

                    </CodRecovery>
                </ColContent>
                <NewPassword className={`${activeFormNewPassword === false ? 'disabled' : ''}`}>
                    <div className="Title">
                        <IconPassword/>
                        <h2>Nova Senha</h2>
                    </div>
                    <form className="InputPassword"
                        onSubmit={handleSubmit(updatePassword)}>
                        <div>
                            <Input type="password" control={control} placeholder="Senha" name="newPassword" error={errors.newPassword?.message} disabled={!activeFormNewPassword} />

                            <Input type="password" control={control} placeholder="Confirmar Senha" name="confirmPassword" error={errors.confirmPassword?.message} disabled={!activeFormNewPassword} />
                        </div>
                        <button type="submit" disabled={!activeFormNewPassword} className="btnUpdatePassword">ATUALIZAR SENHA</button>

                    </form>
                </NewPassword>
            </Content>
        </Container>
    );
}