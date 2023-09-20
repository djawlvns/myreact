import styled from "styled-components";
import { Back } from "./Back";
import { Link, NavLink, Outlet } from "react-router-dom";
import { Second } from "./Second";

const Box = styled.div`
    width: 100%;
    height: 963px;
    display: grid;
    grid-template-columns: repeat(11, 1fr);
    grid-template-rows: repeat(4, 240px);
    background-color: black;
    :nth-child(2) {
      grid-column: 2 / 11;
      grid-row: 1 / 4;
    }
    justify-content: center;
    place-items: center;
  `;

  const Img = styled.div`
    width: 90px;
    height: 90px;
    display: flex;
    align-items: center;
    justify-content: center;
    filter: grayscale(100%);
    &:hover {
      transform: scale(1.2);
      filter: grayscale(0%);
      cursor: pointer;
    }
    & img {
      width: 90px;
      height: 90px;
    }
  `;
  const StyledLink = styled(NavLink)`
    /* background-color: black; */
  `;

export function First() {
  return (
    <>
      <Box>
        <Img>
          <StyledLink to='/second/1'>
            <img src={require("./icon/abom.png")} alt="" />
          </StyledLink>
        </Img>
        <Back></Back>
        <Img>
          <img src={require("./icon/anti.png")} alt="" />
        </Img>
        <Img>
          <img src={require("./icon/arba.png")} alt="" />
        </Img>
        <Img>
          <img src={require("./icon/bounty.png")} alt="" />
        </Img>
        <Img>
          <img src={require("./icon/crusader.png")} alt="" />
        </Img>
        <Img>
          <img src={require("./icon/flage.png")} alt="" />
        </Img>
        <Img>
          <img src={require("./icon/grave.png")} alt="" />
        </Img>
        <Img>
          <img src={require("./icon/helion.png")} alt="" />
        </Img>
        <Img>
          <img src={require("./icon/high.png")} alt="" />
        </Img>
        <Img>
          <img src={require("./icon/hound.png")} alt="" />
        </Img>
        <Img>
          <img src={require("./icon/jester.png")} alt="" />
        </Img>
        <Img>
          <img src={require("./icon/lefer.png")} alt="" />
        </Img>
        <Img>
          <img src={require("./icon/man.png")} alt="" />
        </Img>
        <Img>
          <img src={require("./icon/occultist.png")} alt="" />
        </Img>
        <Img>
          <img src={require("./icon/plague.png")} alt="" />
        </Img>
        <Img>
          <img src={require("./icon/shield.png")} alt="" />
        </Img>
        <Img>
          <img src={require("./icon/vestal.png")} alt="" />
        </Img>
        <Outlet></Outlet>
      </Box>
    </>
  );
}
