import styled from "styled-components";
import { useParams } from "react-router-dom";
import body from "./Body"

const Box = styled.div`
  width: 100%;
  height: 963px;
  background-color: black;
  /* background-image:; */
`;
const Top = styled.div`
  width: 100%;
  height: 100px;
  background-color: black;
`;
const Left = styled.div`
  width: 100px;
  height: 100px;
  background-color: blue;
  position: absolute;
  top: 0;
  left: 0;
`;
const Right = styled.div`
  width: 100px;
  height: 100px;
  background-color: blue;
  position: absolute;
  top: 0;
  right: 0;
`;
const Char = styled.div`
  display: flex;
  margin-left: 100px;
`;
const Name = styled.div`
  width: 400px;
  height: 100px;
  color: white;
  font-size: 30px;
`;
const Text = styled.div`
  width: 900px;
  color: white;
`;
const Poto = styled.img`
  width: 300px;
  height: 350px;
  margin-top: 100px;
  margin-left: 50px;
`;
const Skill = styled.div`
width:100%;
`
export function Second({ current }) {
  const { id } =useParams();
  const msu = body.find((b) => b.id == id);
  console.log(msu, body, id);
  const {name, text, image, work, skill} = msu;
  const prev = current - 1;
  const next = current + 1;
  return (
    <>
      <Box src={image}>
        <Top>
          {/* <Left onClick={}><img src={배열[prev].img}></img></Left>
            <Right onClick={}><img src={next}></img></Right> */}
        </Top>
        <Char>
          <Name>{name}</Name>
          <Text>{text}</Text>
        </Char>
        <Poto src={work}></Poto>
        <Skill>{skill}</Skill>
      </Box>
    </>
  );
}
