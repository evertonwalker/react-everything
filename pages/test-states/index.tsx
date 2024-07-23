import { useState } from "react";
("use client");

export default function TestStates() {
  const [value1, setValue1] = useState("");
  const [value2, setValue2] = useState("");

  const handleStates = () => {
    setValue1('');
    setValue2('');
  }

  return (
    <>
      <input
        style={{
          color: "black",
        }}
        type="text"
        value={value1}
        onChange={(e) => setValue1(e.target.value)}
      />
      <br></br>
      <br></br>
      <input
        style={{
          color: "black",
        }}
        type="text"
        value={value2}
        onChange={(e) => setValue2(e.target.value)}
      />
      <button onClick={handleStates}>Click</button>
    </>
  );
}
