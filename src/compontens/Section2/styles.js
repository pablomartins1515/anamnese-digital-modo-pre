import styled from "styled-components";

export const Container = styled.header`
    margin: 28px 0;
    
    

    h2 {
        border-bottom-width: 1px;
        border-bottom-style: solid;
        border-bottom-color: ${({ theme }) => theme.COLORS.WHITE2};

        padding-bottom: 16px ;
        margin-bottom: 24px;    
    
        color: ${({ theme }) => theme.COLORS.WHITE2};
        font-size: 20px;
        font-weight: 400px;    
    }

`

   