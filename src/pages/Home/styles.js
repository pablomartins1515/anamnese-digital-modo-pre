import styled from 'styled-components';
import { Link } from "react-router-dom";


export const Container = styled.div`
        width: 100%;
        height: 100vh;

        display: grid;
        grid-template-columns: 250px auto;
        grid-template-rows: 105px 128px auto 64px;
        grid-template-areas: 
            'brand header'
            'menu search'
            'menu content'
            'newnote content';

        background: #E5E5E5;
        
    `;

    export const Brand = styled.div`
        grid-area: brand;       
        
        display: flex;
        justify-content: center;
        align-items: center;

        border-bottom-width: 1px ;
        border-bottom-style: solid;
        border-bottom-color: #008B45;

        background-color: #008B45;

        >h1 {
            font-size: 24px;
            color: ${({ theme }) => theme.COLORS.WHITE};
        }
    `; 

    export const Menu = styled.ul`
        grid-area: menu;
        

        background-color: #008B45;        

        padding-top: 64px;
        text-align: center;

        > li {
            margin-bottom: 24px;
            
            > div {
                font: bold;
                font-size: 24px;               
            }   
        }
        
    `;

    export const Search = styled.div`
        grid-area: search;
        padding: 64px 64px 0;        
    `;

    export const Content = styled.div`
        grid-area: content;
        padding: 24px 64px;
        overflow-y: auto;
             
    `;

    export const NewNote = styled(Link)`
        grid-area: newnote;
        border: none;

        display: flex;
        align-items: center;
        justify-content: center;

        background-color: ${({ theme }) => theme.COLORS.WHITE};
        color: ${({ theme }) => theme.COLORS.BACKGROUND_900};
        
        svg {
            margin: 8px;
        }

    `;

    