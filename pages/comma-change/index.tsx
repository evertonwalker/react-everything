import { ChangeEvent, useState } from "react";

const CommaChange = () => {
  const [inputValue, setInputValue] = useState("");

  const handleComma = (e: ChangeEvent<HTMLInputElement>) => {
   
      const newValue = e.target.value;
      // Permitir apenas números e ponto
      if (/^[0-9]*\.?[0-9]*$/.test(newValue)) {
        setInputValue(newValue);
      }
  }

  return (
    <div className="flex justify-center">
      <input
        style={{
          color: 'black'
        }}
        type="text"
        value={inputValue}
        onChange={handleComma}
      />
      <br></br>
      <span className="text-9xl">{inputValue}</span>
    </div>
  );
};

export default CommaChange;
