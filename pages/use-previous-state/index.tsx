import { useState } from "react";

const UsePreviousState = () => {
  const [state, setState] = useState({
    name: "test",
    age: 20,
  });

  const updateAge = () => {
    setState((value) => ({
      ...value,
      age: 30,
    }));
  };

  return (
    <>
      <h1>{state.name}</h1> <h1> { state.age }</h1>

      <button onClick={updateAge}>Set new age and keeping name</button>
    </>
  );
};

export default UsePreviousState;
