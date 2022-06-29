import styled from "styled-components";

export const Container = styled.div`
    background:#f8f8f8;
    margin: 0 auto;
    min-height:90vh;
    display:flex;
    flex-direction: column;
    h1{
        color:#004056;
        text-align:left;
        padding: 1.5rem 1.9rem;
        margin-top: 3rem; 
    }
`;

export const Content = styled.div`
    display: flex;
    flex-direction:column;
    justify-content:flex-end;
    a{
        color:#74ceb7;
    }
    span{
        text-align:left;
        color:#004056;
    }
    .divButtonAvance{
        width:75%;
        display:flex;
        justify-content:flex-end;

        @media(max-width: 660px){
            width:100%;
            justify-content:center;
        }
        button{
            width:100%;
            height:2.25rem;
            color:#2c858d;
            background:#f8f8f8;
            cursor: pointer;
            border:1px solid #2c858d;
            border-radius: 33px;

            &:hover{
                color:#f8f8f8;
                background:#2c858d;
            }
            &:disabled:hover{
                color:#2c858d;
                background:#f8f8f8;
                cursor:not-allowed;
            }
        }
    }
    .divTerms{
        display:flex;
        justify-content:flex-end;
        gap:0.5rem;
        width:73.5%;
        margin:1.5rem;
        @media(max-width:660px){
            width:50%;
            margin:1.5rem auto;
        }
    }

`;

export const Form = styled.form`
   .divFormRegister{
        width:45%;
        display:flex;
        flex-direction:column;
        gap:0.5rem;
        background:#fff;
        margin:auto;
        box-shadow:0px 3px 6px #00000029 ;
        border-radius:13px;
        padding:1.5rem 3rem;
        padding-bottom:3rem;
        @media(max-width:1000px){
            gap:1rem;
        }    
   }
`;
export const FormColum = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
   grid-gap:3rem;

   @media(max-width:1000px){
        grid-template-columns:1fr;
        gap:1rem;
   }
`;