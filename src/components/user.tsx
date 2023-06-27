import { UserProps } from "../types/user";
import { MdLocationPin } from 'react-icons/md';
import { Link } from "react-router-dom";
import styled from "styled-components";

const Info = styled.div`
  display: flex;
  justify-content: center; /* Centraliza horizontalmente */
  align-items: center; /* Centraliza verticalmente */
  flex-direction: column;
  padding-top: 4rem;
  margin-bottom: 10px;

  img{
    width: 150px;
    height: 150px;
    border-radius: 50%;
    border: 2px solid rgb(255 255 255);
  }

  h2{
    margin-top: 1.1rem;
    font-family:monospace;
  }

  > div div{
    flex-direction: column;
  }

  > div div:first-child{
    border-right: 1px solid white;
  }

  > div, > div div{
    display: flex;
    margin-bottom: 1rem;
    margin-top: 0.5rem;
    width: 200px;
  }

  > div p:last-child{
    padding: 4px;
    margin-top: 0.5rem;
    background-color: #39312D;
    color: white;
    border-radius: 8%;
    text-align: center;
  }
  > div p{
    padding: 4px;
  }
  > p {
    opacity: 0.8;
    margin-top: 0.5rem;
  }
`;

const StyledLink = styled(Link)`

  color: #000;
  text-decoration: none;
  padding: 8px 16px;
  background-color: #f0f0f0;
  border-radius: 4px;
  transition: background-color 0.3s ease;
  font-family: monospace;

  &:hover {
    background-color: #e0e0e0;
    font-weight: bolder;
  }
`;

const user = ({
  login,
  avatar_url,
  followers,
  following,
  location
}:UserProps) => {
  return (
    <Info>
      <img src={avatar_url} alt={login} />
      <h2>{login}</h2>
      <p>
        <MdLocationPin />
        <span>{location}</span>
      </p>
      <div>
        <div>
          <p>Seguidores:</p>
          <p>{followers}</p>
        </div>
        <div>
          <p>Seguindo:</p>
          <p>{following}</p>
        </div>
      </div>
      <StyledLink to={`/repos/${login}`}>Ver melhores projetos</StyledLink>
    </Info>
  )
}

export default user