import React from "react";

import { sample } from "../../utils";
import { WORDS } from "../../data";
import GuessInput from "./GuessInput";
import Guess from "./Guess2";
import { checkGuess } from "../../game-helpers";
import EmptyRows from "./EmptyRows";
import { NUM_OF_GUESSES_ALLOWED } from "../../constants";

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [guesses, setGuesses] = React.useState([]);
  const [error, setError] = React.useState("");
  const [won, setWon] = React.useState(false);

  function handleSubmit(submittedWord) {
    const guessObj = checkGuess(submittedWord, answer);
    // console.log(guessObj);
    if (
      guesses.length < NUM_OF_GUESSES_ALLOWED &&
      submittedWord.length === 5 &&
      !submittedWord.includes(" ")
    ) {
      if (submittedWord === answer.toUpperCase()) {
        setWon(true);
      }
      guesses.push(guessObj);
      setGuesses([...guesses]);
      setError("");
    } else setError("try again");
  }

  return (
    <div className="game-wrapper">
      <div className="guess-results">
        {guesses.map((item) => (
          <Guess key={Math.random()} data={item} />
        ))}{" "}
        {6 - guesses.length > 0 && (
          <EmptyRows num={NUM_OF_GUESSES_ALLOWED - guesses.length} />
        )}
      </div>
      <GuessInput
        handleSubmit={handleSubmit}
        disabled={won || guesses.length >= NUM_OF_GUESSES_ALLOWED}
      />

      {error && <i>{error}</i>}
      {/* {check && <b>{check}</b>} */}
      {won && (
        <>
          <b>You won! </b>
          <button onClick={() => window.location.reload(false)}>
            Play Again
          </button>
        </>
      )}
      {guesses.length === NUM_OF_GUESSES_ALLOWED && !won && (
        <>
          <b>You lost.</b>
          <button onClick={() => window.location.reload(false)}>
            Play Again
          </button>
        </>
      )}
    </div>
  );
}

export default Game;
