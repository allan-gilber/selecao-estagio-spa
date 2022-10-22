import styled from 'styled-components';
import backgroundContact from '../../data/assets/images/rodape-desktop.jpg';

export const ContactSection = styled.footer`
    background-image: url(${backgroundContact});
    background-size: 100%;
    width: 100%;
    height: 40%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: var(--register-btn-color);
    padding-bottom: 1rem;
    padding-top: auto;
    aside {
        width: 30%;
        font-family: Roboto-Light;
        font-size: 1.5rem;
        color: var(--background-white-color);
        text-align: center;
        line-height: 200%;
    }
`;

export const TitleBox = styled.div`
    height: 15%;
    width: 53%;
    h3{
        display: flex;
        justify-content: center;
        text-align: center;
        justify-content: center;
        font-size: 3rem;
        color: var(--background-color);
        font-weight: 600;
    }
`;

export const TableBox = styled.section`
    position: relative;
    width: 55%;
    height: 50%;
    overflow-y: hidden;
    padding: 0 0 5% 0;
    .ant-spin-tex{
        font-family: Heveltica-Condensed;
    }
`;

export const RegisterListContainer = styled.section`
    background-color: var(--background-white-color);
    height: max(100vh, 640px);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    padding-top: 2%;
    overflow: hidden;
    font-size: 32rem;

    table {
        width: 100%;
        font-size: 1.5rem;
        text-align: center;
        border-collapse: collapse;
        table-layout: fixed;
    }

    table thead th {
        font-family: Roboto-Regular;
        font-weight: 600;
        color:var(--column-title-color);
        height: 4rem;
    }

    table thead th:first-child {
        width: 6rem;
    }

    table tbody td{
        font-family: Heveltica-Condensed;
        font-weight: 500;
        color:var(--table-information-color);
        height: 4rem;
        padding: 0 1%;
    }

    table tbody td, table thead th {
        border: min(0.3rem, 2px) solid var(--background-color);
    }

     table thead tr:first-child th {
        border-top: 0;
    }

    table tr:last-child td {
        border-bottom: 0;
    }

    table tr td:first-child{
        color:var(--column-title-color);
    }

    table tr td:first-child,
    table tr th:first-child {
        border-left: 0;
    }

    table tr td:last-child {
        font-family: Roboto-Light;
        font-weight: 600;
    }

    table tr td:last-child,
    table tr th:last-child {
        border-right: 0;
    }
`;