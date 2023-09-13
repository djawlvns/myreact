import { useState } from "react";

export function ItemList() {
  const [newItem, setnewItem] = useState("");
  const [items, setitems] = useState([]);
  function onChange(e) {
    setnewItem(e.target.value);
  }
  function addItem() {
    const temp = [...items, newItem];
    setitems(temp);
    setnewItem("");
    console.log(items);
  }
  return (
    <>
      <input
        placeholder="물품이름을 입력하세요"
        onChange={onChange}
        value={newItem}
      />
      <button onClick={addItem}>물품추가</button>
      <h3>물품 목록</h3>
      <ul>
        {items.map((item,index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </>
  );
}
