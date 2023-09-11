import styled from "styled-components";
import "./Session1.css";

const BigBox1 = styled.div`
  font-size: 2rem;
  font-weight: bold;
  text-align: center;
  color: indigo;
  text-transform: capitalize;
`;
const BigBox2 = styled.div`
  height: 100px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  margin: 100px auto;
  .b1 img {
    background-color: red;
    filter: blur(9px);
  }
  .b2 img {
    background-color: purple;
    filter: drop-shadow(16px 16px 20px skyblue) invert(75%);
    color: lightgrey;
  }
`;
const BigBox3 = styled.div`
  height: 100px;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  margin: 100px auto;
`;
export function Session() {
  return (
    <>
      <BigBox1>Hello world</BigBox1>
      <BigBox2>
        <div className="b1">
          <img
            src="https://news.imaeil.com/photos/2020/07/28/2020072818340699789_l.jpg"
            alt=""
          ></img>
        </div>
        <div className="b2">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ullam, quae!
          Dicta quam, est veniam delectus et suscipit obcaecati repellendus? Ab
          possimus dolores rem corporis odio asperiores qui dolorem commodi
          nobis.
        </div>
      </BigBox2>
      <BigBox3>
        <div className="smallbox1">
          <div>
            <img
              src="https://i.namu.wiki/i/UOnP11W-Pyuo-KTxVnM-G5EN6uPvNQQS7Ce3LUQLceL9HX9S4UxsJTbxTEXha_EDGK7Fjwk5SHXXHOstnbRyjw.webp"
              alt=""
            ></img>
          </div>
          <div>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam
            delectus asperiores unde culpa eveniet, cupiditate sed veniam!
            Facilis omnis animi facere iure hic doloremque vero quos
            perferendis. Aut, accusamus facere!
          </div>
        </div>
        <div className="smallbox2">
          <div>
            <img
              src="https://san.chosun.com/news/photo/202302/22412_82258_3814.jpg"
              alt=""
            ></img>
          </div>
          <div>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ad minima
            sapiente recusandae possimus quia quod debitis aliquid corrupti
            dicta natus. Minima harum corporis quod repellendus dignissimos
            sapiente! Laborum, nam sit?
          </div>
        </div>
        <div className="smallbox3">
          <div>
            <img
              src="https://i.namu.wiki/i/ReWo7bzwqQ7mqfeZBNIn43LxH8t9-fUdgLj_VZtMqjg55xsnWBAosEpYhkPDfEP8rGE2DBtNo9CZ1LdwfE8jbw.webp"
              alt=""
            ></img>
          </div>
          <div>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            Necessitatibus voluptatem eum aliquam asperiores repudiandae odit
            quo nobis aut non magni dolorum hic quia pariatur saepe, velit rerum
            cupiditate obcaecati iure.
          </div>
        </div>
      </BigBox3>
    </>
  );
}
