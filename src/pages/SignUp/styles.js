import styled from 'styled-components';
import backgroundImg from '../../assets/bg-anamnese.png';
import { Link } from "react-router-dom";


export const Container = styled.div`
    height: 100vh;
    background-color: #008B45;


    display: flex;
    align-items: stretch;

    `;


export const Form = styled.form`
    padding: 0 136px;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    text-align: center;

    > h1 {
        font-size: 48px;
        color: ${({ theme }) => theme.COLORS.WHITE};
    }

    > h2 {
        font-size: 24px;
        margin : 48px 0;
    }

    > p { 
        font-size: 14px;        
        color: ${({ theme }) => theme.COLORS.BACKGROUND_100}; 
    }

    > a {
        margin-top: 124px;
        color: ${({ theme }) => theme.COLORS.WHITE};

    }

`;

export const Background = styled.div`
    flex: 1;
    background: url(${backgroundImg}) no-repeat center center;
    opacity: 85%;
    background-size: cover;
`;


export const BackLogIn = styled(Link)`
    margin: 16px;
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
