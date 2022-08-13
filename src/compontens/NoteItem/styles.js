import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    align-items: center;
    

    

    background-color: ${({ theme, isNew }) => isNew ? 'transparent' : theme.COLORS.WHITE2};    
    color: ${({ theme }) => theme.COLORS.GRAY_300};       

    border: ${({ theme, isNew }) => isNew ? `1px dashed ${theme.COLORS.WHITE2 }` : 'none'};

    margin-bottom: 8px;
    border-radius: 10px;
    padding-right: 16px;

    > button {
        border: none;
        background: none;     
    }

    .button-delete {
    color: red;
    }
    .button-add {
        color: ${({ theme }) => theme.COLORS.ORANGE};
    }

    > input {
        height: 56px;
        width: 100%;
        padding: 12px;

        color: #008B45;
        background: transparent;
        
        border: none;
        
        &::placeholder {
            color: ${({ theme }) => theme.COLORS.WHITE2};
        }

    }
    
`

   