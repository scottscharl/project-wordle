import React from "react";

function Keyboard({ data }) {
  // console.log(data);
  const rows = [
    ["Q", "W", "E", "R", "T", "Y", "U", "O", "I", "P"],
    ["A", "S", "D", "F", "G", "H", "J", "K", "L"],
    ["Z", "X", "C", "V", "B", "N", "M"],
  ];

  return (
    <div className="">
      {rows.map((row) => (
        <p key={Math.random()} className="keyboard-row">
          {row.map((item) => (
            <span key={Math.random()} className={`keyboard-key ${data[item]}`}>
              {item}
            </span>
          ))}
        </p>
      ))}
    </div>
  );
}

export default Keyboard;
