import { Container } from "./style";
import { InputHTMLAttributes, useState } from "react"
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";
import { toPattern } from 'vanilla-masker'
import { useController } from "react-hook-form";

type Props = InputHTMLAttributes<HTMLInputElement> & {error? :string, mask? : string , name: string, control:any}
export const Input = (({type, error, mask, name, control,...props}:Props)=> {
  const{
    field:{value, ref, onChange},
  }= useController({
    name,
    control,
  });
  const[showPassword, setShowPassword]= useState(false)
  return(
    <Container>
      <div className="divImputMassage">
        <input type={type==="password" && showPassword ? "text" : type}{...props} ref={ref} onChange={onChange} value={mask ? toPattern(value, mask): value} /> 
        {type === "password" && <button className="buttonViewPassword" type="button" onClick={()=>setShowPassword(state=> !state)}>{showPassword ? <FaRegEyeSlash/> : <FaRegEye/>}</button>}
      </div>
      <>
        {error && (<span className="divMassageError"> {error} </span>)}
      </>
    </Container>
  ) 
});