import { useState } from "react";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import {
  incremented,
  decrement,
  amountAdd,
} from "../../features/counter/counter-slice";
function ReduxLogic() {
  const value = useAppSelector((state) => state.counter.value);
  const dispatch = useAppDispatch();
  const [number, setNumber] = useState(0);

  function handleAddClick() {
    dispatch(incremented());
  }

  function handleRemoveClick() {
    dispatch(decrement());
  }

  function handleAddThisAmount(value: number) {
    dispatch(amountAdd(value));
  }

  return (
    <div className="flex items-center justify-center h-screen gap-4">
      <div className="flex flex-wrap gap-4">
        <h1> {value}</h1>
      </div>
      <div className="flex justify-center">
        <button
          onClick={handleAddClick}
          className="bg-emerald-500 rounded font-semibold text-white h-10 hover:bg-emerald-600 gap-2 p-2"
        >
          ADD
        </button>
        <button
          onClick={handleRemoveClick}
          className="bg-red-500 rounded font-semibold text-white h-10 hover:bg-red-600 ml-2 p-2"
        >
          DECREASE
        </button>
      </div>
      <div>
        <input
          type="number"
          className="w-16 border border-zinc-600 shadow-sm rounded h-10 px-3 bg-zinc-800 text-white"
          value={number}
          onChange={(e) => setNumber(+e.target.value)}
        />
        <button
          onClick={() => handleAddThisAmount(number)}
          className="bg-emerald-500 rounded font-semibold text-white h-10 hover:bg-emerald-600 gap-2 p-2 ml-3"
        >
          ADD THIS AMOUNT
        </button>
      </div>
    </div>
  );
}

export default ReduxLogic;
