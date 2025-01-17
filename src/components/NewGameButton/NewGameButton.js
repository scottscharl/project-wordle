import React from "react";

function NewGameButton() {
  return (
    <button className="button" onClick={() => window.location.reload(false)}>
      Play Again
    </button>
  );
}

export default NewGameButton;
