import styled from 'styled-components';

export const NavBarContainer = styled.nav`
    height: 15%;   
    width: 200px;
    max-width: 300px;
    display: flex;
    /* flex-direction: row; */
    justify-content: space-between;
    align-items: center;

    /* ul {
        color: white;
        height: max(3.5rem, 7%); 
        width: 30%;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
    } */

    /* ul li{
        display: inline-block;
        margin-right: 1rem;
    } */
    
    /* ul li::before{
        content: "\2B1F"; 
        color: red; 
        display: inline-block; 
        width: 1em; 
        margin-left: -1em;
    } */
`;

// .tabsLayout{
//     /* width: 30%; */
//     display: flex;
//     justify-content: space-between;
//     color: white;
// }

export const Logo = styled.img`
    height: max(3.5rem, 7%); 
    width: max(20%, 5rem);
`;