import styled from "styled-components";

export const Container = styled.header`
    width: 100%;
    display: flex;
    align-items: center;

    background-color: #F8F8F8;    
    color: ${({ theme }) => theme.COLORS.GRAY_300};       

    margin-bottom: 8px;
    border-radius: 10px;

    > input {
        height: 56px;
        width: 100%;

        padding: 12px;
        
        color: ${({ theme }) => theme.COLORS.BACKGROUND_700};
        background: transparent;
        border: 0;
        
        &:placeholder {
            color: ${({ theme }) => theme.COLORS.GRAY_100};  
        }        
    }
    
    > svg {
            margin-left: 16px;
        }

`

   