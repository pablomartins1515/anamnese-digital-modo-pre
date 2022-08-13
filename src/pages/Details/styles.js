import styled from 'styled-components';
import { Link } from "react-router-dom";


export const Container = styled.div`    
    width: 100%;
    height: 100vh;

    display: grid;
    grid-template-rows: 105px auto;
    grid-template-areas: 
        "header"
        "content"; 
        
        > main {
            grid-area: content;
            overflow-y: scroll;
            padding: 64x 0;

        }

    
`;


export const Links = styled.ul`
    > li {
        margin-top: 12px;

        > a {
            color: ${({ theme }) => theme.COLORS.BACKGROUND_700};

        
        
        }
        
        list-style-type: none;
    }
`

export const Content = styled.div`
    max-width: 550px;
    margin: 0 auto;

    display: flex;
    flex-direction: column;

    > button:first-child {
        align-self: end;
    }
    
     h1{
        font-size: 36px;
        font-weight: 500;
        padding-top: 0px;        
        color: ${({ theme }) => theme.COLORS.BACKGROUND_700};    
     }

     p {
        font-size: 16px;
        margin-top: 16px;
        text-align: justify;
        color: ${({ theme }) => theme.COLORS.BACKGROUND_700};
     }
    
`


export const Logout = styled(Link)`
    border: 0;
    background: 0;
    margin: 28px;

    >svg {
        color: ${({ theme }) => theme.COLORS.GRAY_100};
        font-size: 36px;
    }
`;