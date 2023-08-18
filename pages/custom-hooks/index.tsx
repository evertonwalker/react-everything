import SaveButton from "./components/SaveButton";
import StatusBar from "./components/StatusBar";

const CustomHooks = () => {
  return (
    <div >
      <h1>Custom Hooks</h1>
      <div className="mt-10">
        <StatusBar />
        <SaveButton />
      </div>
    </div>
  );
};

export default CustomHooks;
