import { Provider } from "react-redux";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { incremented } from "../../features/counter/counter-slice";
function ReduxLogic() {
  const value = useAppSelector((state) => state.counter.value);
  const dispatch = useAppDispatch();

  function handleAddClick() {
    dispatch(incremented());
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
        <button className="bg-red-500 rounded font-semibold text-white h-10 hover:bg-red-600 ml-2 p-2">
          DECREASE
        </button>
      </div>
    </div>
  );
}

export default ReduxLogic;
