import useDropdown from "./useDropdown";

const options = ["Option 1", "Option 2", "Option 3"];
export default function Dropdown() {
  const { ref, isOpen, setIsOpen, selectedValue, handleOptionClick } =
    useDropdown<string>("");

  return (
    <div ref={ref} style={{ position: "relative", display: "inline-block" }}>
      <input
        type="text"
        value={selectedValue}
        onClick={() => setIsOpen(!isOpen)}
        readOnly
        placeholder="Select an option"
      />
      {isOpen && (
        <ul
          style={{
            position: "absolute",
            top: "100%",
            left: 0,
            border: "1px solid #ccc",
            listStyle: "none",
            padding: 0,
            margin: 0,
          }}
        >
          {options.map((option) => (
            <li
              key={option}
              onClick={() => handleOptionClick(option)}
              style={{ padding: "8px", cursor: "pointer" }}
            >
              {option}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
