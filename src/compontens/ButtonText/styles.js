import styled from "styled-components";
import { Link } from "react-router-dom";

export const Container = styled.button`
    background: none;

    color: ${({ theme, isActive }) => isActive ? theme.COLORS.ORANGE : theme.COLORS.WHITE};       

    border: none;   

    //font-size: 16px;
      font-size: ${({ isActive }) => isActive ? "24px" : "16px" };
      
      
    
      padding: 4px ;     
    
`;