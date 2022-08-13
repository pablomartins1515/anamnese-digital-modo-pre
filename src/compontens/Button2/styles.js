import styled from 'styled-components';
import { Link } from "react-router-dom";


export const Container = styled.button`
    width: 100%;
    background-color: #1E90FF;
    color: ${({theme}) => theme.COLORS.WHITE};

    height: 56px;
    border: 0;
    padding: 0 16px;
    margin-top: 16px;
    border-radius: 10px;
    font-weight: 500;

    &:disabled {
        opacity: 0.5;
    }
`;

export const Teste = styled(Link)``;

