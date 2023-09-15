import styled from "styled-components";
import abom from "/Users/lllll/OneDrive/문서/Github/myreact/src/components/WEB/icon/abom.png";
import anti from "/Users/lllll/OneDrive/문서/Github/myreact/src/components/WEB/icon/anti.png";
import arba from "/Users/lllll/OneDrive/문서/Github/myreact/src/components/WEB/icon/arba.png";
import bounty from "/Users/lllll/OneDrive/문서/Github/myreact/src/components/WEB/icon/bounty.png";
import crusader from "/Users/lllll/OneDrive/문서/Github/myreact/src/components/WEB/icon/crusader.png";
import flage from "/Users/lllll/OneDrive/문서/Github/myreact/src/components/WEB/icon/flage.png";
import greav from "/Users/lllll/OneDrive/문서/Github/myreact/src/components/WEB/icon/greav.png";
import helion from "/Users/lllll/OneDrive/문서/Github/myreact/src/components/WEB/icon/helion.png";
import high from "/Users/lllll/OneDrive/문서/Github/myreact/src/components/WEB/icon/high.png";
import hound from "/Users/lllll/OneDrive/문서/Github/myreact/src/components/WEB/icon/hound.png";
import jester from "/Users/lllll/OneDrive/문서/Github/myreact/src/components/WEB/icon/jester.png";
import lefer from "/Users/lllll/OneDrive/문서/Github/myreact/src/components/WEB/icon/lefer.png";
import man from "/Users/lllll/OneDrive/문서/Github/myreact/src/components/WEB/icon/man.png";
import occultist from "/Users/lllll/OneDrive/문서/Github/myreact/src/components/WEB/icon/occultist.png";
import plague from "/Users/lllll/OneDrive/문서/Github/myreact/src/components/WEB/icon/plague.png";
import shield from "/Users/lllll/OneDrive/문서/Github/myreact/src/components/WEB/icon/shield.png";
import vestal from "/Users/lllll/OneDrive/문서/Github/myreact/src/components/WEB/icon/vestal.png";
import { Back } from "./Back";

const First = styled.div`
  width: 100%;
  height: 100%;
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
`;

export function WebSite() {
  return (
    <>
      <First>
        <Img>
          <img src={abom} alt="" />
        </Img>
        <Back></Back>
        <Img>
          <img src={anti} alt="" />
        </Img>
        <Img>
          <img src={arba} alt="" />
        </Img>
        <Img>
          <img src={bounty} alt="" />
        </Img>
        <Img>
          <img src={crusader} alt="" />
        </Img>
        <Img>
          <img src={flage} alt="" />
        </Img>
        <Img>
          <img src={greav} alt="" />
        </Img>
        <Img>
          <img src={helion} alt="" />
        </Img>
        <Img>
          <img src={high} alt="" />
        </Img>
        <Img>
          <img src={hound} alt="" />
        </Img>
        <Img>
          <img src={jester} alt="" />
        </Img>
        <Img>
          <img src={lefer} alt="" />
        </Img>
        <Img>
          <img src={man} alt="" />
        </Img>
        <Img>
          <img src={occultist} alt="" />
        </Img>
        <Img>
          <img src={plague} alt="" />
        </Img>
        <Img>
          <img src={shield} alt="" />
        </Img>
        <Img>
          <img src={vestal} alt="" />
        </Img>
      </First>
    </>
  );
}
