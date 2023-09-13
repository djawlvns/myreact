import styled from "styled-components";

const StyleButton = styled.button`
  width: 100px;
  height: 40px;
  padding: 10px 20px;
  font-size: 1.3rem;
  color: ${(props) => props.color};
  background-color: ${(props) => props.bgcolor};
  line-height: 7px;
  border-radius: 10px;
`;

export function Button1({color, bgcolor,title}) {
  return (
    <>
      <StyleButton color={color} bgcolor={bgcolor} >{title}</StyleButton>
    </>
  );
}
