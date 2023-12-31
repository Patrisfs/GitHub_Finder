import styled from "styled-components";

//styles
export const Container = styled.div`
  display: flex;
  justify-content: center; /* Centraliza horizontalmente */
  align-items: center; /* Centraliza verticalmente */
  flex-direction: column;
  padding-top: 4rem;
  margin: auto;


  div{
    background-color: #DAD3D1;
    border-radius: 2%;
    padding: 5px;
  }

  > div{
    box-shadow: rgba(0, 0, 0, 0.2) 5px 5px 5px 5px;
    width: 400px;
  }
  
  h1{
    text-align: center;
    width: 400px;
    padding-top: 1rem;
    margin-bottom: 15px;
    font-family:monospace;
  }
`;
