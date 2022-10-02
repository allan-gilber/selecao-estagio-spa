import styled from 'styled-components';

export const NavBarContainer = styled.nav`
width: 54%;
display: flex;
justify-content: space-between;
align-items: center;
margin-top: 2.5rem;

.tabsLayout{
    /* width: 30%; */
    display: flex;
    justify-content: space-between;
    color: white;
}
`;

export const Logo = styled.img`
    height: max(3.5rem, 7%); 
    width: max(20%, 5rem);
`;