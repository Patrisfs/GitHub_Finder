import { BsSearch } from 'react-icons/bs';
import { useState, KeyboardEvent} from "react";
import styled from 'styled-components';


//tipando o Username do input
type SearchProps ={
  loadUser: (userName: string)=> Promise<void>
}

//styles
const Content = styled.div`
  display: flex;
  justify-content: center; /* Centraliza horizontalmente */
  align-items: center; /* Centraliza verticalmente */
  flex-direction: column;
  padding-top: 4rem;

  h2{
    font-family:monospace;
    font-weight: bolder;
  }
  h2, p{
    padding: 4px;
  }
  p{
    opacity: 0.8;
  }
  button{
    cursor: pointer;
    background-color: #C2B7B2;
  }
  div > input, button{
    outline: none;
    margin-right: 4px;
    padding: 0.6rem;
    border-radius: 3px;
    border: none;
  }

  & div > button:hover{
    opacity: 0.5;
    transition: 0.3s;
  }
`;

export const Search = ({loadUser}: SearchProps) => {
  const [userName, setUserName] = useState("");

  //pesquisa por teclado
  const handleKeyDown = (e:KeyboardEvent) =>{
    if(e.key === "Enter"){
      loadUser(userName);
    }
  }

  return (
    <Content>
      <h2>Busque por um usuário:</h2>
      <p>Conheça seus melhores repositórios</p>
      <div>
        <input 
        type="text" 
        name="" 
        id="" 
        placeholder='Digite o nome do usuário' 
        onChange={(e)=>setUserName(e.target.value)} 
        onKeyDown={handleKeyDown}
        />
        <button onClick={()=> loadUser(userName)}>
          <BsSearch />
        </button>
      </div>
    </Content>
  )
}

export default Search;
