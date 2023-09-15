import { useEffect, useRef, useState } from "react";

export function MyRef() {
  console.log("렌더링");
  const [inputValue, setinputValue] = useState("");
  //   const [count, setCount] = useState(0);
  const count = useRef(0);

  useEffect(() => {
    count.current = count.current + 1;
  }, [inputValue]);
  function setValue(e) {
    setinputValue(e.target.value);
  }
  return (
    <>
      <input value={inputValue} onChange={setValue} />
      <p>
        Render Count : <span>{count.current}</span>
      </p>
    </>
  );
}
