import styled from "styled-components";
import { Link } from "react-router-dom";


export const Container = styled.header`
    grid-area: header;
    background: #008B45;

    height: 105px;
    width: 100%;

    border-bottom-width: 1px;
    border-bottom-style: solid;
    border-bottom-color: ${({ theme }) => theme.COLORS.WHITE};

    display: flex;
    justify-content: space-between;

    padding: 0 80px;

     
`;  

export const Profile = styled(Link)`
    display: flex;
    align-items: center;

    > img {
        width: 56px;
        height: 56px;
        border-radius: 50%;
    }

    > div {
        display: flex;
        flex-direction: column;
        margin-left: 16px;
        line-height: 24px;
        color: #FFF
        
    }

    span {
        font-size: 14px;
        color: #F4EDE8;
    
    strong {
        font-size: 18px;
        color: #008B45;

    }        

    }
`;


export const Logout = styled(Link)`
    border: 0;
    background: 0;
    margin: 28px;

    >svg {
        color: ${({ theme }) => theme.COLORS.GRAY_100};
        font-size: 36px;
    }
`;
