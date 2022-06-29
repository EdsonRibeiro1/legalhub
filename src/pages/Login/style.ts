import styled from "styled-components";

export const Container = styled.div`
    background: #f8f8f8;
    margin: 0;
    min-height: 90vh;
    display: flex;
    flex-direction: column;
    h1 {
        color: #004056;
        text-align: left;
        padding: 1.5rem 1.9rem;
        margin-bottom: 3rem;
    }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
`;

export const Form = styled.form`
    .divFormLogin{
        width:30%;
        display: flex;
        flex-direction: column;
        gap: 2.3rem;
        background: #fff;
        box-shadow: 0px 3px 6px #00000029;
        border-radius: 13px;
        padding: 2.5rem 3rem;
        margin:auto;
        .divRecaptcha{
            display:flex;
            justify-content:center;
            width:100%;
        }
        @media(max-width: 1000px){
            width:70%;
        }
    }
   
    .divButtonEnter {
        width: 64.5%;
        display: flex;
        justify-content: flex-end;
        button {
            width: 13rem;
            height: 2.25rem;
            margin-top: 2rem;
            color: #2c858d;
            background: #f8f8f8;
            border: 1px solid #2c858d;
            border-radius: 33px;
            &:disabled:hover{
                color: #2c858d;
                background: #f8f8f8;
                cursor: not-allowed;
            }

            &:hover {
                color: #F8F8F8;
                background: #2C858D;
                cursor:pointer;
            }
        }
        @media (max-width: 660px) {
            width: 100%;
            justify-content: center;
        }
    }
    .divNewPassword {
        display: flex;
        justify-content: flex-end;
        gap: 0.5rem;
        width: 65.5%;
        margin: 0.5rem;
        .spanPassword{
            color:#004056; 
            text-align: left;
            text-decoration: underline;
        }
        a{
            color:#2C858D;
        }
        @media (max-width: 660px) {
            width: 100%;
            justify-content:center;
        }
    }
`;