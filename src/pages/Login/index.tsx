import { Input } from "../../components";
import { Container, Content, Form } from "./style";
import ReCAPTCHA from "react-google-recaptcha";
import { useState } from "react";
import axios from 'axios';
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { UserController } from "../../controller/UserController"

interface IValues{
    email:string;
    password:string;
}

export function Login() {

    const[defaultValues] = useState({
        email:"",
        password:"",
    });

    const baseUrl = "https://localhost:5001/api/users/login";
    const [data, setData] = useState([]);

    const loginPost = async(form:IValues)=>{
        const result = await UserController.findByEmail(form.email)
        if(result){
            await axios.post(baseUrl, form)
                .then(response =>{
                    setData(data.concat(response.data))
                    console.log(response.data);
                }).catch(error =>{
                    console.log(error)
                    alert("Credenciais inválidos")
                })
        }
        else{
            setError("email",{
                message: "Email não cadastrado"
            });
        }
}

    const [isVerified, setIsVerified] = useState(false);

    const handleOnChange = (value: string | null) => {
        console.log("Captcha value:", value);
        setIsVerified(!isVerified);
    }
    const validationSchema = yup.object().shape({
        email: yup.string().required("O campo é obrigatorio").email("Digite um e-mail válido"),
        password: yup.string().required("O campo é obrigatorio").min(6,"Senha deve ter no minimo 6 dígitos"),
    });

    const {handleSubmit, formState: { errors }, control, setError } = useForm({ defaultValues, resolver: yupResolver(validationSchema) });


    return (
        <Container>
            <h1>Login</h1>
            <Content>
                <Form onSubmit={handleSubmit(loginPost)}>
                    <div className="divFormLogin">
                        <Input name="email" control={control} type="email" placeholder="E-mail" error={errors.email?.message} />
                    
                        <Input type="password" control={control} placeholder="Senha" name="password" error={errors.password?.message} />
                        <div className="divRecaptcha">
                            <ReCAPTCHA
                                sitekey="6LcjT20gAAAAABkZQHciQeT0B6jRVoKql1chcN3d"
                                onChange={handleOnChange}
                            />
                        </div>
                    </div>
                    
                    <div className="divButtonEnter" >
                        <button type="submit" disabled={!isVerified}>Entrar</button>
                    </div>
                    <div className="divNewPassword">
                        <span className="spanPassword">Esqueceu a senha?<a href="/recoveryPassword">Clique aqui</a></span>
                    </div>
                </Form>
            </Content>
        </Container>
    );
}