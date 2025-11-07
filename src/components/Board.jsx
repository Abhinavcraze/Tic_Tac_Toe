import React from "react";
import Square from "./Square";

function Board({ squares, onClick }) {
  return (
    <div className="grid grid-cols-3 gap-2">
      {squares.map((value, i) => (
        <Square key={i} value={value} onClick={() => onClick(i)} />
      ))}
    </div>
  );
}

export default Board;
