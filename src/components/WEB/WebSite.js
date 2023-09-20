import { BrowserRouter, Routes, Route } from "react-router-dom";
import { First } from "./First";
import { Second } from "./Second";

export function WebSite() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<First />}>
            <Route path="main" element={<First />} />
          </Route>
          <Route path="/second" element={<Second />}>
            <Route path=":id" element={<Second />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}
