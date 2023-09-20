import { useParams ,Link } from "react-router-dom";
import games from "./Data";
import styled from "styled-components";

const Container = styled.div`
  width: 600px;
  display: flex;
  flex-direction: column;
`;
const Img = styled.img`
  width: 100%;
`;
const Content = styled.div`
  font-size: 0.8rem;
`;
export function SingleProduct() {
  const { id } = useParams();
  const game = games.find((g) => g.id == id);
  const { title, genre, image, price, text } = game;
  return (
    <>
      <h3>{title}</h3>
      <Container>
        <Img src={image} />
        <Content>
          <p>타이틀 : {title}</p>
          <p>장르 : {genre}</p>
          <p>가격 : {price}원</p>
          <p>{text}</p>
          <Link to='/products'>목록으로 돌아가기</Link>
        </Content>
      </Container>
    </>
  );
}
