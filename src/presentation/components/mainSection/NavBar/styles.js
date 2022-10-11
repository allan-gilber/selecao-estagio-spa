import styled from 'styled-components';

export const NavBarContainer = styled.nav`
    height: 15%;   
    width: 54%;
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

export const ListStyle = styled.ul`
    color: white;
    height: max(3.5rem, 7%); 
    width: 40%;
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    align-items: center;
    font-size: 1.4rem;
    border-bottom: 3px solid transparent;
    margin: 0;

    li{
        text-align: right;
        font-family: Heveltica25-Ultra-Light-Regular;
        margin-left: 2rem;
        cursor: pointer;
        z-index: 2;
        border-radius: 0;
        :hover {
            border-bottom: 2px solid gray;
        }

        :active{
            border-bottom: 2px solid gray;
        }
    }     
`;

export const Logo = styled.img`
    height: min(3rem, 30%); 
    /* width: max(15%, 5rem); */
`;