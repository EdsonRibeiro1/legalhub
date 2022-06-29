import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction:column;
  width: 100%;

  input{
    width: 100%;
    height: 2.5rem;
    text-align: left;
    font-size: 1.3rem;
    color: #8d8d8d;
    opacity: 1;
    border: none;
    border-bottom: 0.01rem solid #8d8d8d;
    outline: none;
    &::placeholder {
      color: #8d8d8d;
    }
  }
  .buttonViewPassword{
    background: transparent;
    border:none;
    color:#2C858D;
    border-bottom: 0.1rem solid #8d8d8d;
    & svg{
      font-size: 1.3rem;
    }
  }
  .divMassageError{
    color:#004056;
  }
  .divImputMassage{
    display:flex;
  }
`;
