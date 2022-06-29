import styled from "styled-components";

export const Container = styled.div`
  padding: 1em 2rem;
  display: flex;
  flex-direction: column;

  .disabled {
    filter: grayscale(1);
    opacity: 0.4;
    button {
      :hover:disabled {
        cursor: not-allowed;
        color: #fff;
        background-color: #2c858d;
        border: 1px solid #2c858d;
      }
    }

    Input {
      &:hover:disabled {
        &::placeholder {
          font-size: 1.6rem;
        }
      }
    }
  }

  h1 {
    width: 100%;
    height: 40px;
    color: #004056;
    opacity: 1;
    text-align: left;
    margin-bottom: 5rem;
  }
`;

export const ColContent = styled.div`
  width: 50%;
  display: grid;
  gap: 2rem;

  @media (max-width: 574px) {
    height: auto;
    width: auto;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;

export const Content = styled.div`
  width: 95%;
  min-height: 400px;
  display: flex;
  gap: 10rem;
  margin-left: 5%;

  @media (max-width: 574px) {
    height: auto;
    width: auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1rem;
  }
`;

export const SendEmail = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  background: #ffffff;
  box-shadow: 0px 3px 6px #00000029;
  border: 0.5px solid #ffffff;
  border-radius: 17px;
  opacity: 1;

  .txtSend {
    color: #004056;
    display: grid;
    grid-template-columns: 1fr 15fr;
    gap: 1rem;
    padding: 2rem 1.5rem 2rem 1.5rem;

    p {
      margin: 0;
      font-size: 1.2rem;
    }
  }

  .inputSend {
    display: flex;
    align-items: flex-end;
    padding-left: 3.1rem;
    justify-content: space-between;

    input {
      width: 90%;
      height: 2rem;
      border: none;
      border-bottom: 0.01rem solid #8d8d8d;
      outline: none;
      font-size: 1.6rem;

      &:hover {
        &::placeholder {
          transition: 0.3s;
          font-size: 1.5rem;
        }
      }
    }

    .btnSend {
      padding: 0 2.5rem 0 2rem;
      button {
        width: 144px;
        height: 25px;
        color: #fff;
        border: 1px solid #2c858d;
        background: #2c858d;
        border-radius: 27px;
        opacity: 1;
        font-size: 0.8rem;

        transition: 0.3s;
        &:hover {
          color: #2c858d;
          background-color: transparent;
          border: 1px solid #2c858d;
          cursor: pointer;
        }
      }
    }
  }
  @media (max-width: 574px) {
    height: auto;
    width: auto;
    display: flex;
    align-items: center;

    .inputSend {
      display: flex;
      flex-direction: column;
      gap: 1rem;
      padding: 0;
      align-items: center;
      justify-content: center;

      Input {
        width: 100%;
      }
    }
  }
`;

export const CodRecovery = styled.div`
  display: flex;
  width: 100%;
  background: #ffffff;
  box-shadow: 0px 3px 6px #00000029;
  border: 0.5px solid #ffffff;
  border-radius: 17px;
  opacity: 1;
  color: #004056;

  .ContentInputs {
    width: 100%;
    .DivTitle {
      display: flex;
      gap: 1rem;
      padding: 1rem 2rem;
      h1 {
        width: 2.6rem;
        text-align: right;
        font-size: 2.3rem;
        margin: 0;
      }

      h2 {
        margin: 0;
      }

      p {
        font-size: 1.2rem;
        margin: 0 0.3rem;
      }
    }

    .inputsCod {
      display: grid;
      grid-template-columns: 1fr;
      margin: auto 6rem;

      input[type="number"]::-webkit-inner-spin-button {
        -webkit-appearance: none;
      }
      input[type="number"] {
        -moz-appearance: textfield;
        appearance: textfield;
      }

      input {
        width: 50px;
        height: 54px;
        border: 1px solid #004056;
        border-radius: 10px;
        opacity: 1;
        color: #004056;
        font-size: 2rem;
        text-align: center;
      }
    }
  }

  .BtnVerify {
    display: flex;
    align-items: flex-end;
    padding: 0 2rem 3.5rem 2rem;

    button {
      width: 144px;
      height: 25px;
      color: #fff;
      border: 1px solid #2c858d;
      background: #2c858d;
      border-radius: 27px;
      opacity: 1;
      font-size: 0.8rem;

      transition: 0.3s;
      &:hover {
        color: #2c858d;
        background-color: transparent;
        border: 1px solid #2c858d;
        cursor: pointer;

      }
    }
  }
  @media (max-width: 574px) {
    height: auto;
    width: auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1rem;

    .BtnVerify {
      padding: 0;
    }
  }
`;

export const NewPassword = styled.div`
  width: 28%;
  min-height: 400px;
  background: #ffffff;
  box-shadow: 0px 3px 6px #00000029;
  border-radius: 16px;
  opacity: 1;

  .Title {
    padding: 2rem 1.5rem;
    display: grid;
    grid-template-columns: 1fr 15fr;
    color: #004056;
    gap: 0.5rem;
  }
h2{
    margin: 0;
}
svg{
    margin-top:0.3rem;
}

  .InputPassword {
    display: grid;
    gap: 5rem;
    padding: 0 2rem 0 1rem;

    input {
      width: 90%;
      padding: 2rem 0.2rem 1rem 0rem;
      height: 2rem;
      border: none;
      border-bottom: 0.01rem solid #8d8d8d;
      font-size: 1.6rem;
      padding-top: 1.5rem;
      background-color: #fff;

      &:hover {
        &::placeholder {
          transition: 0.3s;
          font-size: 1.5rem;
        }
      }
    }
  }
  .btnUpdatePassword{
      width: 151px;
      height: 27px;
      color: #fff;
      border: 1px solid #2c858d;
      background: #2c858d;
      border-radius: 27px;
      opacity: 1;
      font-size: 0.8rem;
      margin:auto;
      &:hover {
        color: #2c858d;
        background-color: transparent;
        border: 1px solid #2c858d;
        cursor: pointer;
      }
    }


  @media (max-width: 574px) {
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1rem;

    .InputPassword {
      padding: 0;
    }

  }
`;
