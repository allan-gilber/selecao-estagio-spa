import styled from 'styled-components';
import backgroundContact from '../../data/assets/images/rodape-desktop.jpg';

export const ContactSection = styled.footer`
    background-image: url(${backgroundContact});
    background-size: 100%;
    width: 100%;
    height: 30%;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    align-items: center;
    background-color: var(--register-btn-color);
    padding-bottom: 1rem;
    aside{
        font-size: 1rem;
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
        font-size: 3rem;
        color: var(--background-color);
        font-weight: normal;
    }
`;

export const TableBox = styled.section`
    width: 60%;
    height: 50%;
    position: relative;
    overflow-y: scroll;
`;

export const RegisterListContainer = styled.section`
    position: relative;
    background-color: var(--background-white-color);
    height: max(100vh, 640px);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    padding-top: 5%;
    overflow: hidden;
    img{
        height: min(10%, 2rem);
        position: absolute;
        right: min(2rem, 5%);
        top: 55%;
        cursor: pointer;
    }
    table {
        width: 100%;
        height: 50%; 
        text-align: center;
        border-collapse: collapse;
    }

    table thead th{
        font-family: Roboto-Regular;
        font-weight: 500;
        color:var(--column-title-color);
      }

      table tbody td{
        font-family: Heveltica-Condensed;
        font-weight: 500;
        color:var(--table-information-color);
      }

    table tbody td, table thead th {
        border: 1px solid var(--background-color);
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