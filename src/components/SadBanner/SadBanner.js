import React from "react";
import NewGameButton from "../NewGameButton/NewGameButton";

function SadBanner({ answer }) {
  return (
    <div class="sad banner">
      <p>
        Sorry, the correct answer is <strong>{answer}</strong>.{" "}
      </p>
      <NewGameButton />
    </div>
  );
}

export default SadBanner;
