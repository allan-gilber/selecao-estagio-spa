import styled from 'styled-components';

export const SignupViewContainer = styled.section`
    background-color: var(--background-color);
    background-size: 100% 100%;
    background-repeat: no-repeat;
    height: max(100vh, 640px);
    width: 100vw;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    font-size: 32rem;

    // Antd Class Overrides
    .ant-form {
        width: 100%;
        height: 60%;
        padding: 10% 0;
    }

    .ant-form-item {
        margin: 0;
        padding-top: 2rem;
    }

    .ant-form-item-label{
        padding: 0;
        height: 30%;
        label{
            font-family: Roboto-Regular;
            font-size: max(1rem, 2vh);
            color: var(--background-white-color);
        }
    }

    .ant-btn{
        width: fit-content;
        height: fit-content;
        color: var(--background-color);
        font-size: 3%;
        font-weight: 400;
        text-decoration: none;
        border-width: none;
        border: none;
        background-color: var(--register-btn-color);
    }
    .ant-form-item-control {
        height: 40%;
    }

    /* .ant-form-item-control-input, .ant-form-item-row, .ant-form-item-control-input-content{
        height: 100%;
    } */

    .ant-input{
        font-family: Heveltica-Condensed;
        font-size: max(1rem,2vh);
        height: 100%;
        color: var(--background-white-color);
        padding: 0;
        border-bottom-width : 5px;
        background-color: transparent;
        border: none;
        border-bottom: 0.1px solid var(--background-white-color);
        ::placeholder {
            font-family: Heveltica-Condensed;
            color: var(--background-white-color);
        }
    }

    // CADASTRAR button class
    .ant-btn-default {
        height: max(3rem, 10%);
        width: max(5rem, 60%);
        padding: 0.1rem 0.1rem;
        span{
            font-size: 350%;
            font-family: Heveltica25-Ultralight-25;
        }
    }
`;

export const FormContainer = styled.article`
    width: 35%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;

    header {
        height: 15%;
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        margin-top: 5%;
    }

    h3 {
        font-size: 10%;
        color: var(--text-color);
        font-weight: 600;
        margin: 0;
    }
`;