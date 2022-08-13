import styled from "styled-components";



export const Container = styled.div`
  width: 100%;
  height: 100vh;
  background-color: #008B45;
  display: grid;
  grid-template-rows: 105px auto;
  grid-template-areas:
    "header"
    "content";

    > main {
    grid-area: content;
    overflow-y: auto;
  }
  .tags {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
  }
`;

export const FormH = styled.form`
     max-width: 550px;
     margin: 32px  auto;
    
     > header { display: flex;
              flex-direction: center;
          
          
              justify-content: space-between;
          
              margin-bottom: 36px;
          
              a {
              font-size: 20px;
              color: ${({ theme }) => theme.COLORS.WHITE2};
            }     
          }
`; 

export const Form = styled.form`
  max-width: 550px;
  margin: 38px auto;  

  
`;


