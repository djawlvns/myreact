import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { GameContext } from "./GameShop";

const Container = styled.div`
  width: 300px;
  background-color: #eee;
  box-shadow: 2px 2px 5px gray;
  padding: 20px;
  border-radius: 20px;
  margin: 50px;
`;
const Headers = styled.div`
  font-size: 1.5rem;
  text-align: center;
`;
const Button = styled.button`
  width: 100%;
  height: 25px;
  margin-top: 20px;
  background-color: lightblue;
  border-radius: 5px;
  text-align: center;
  cursor: pointer;
  font-weight: bold;
  color: white;
  border: 1px solid blue;
`;

export function Login() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const { user, setUser} = useContext(GameContext);
  const navigate = useNavigate();
  function onSubmit(e) {
    e.preventDefault();
    if (!username || !email) {
      return;
    } else {
      navigate("/dashboard");
      setUser({ name: username, email: email});
    }
  }
  return (
    <>
      <Container>
        <form onSubmit={onSubmit}>
          <Headers>Login</Headers>
          <div>
            <label>user name</label>
            <br />
            <input id="name" value={username} onChange={(e) => setUsername(e.target.value)} />
          </div>
          <div>
            <label>user email</label>
            <br />
            <input id="email" value={email} onChange={(e)=> setEmail(e.target.value)} />
          </div>
          <Button type="submit">제출</Button>
        </form>
      </Container>
    </>
  );
}
