import { UserProps } from "../types/user";
import Search from "../components/search";
import { useState} from "react";
import User from "../components/user";
import Error from "../components/error";

const Home = () => {
  const [user, setUser] = useState<UserProps | null>(null);
  const [error, setError] = useState(false);

  const loadUser = async (userName: string) => {
    //reset de error e usuário
    setError(false);
    setUser(null);
     
    //requisição para API
    const res = await fetch(`https://api.github.com/users/${userName}`)
    const data = await res.json()

    //tratamento de erros
    if (res.status === 404) {
      setError(true);
      return;
    }

    const {avatar_url, login, location, following, followers} = data;
    //tipagem dos dados vindos da API
    const userData: UserProps ={
      avatar_url,
      login,
      location,
      followers,
      following,
    };
    setUser(userData);
  }

  return(
      <div>
        <Search loadUser ={loadUser}/>
        {/*Componente do usuário */}
        {user && <User{...user}/>}
        {/*msg de error caso nn ache o usuário*/}
        {error && <Error />}
      </div>
  );
};

export default Home;
