import React, {useEffect , useState, useRef} from 'react';
import { Container } from './style';

interface InputCodeProps{
    id?:string;
    length:number;
    disabled:boolean;
    clearOn?:any;
    error?:boolean;

    onComplete:(code:string)=>void;
}

const InputCode:React.FC<InputCodeProps>=({
    id,
    disabled,
    length,
    clearOn,
    error,
    onComplete,
})=>{
    const[code, setCode]= useState([...Array(length)].map(()=>''));
    const inputs = useRef<(HTMLInputElement | null)[]>([]);
    useEffect(()=>{
        setCode([...Array(length)].map(()=>''));
        onComplete('');
    },[clearOn]);

    const processInput =(
        e:React.ChangeEvent<HTMLInputElement>,
        slot:number
    ) => {
        const num = e.target.value;
        if(num === '' ||/[^a-zA-Z0-9]/.test(num))return;
        const newCode = [...code];
        newCode[slot] = num;
        setCode(newCode);
        if(slot !== length -1){
            const input = inputs.current[slot + 1] as any;
            try{
                input.selectionStart = 1;
                input.selectionEnd = 1;
            }catch{
                //do nothing
            }
            input?.focus();
        }
        if (newCode.every((number:string)=>number !== ''))
            onComplete(newCode.join(''));
        else onComplete('');
    };

    const onKeyUp = (e: React.KeyboardEvent<HTMLInputElement>, slot:number) =>{
        let input;
        if(e.key === 'Backspace'){
            onComplete('');
            e.preventDefault();
            const newCode = [...code];
            const move = !code[slot]&& slot !== 0 ? -1 : 0;
            newCode[slot = move] ='';
            setCode(newCode);
            input = inputs.current[slot + move] as any;
        } else if (e.key ==='ArrowRight' || e.key === ' ArrowDown') {
            e.preventDefault();
            input = inputs.current[slot + 1]as any;
        }else if (e.key ==='ArrowLeft' || e.key === 'ArrowUp'){
            e.preventDefault();
            input = inputs.current[slot - 1] as any;
        }

        if(input){
            try{
                input.selectionStart = 1;
                input.selectionEnd = 1;
            }catch{
                //aaaaa
            }
            input?.focus();
        }
        
    };

    return(
        <Container id={id}>
            {
                code.map((num, idx) =>{
                    return(
                        <input 
                            key={idx}
                            className={`${error ? 'with-error' : ''}`}
                            type="text"
                            inputMode="numeric"
                            maxLength={1}
                            readOnly={disabled}
                            value={num}
                            onChange={(e) => processInput(e, idx)}
                            onKeyUp={(e)=>onKeyUp(e,idx)}
                            ref={(ref)=> inputs.current.push(ref)}  
                        />
                    );
                })
            }
        </Container>
    );
};

export default InputCode;