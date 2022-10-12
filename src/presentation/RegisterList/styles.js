import styled from 'styled-components';
import backgroundContact from '../../data/assets/images/rodape-desktop.jpg';

export const ContactSection = styled.footer`
    background-image: url(${backgroundContact});
    background-size: 100%;
    width: 100%;
    height: 30%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: var(--register-btn-color);
    padding-bottom: 1rem;
    padding-top: max(2rem, 2%);
    aside{
        width: 30%;
        height: 20%;
        font-size: max(1rem, 30%);
        color: var(--background-white-color);
        text-align: center;
        line-height: 250%;
    }
`;

export const TitleBox = styled.div`
    height: 20%;
    width: 53%;
    h3{
        display: flex;
        justify-content: center;
        text-align: center;
        justify-content: center;
        font-size: max(4rem, 80%);
        color: var(--background-color);
        font-weight: normal;
    }
`;

export const TableBox = styled.section`
    width: 60%;
    height: 50%;
    overflow-y: hidden;
`;

export const RegisterListContainer = styled.section`
    background-color: var(--background-white-color);
    height: max(100vh, 640px);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    padding-top: 5%;
    overflow: hidden;
    font-size: 8rem;

    table {
        width: 100%;
        height: 50%;
        font-size: max(2rem, 30%);
        text-align: center;
        border-collapse: collapse;
    }

    table thead th{
        font-family: Roboto-Regular;
        font-weight: 600;
        color:var(--column-title-color);
    }

    table tbody td{
    font-family: Heveltica-Condensed;
    font-weight: 500;
    color:var(--table-information-color);
    }

    table tbody td, table thead th {
        border: min(0.3rem, 2px) solid var(--background-color);
        height: 4rem;
        min-height: 4rem;
    }

     table thead tr:first-child th {
        border-top: 0;
    }

    table tbody tr td {
        min-width: 7rem;
    }
    table tbody tr td:first-child {
        width: 4rem;
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
        font-weight: 500;
    }

    table tr td:last-child,
    table tr th:last-child {
        border-right: 0;
    }
`;