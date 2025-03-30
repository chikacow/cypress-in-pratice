import { useState } from "react";

const ToggleSwitch = ({ onToggle }) => {
  const [isOn, setIsOn] = useState(false);

  return (
    <button
      className={`w-16 px-4 py-2 rounded-full ${
        isOn ? "bg-blue-500 text-white" : "bg-gray-300"
      }`}
      onClick={() => {
        setIsOn(!isOn);
        onToggle(!isOn);
      }}
    >
      {isOn ? "ON" : "OFF"}
    </button>
  );
};

export default ToggleSwitch;
