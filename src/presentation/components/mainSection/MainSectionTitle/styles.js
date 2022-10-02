import styled from 'styled-components';

export const TitleDisposition = styled.div`
width: 54%;
height: 100%;
display: flex;
flex-direction: column;
align-items: left;
color: var(--text-color);
article{
    width: 50%;
    margin-top: 40%;
}
span{
    font-size: 100%;
    /* min(100%, 5.5rem); */
    width: 100%;
    display: block;
}
p {
    font-size: min(80%);
    display: inline-block;
}
`;