import styled from 'styled-components';
import MainBackgroundImg from '../../data/assets/images/main-back-ground.jpg';

export const MainSectionContainer = styled.section`
    background-image: url(${MainBackgroundImg});
    height: max(100vh, 640px);
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
`;