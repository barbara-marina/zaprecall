import styled from "styled-components";

export const Container = styled.div`
    width: 100vw;
    height: 50px;

    position: fixed;
    bottom: 0;
    left: 0;
    z-index: 1;

    font-family: 'Recursive';
    font-weight: 400;
    font-size: 12px;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    color: #333333;
    background-color: #FFFFFF;

    box-shadow: 0px -4px 6px rgba(0, 0, 0, 0.05);
`;