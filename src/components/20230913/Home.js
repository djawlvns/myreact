import styled from "styled-components";
import { Menu } from "./Menu";
import { Button1 } from "./Button";
import { ItemList } from "./ItemList";

const Container = styled.div`
  width: 120px;
  height: 100vh;
  margin: 0 auto;
  position: absolute;
  top: 0;
  left: 0;
`;

const Content = styled.div`
  position: absolute;
  top: 0;
  left: 200px;
  width: ${()=>window.innerWidth - 120}px;
  height: 100vh;
`;

const XLARGE = "3rem";
const LARGE = "2rem";
const MEDIUM = "1.5rem";
const SMALL = "1rem";
const XSMALL = "0.7rem";

export function Home() {
  return (
    <>
      <Container>
        <Menu fontSize={SMALL}></Menu>
      </Container>
      <Content>
        <div>
        <Button1 color="white" bgcolor="khaki" title="버튼1"/>
        <Button1 color="dodgerblue" bgcolor="lightblue" title="버튼2"/>
        <Button1 color="teal" bgcolor="lightgreen" title="버튼3"/>
        </div>
        <div>
            <br />
            <br />
            <br />
            <ItemList />
        </div>
      </Content>
    </>
  );
}
