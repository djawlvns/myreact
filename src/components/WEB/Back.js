import styled from "styled-components";
import video from "/Users/lllll/OneDrive/문서/Github/myreact/src/components/WEB/video/Darkest Dungeon 1080p.mp4";


const Intro = styled.div`
`;
export function Back() {
  return (
    <>
      <Intro>
        <video muted autoPlay loop width="100%" height='850' >
          <source src={video} type={"video/mp4"} />
        </video>
      </Intro>
    </>
  );
}
