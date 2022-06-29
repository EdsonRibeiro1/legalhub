import  styled from 'styled-components';


export const Container = styled.div`
    display:flex;
    justify-content:center;

    input{
        margin-right:10px;
        font-size:2rem;
        text-align:center;
        width:60px;
        height:60px;
        border: 1px solid #004056;
        color: #004056;
        border-radius:15px;
        text-transform:uppercase;
        outline:none;
    }

    input:not(:read-only):focus{
        border:1px solid #004056;
    }

    input:last-child{
        margin-right:0;
    }
    input::-webkit-outer-spin-button,
    input::-webkit-inner-spin-button{
        -webkit-appearance:none;
        margin:0;
    }
    input[type='number']{
        -moz-appearance:textfield;
    }
    .with-error{
        border: 1px solid red;
    }
`;