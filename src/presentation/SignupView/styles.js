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

// const teste = styled.div`
// .content-table{
//     border-collapse: collapse;
//     margin: 25px 0;
//     font-size: 0.9em;
//     min-width: 400px;
// }

// .content-table thead tr {
//     text-align: left;
//     font-weight: bold;
// }
// .content-table th, .content-table td{
//     padding: 12px 15px;
// }

// .content-table tbody tr {
//     border-bottom: 1px solid gray ;
// }
// .content-table tbody tr: :nth-of-type(even){
//     background-color: gray;
// }
// `;

/*
cell vertical alignment top middle bottom
cell horizontal alignment left center right
*/