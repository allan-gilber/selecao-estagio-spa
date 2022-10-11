import styled from 'styled-components';

export const TitleDisposition = styled.div`
    width: 54%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: left;
    color: var(--text-color);
    article {
        width: 50%;
        margin-top: 15%;
    }
    article span {
        font-size: 4rem;
        width: 100%;
        display: block;
    }
    article p {
        width: 100%;
        word-spacing: 100%;
        font-size: max(100%, 1.5rem);
        word-spacing: 200%;
        display: inline-block;
    }
`;