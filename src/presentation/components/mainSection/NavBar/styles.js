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
    width: max(5rem, 40%);
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    align-items: center;
    font-size: 1.4rem;
    border-bottom: 3px solid transparent;
    margin: 0;
    font-size: max(3rem, 40%);

    li{
        width: fit-content;
        text-align: right;
        font-family: Heveltica25-Ultra-Light-Regular;
        margin-left: max(2rem, 10%);
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
    height: min(5rem, 40%);
`;