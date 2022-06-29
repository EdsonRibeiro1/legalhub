import { Container, Content, Form, FormColum} from "./style";
import { Input } from "../../components/Input";
import { useState, useEffect } from "react";
import * as yup from 'yup';
import { useForm, useWatch } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import axios from "axios";
import { encryptPassword } from "../../utils/encryptPassword";
import { unMask } from "../../utils/removeMask";
import { cpf, cnpj } from "cpf-cnpj-validator";
import { UserController } from "../../controller/UserController";

interface IValues{
  document:string;
  name:string;
  lastName:string;
  email:string;
  password:string;
}

export function Register() {
  const maskCPF = "999.999.999.99";
  const maskCNPJ = "99.999.999/9999-99";
  const[defaultValues]= useState({
    document:"",
    name:"",
    lastName:"",
    email:"",
    password:"",
    confirmPassword:""
  });
  const [data,setData]=useState([]);
  const baseUrl = "https://localhost:5001/api/users/register";

  const[mask, setMask]=useState("");
  const[isValidDocument, setIsValidDocument]= useState(false);

  const dataPost = async(form:IValues)=>{
    if (isValidDocument) {
      const resultEmail = await UserController.findByEmail(form.email);
      const resultDocument = await UserController.findByDocument(unMask(form.document));
      if (!resultEmail && !resultDocument) {
          await axios.post(baseUrl, { ...form, password: encryptPassword(form.password), document: unMask(form.document) })
              .then(response => {
                  setData(data.concat(response.data))
              }).catch(error => {
                  console.log(error)
              })
      }
      else {
          if (resultEmail) 
          {
              setError("email", {
                  message: "Email já cadastrado"
              })
          }
          if(resultDocument)
          {
              setError("document", {
                  message: "Documento já cadastrado"
              })
          }
      }

    }
    else {
      setError("document", {
          message: "Documento não é válido"
      })
    }
  };
  
  const [isVerified, setIsVerified] = useState(false);
  const handleOnChange = () => {
    setIsVerified(!isVerified);
  }

  const validationSchema = yup.object().shape({
    document: yup.string().required("O campo documento é obrigatório"),
    name: yup.string().required("O campo nome é obrigatório"),
    lastName: yup.string().required("O campo sobrenome é obrigatório"),
    email: yup.string().required("O campo e-mail é obrigatório").email("Digite um e-mail válido"),
    password: yup.string().required("O campo senha é obrigatório").min(6,"A senha deve conter no mínimo 6 digítos"),
    confrimPassword: yup.string().oneOf([yup.ref("password"),null],"Senhas não coincidem")
  });
  const{handleSubmit, formState:{errors}, control, setError}= useForm({defaultValues, resolver: yupResolver(validationSchema)});

  const document = useWatch({
    control,
    name:"document",
  });

  useEffect(()=>{
    if(document.length <=14){
      setMask(maskCPF)
    }
    else{
      setMask(maskCNPJ)
    }
  },[document]);

  useEffect(()=>{
    let isValid = false;
    if(document.length === 18){
      isValid = cpf.isValid(document);
      setIsValidDocument(isValid);
    }else if(document.length === 11){
      isValid = cnpj.isValid(document);
      setIsValidDocument(isValid)
    }else{
      setIsValidDocument(false);
    }
  },[document]);
  
  return (
    <>
      <Container>
        <h1>Cadastro</h1>
          <Content>  
              <Form onSubmit={handleSubmit(dataPost)}>
                <div className="divFormRegister">
                    <Input mask={mask} name="document" control={control} type="text" placeholder="CPF ou CPNJ" error={errors.document && errors.document.message} />
                    <FormColum>
                      <div>
                        <Input name="name" control={control} type="text" placeholder="Nome" error={errors.name?.message} />
                      </div>
                      <div>  
                        <Input name="lastName" control={control} type="text" placeholder="Sobrenome" error={errors.lastName?.message}/>
                      </div>  
                    </FormColum>
                    <Input name="email" control={control} type="text" placeholder="E-mail" error={errors.email?.message} />
                    <FormColum>
                      <div>
                        <Input name="password" type="password" control={control} placeholder="Senha" error={errors.password?.message} />
                      </div>
                      <div>                    
                        <Input name="confirmPassword" control={control} type="password" placeholder="Confirmar Senha" error={errors.confirmPassword?.message} />
                      </div>   
                    </FormColum>
                </div>
                <div className="divTerms">
                  <input type="checkbox" onChange={handleOnChange}></input>
                  <span>Li e concordo com a <a href="aa" target="blanck">política de privacidade </a></span>
                </div>
                <div className="divButtonAdvance">
                  <button type="submit" disabled={!isVerified}>Avançar</button>
                </div>
              </Form> 
          </Content> 
      </Container>
    </>  
  );
}