import styled from 'styled-components';

export const SignupViewContainer = styled.section`
    background-color: var(--background-color);
    height: max(100vh, 640px);
    width: 100vw;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    .ant-form{
        width: 100%;
    }
    .ant-btn{
        width: fit-content;
        height: fit-content;
        color: var(--background-color);
        font-size: 100%;
        font-weight: 400;
        text-decoration: none;
        border-width: none;
        border: none;
        background-color: var(--register-btn-color);
    }
`;

export const FormContainer = styled.article`
    width: 35%;
    height: 80%;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;

    header {
        height: 30%;
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    h3{
        font-size: 3rem;
        color: var(--text-color);
        font-weight: 300;
    }

    // Antd Class Overloading
    .ant-form-item-label{
        label{
            font-family: Roboto-Regular;
            color: var(--background-white-color);
        }
    }

    .ant-input{
        font-family: Heveltica-Condensed;
    }

    #register-button-size{
        height: min(5rem, 30%);
        width: max(5rem, 60%);
        margin-top: 2rem;
        padding: 0.1rem 0.1rem;
        span{
            font-size: 350%;
        }
    }
`;