import styled from "styled-components";
import { Avatar } from "./Avatar";

const Container = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 50px;
`;
const persons = [
  { name: "Steve", job: "programmer", country: "대한민국" },
  { name: "Tom", job: "student", country: "USA" },
  { name: "Adrian", job: "engineer", country: "France" },
  { name: "Max", job: "Painter", country: "Germany" },
];

const colors = ["lightgreen", "teal", "lightgrey", "khaki"];

export function AvatarList() {
  return (
    <>
      <Container>
        {persons.map((p, i) => (
          <Avatar bgcolor={colors[i]} person={persons[i]} />
        ))}
        {/* <Avatar bgcolor="lightgreen" person={{name: "Steve", job: "Programmer", country: "대한민국"}}>
        </Avatar>
        <Avatar bgcolor="yellow" person={{name: "Maly", job: "famer", country: "캐나다"}}>
        </Avatar>
        <Avatar bgcolor="lightred" person={{name: "Steve", job: "hunter", country: "미국"}}>
        </Avatar>
        <Avatar bgcolor="lightblue" person={{name: "Steve", job: "manger", country: "일본"}}>
        </Avatar> */}
      </Container>
    </>
  );
}
