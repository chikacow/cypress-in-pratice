import { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);

  return (
    <div className="flex flex-col items-center space-y-2">
      <p className="text-lg font-semibold">Count: {count}</p>
      <button 
        className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600"
        onClick={() => setCount(count + 1)}
      >
        Increment
      </button>
    </div>
  );
};

export default Counter;
