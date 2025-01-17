import React from "react";
import NewGameButton from "../NewGameButton/NewGameButton";

function HappyBanner({ numOfGuesses }) {
  return (
    <div className="happy banner">
      <p>
        <strong>
          Congratulations! Got it in {numOfGuesses}{" "}
          {numOfGuesses === 1 ? "guess" : "guesses"}.
        </strong>
      </p>
      <NewGameButton />
    </div>
  );
}

export default HappyBanner;
