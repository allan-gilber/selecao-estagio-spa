import styled from 'styled-components';

export const ScrollButtonContainer = styled.img`
    visibility: hidden;
    opacity: 0;
    position: fixed;
    object-fit: contain;
    width: max(2vw, 3.2rem);
    background-color: var(--background-white-color);
    right: max(5vw, 12rem);
    top: 50vh;
    cursor: pointer;
    border-radius: 50%;
`;