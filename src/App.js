// import { Tab } from "./components/20230911/Tab";
// import { Session } from "./components/20230911/Session1";
// import { List } from "./components/20230911/List";
// import { Avatar } from "./components/20230912/Avatar";
// import { AvatarList } from "./components/20230912/AvatarList";
// import { PropsTest } from "./components/20230912/PropsTest";
// import { CounterState } from "./components/20230912/CounterState";
// import { Menu } from "./components/20230913/Menu";
import { createGlobalStyle } from "styled-components";
import { Home } from "./components/20230913/Home";
// import { Button1 } from "./components/20230913/Button";

const Globalstyle = createGlobalStyle`
*{
  src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_2001@1.1/GmarketSansMedium.woff') format('woff');
  margin : 0;
  padding : 0;
  box-sizing: border-box;
  font-family: Poppins, GmarketSansMedium;
}
`;
export function App() {
  return (
    <>
    <Globalstyle />
      {/* <Tab></Tab> */}
      {/* <Session></Session> */}
      {/* <List></List> */}
      {/* <Avatar
        bgcolor="lightgreen"
        person={'steve'}
      ></Avatar> */}
      {/* <AvatarList></AvatarList> */}
      {/* <PropsTest
        firstName={"철수"}
        score={{ math: 80, english: 90, history: 100 }}
      ></PropsTest> */}
      {/* <CounterState></CounterState> */}
      {/* <Menu></Menu> */}
      <Home></Home>
      {/* <Button1 /> */}
    </>
  );
}
