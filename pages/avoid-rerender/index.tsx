import { memo, useCallback, useMemo, useRef, useState } from "react";

type ChildProps = {
  updated: (updated: number) => void;
};

// eslint-disable-next-line react/display-name
const ChildComponent = memo(({ updated }: ChildProps) => {
  console.log("SON UPDATED ");
  return (
    <div>
      <div className="mt-3 ml-4 flex">
        <button
          onClick={() => updated(3)}
          className="bg-blue-600 rounded font-semibold text-white hover:bg-emerald-600 p-4"
        >
          ON click Child
        </button>
      </div>
    </div>
  );
});

const AvoidReRender = () => {
  console.log("RenderFather");

  const [name, setName] = useState(`Walker`);
  const [age, setAge] = useState(10);
  const inputRef = useRef<HTMLInputElement>(null);

  // Com essa função evitamos o re-render do component filho quando o setAge é chamado
  const updated = useCallback((value: number) => {
    setAge(125);
    console.log("value", value);
  }, []);

  // Dessa forma não evitamos
  // const updated = (value: number) => {
  //   setAge(125);
  //   console.log("value", value);
  // };

  return (
    <div className="h-screen">
      <div className="mt-3 ml-4 flex gap-4">
        <ChildComponent updated={updated} />

        <div className="flex flex-col">
          <label>Nome</label>
          <input
            type="text"
            className=" rounded h-10 text-black"
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="flex flex-col">
          <label>Idade</label>
          <input
            type="text"
            className="rounded h-10 text-black"
            ref={inputRef}
          />
        </div>

        <div className="flex gap-2 flex-col">
          <span>Valores</span>
          <div className="gap-5 flex">
            <span> Nome: {name}</span>
            <span> Idade: {age}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AvoidReRender;
