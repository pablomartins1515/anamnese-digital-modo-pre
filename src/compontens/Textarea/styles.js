import styled from "styled-components";

export const Container = styled.textarea`
    width: 100%;
    height: 150px;

    background-color: #F8F8F8;    
    color: ${({ theme }) => theme.COLORS.GRAY_300};

    border: none;
    resize: none;

    margin-bottom: 8px;
    border-radius: 10px;
    padding: 16px;

    
    
    & ::placeholder {
            color: ${({ theme }) => theme.COLORS.GRAY_300};
    }

    

 
`;

   