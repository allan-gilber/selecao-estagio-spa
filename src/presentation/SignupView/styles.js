import styled from 'styled-components';

export const SignupViewContainer = styled.section`
    background-color: var(--background-color);
    height: max(100vh, 640px);
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
width: 40%;
height: 80%;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;

header {
    height: 30%;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
}

h3{
    font-size: 2rem;
    color: var(--text-color);
    font-weight: normal;
}

#register-button-size{
    height: min(3rem, 30%);
    width: max(5rem, 55%);
    margin-top: 2rem;
    padding: 0.1rem 0.1rem;
    span{
        font-size: 200%;
    }
}
`;