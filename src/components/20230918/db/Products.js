import { useNavigate } from "react-router-dom";
import games from "./Data";
import styled from "styled-components";
import { useContext } from "react";
import { GameContext } from "./GameShop";

const Container = styled.div`
  width: 600px;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
`;
const Card = styled.div`
  width: 180px;
  border: 2px solid dodgerblue;
  margin-bottom: 20px;
  font-size: 0.8rem;
  cursor: pointer;
`;
const Img = styled.img`
  width: 100%;
`;
const Text = styled.p`
  margin-left: 10px;
`;
export function Products() {
  const navigate = useNavigate();
  const {checkList, setCheckList} = useContext(GameContext);
  function onClick(id) {
    navigate(`${id}`);
    // navigate(`/products/${id}`);
  }
  function onChange(e) {
    const temp = checkList.map((item) => {
      if(item.id == e.target.id){
        return { ...item, checked: e.target.checked}
      }else{
        return item;
      }
    })
    setCheckList(temp);
  }
  return (
    <>
      <h3>Games List</h3>
      <Container>
        {games.map((game, i) => (
          <Card key={game.id}>
            <div onClick={() => onClick(game.id)}>
              <Img src={game.image} />
              <Text>타이틀 : {game.title}</Text>
              <Text>장르 : {game.genre}</Text>
              <Text>가격 : {game.price}</Text>
            </div>
            <input type="checkbox" id={game.id} onChange={onChange} checked={checkList[i].checked}></input>
          </Card>
        ))}
      </Container>
    </>
  );
}
