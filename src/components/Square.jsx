import React from "react";

function Square({ value, onClick }) {
  return (
    <button
      className="w-20 h-20 text-3xl font-bold bg-white border-2 border-gray-400 rounded-lg hover:bg-gray-100 transition"
      onClick={onClick}
    >
      {value}
    </button>
  );
}

export default Square;
