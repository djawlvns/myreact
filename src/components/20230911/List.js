import styled from "styled-components";

const Container = styled.div`
  width: 100vw;
  margin: 0 auto;
  text-align: center;
`;
const Title = styled.h1`
  font-size: 2.5rem;
  color: orange;
  color: ${(props) => (props.isActive ? "orange" : props.fontColor)};
`;
const Imagestyle = styled.img`
  border-radius: 50%;
`;
// const TilteBlue = styled.a(Title)`
// color : blue;
// `;
export function List() {
  const products = [
    { title: "Banana" },
    { title: "Apple" },
    { title: "Greap" },
  ];

  const user = {
    name: "Hedy Lamarr",
    imageUrl: "https://i.imgur.com/xQHAZz4.jpeg",
    imageSize: 90,
  };
  return (
    <>
      <h1>List Component</h1>
      <p>리액트 연습 코드</p>
      <ul>
        {products.map((p) => (
          <Title isActive={false} fontColor="blue">{p.title}</Title>
        ))}
      </ul>
      <Container>
        <Title fontColor="green" isActive={false}>
          {user.name}
        </Title>
        <Imagestyle src={user.imageUrl}></Imagestyle>
      </Container>
      {/* <Wrapper>
        <Title1>
            <Content1>
                <Img1 src={}></Img1>
                <Img1 src={}></Img1>
                <Img1 src={}></Img1>
            </Content1>
        </Title1>
      </Wrapper> */}
    </>
  );
}
