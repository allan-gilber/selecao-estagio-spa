import styled from 'styled-components';

export const TitleDisposition = styled.div`
    width: 51%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: left;
    color: var(--text-color);

    article {
        display: flex;
        justify-content: flex-start;
        width: 50%;
        height: 100%;
        padding-top: 13%;
        font-size: max(7rem, 200%);
        display: inline-block;
    }
    article span {
        font-size: 100%;
        width: 100%;
    }
    article p {
        margin: 0;
        width: 100%;
        font-size: 40%;
        word-spacing: 100%;
    }
`;