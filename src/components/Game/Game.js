import React from "react";
import { sample } from "../../utils";
import { WORDS } from "../../data";
import GuessInput from "./GuessInput";
import Guess from "./Guess2";
import { checkGuess } from "../../game-helpers";
import EmptyRows from "./EmptyRows";
import { NUM_OF_GUESSES_ALLOWED } from "../../constants";
import HappyBanner from "../HappyBanner/HappyBanner";
import SadBanner from "../SadBanner/SadBanner";
import Keyboard from "../Keyboard/Keyboard";

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

const startingKeyboardData = {
  Q: "",
  W: "",
  E: "",
  R: "",
  T: "",
  Y: "",
  U: "",
  O: "",
  I: "",
  P: "",
  A: "",
  S: "",
  D: "",
  F: "",
  G: "",
  H: "",
  J: "",
  K: "",
  L: "",
  Z: "",
  X: "",
  C: "",
  V: "",
  B: "",
  N: "",
  M: "",
};

function Game() {
  const [guesses, setGuesses] = React.useState([]);
  const [guessesString, setGuessesString] = React.useState([]);
  const [gameState, setGameState] = React.useState("playing");
  const [keyboardData, setKeyboardData] = React.useState(startingKeyboardData);

  function handleSubmit(submittedWord) {
    // validate submission
    const submissionValidates =
      !guessesString.includes(submittedWord) &&
      !submittedWord.includes(" ") &&
      submittedWord.length === 5;

    // update game
    if (submissionValidates) {
      const newGuess = checkGuess(submittedWord, answer);
      for (const element of newGuess) {
        const { letter, status } = element;
        if (element.status !== "") {
          keyboardData[letter.toUpperCase()] = status;
          setKeyboardData(keyboardData);
          // console.log(keyboardData);
        }
      }

      //console.log(newGuess.map((item) => item.letter).join(""));
      // console.log(guesses);
      // console.log(newGuess);
      guesses.push(newGuess);
      setGuesses([...guesses]);
      guessesString.push(submittedWord);
      setGuessesString([...guessesString]);
      // console.log(guessesString);
      if (submittedWord === answer.toUpperCase()) {
        setGameState("won");
      } else if (guesses.length === 6) {
        setGameState("lost");
      }
    }
  }

  return (
    <>
      <div className="guess-results">
        {guesses.map((item) => (
          <Guess key={Math.random()} data={item} />
        ))}{" "}
        {NUM_OF_GUESSES_ALLOWED - guesses.length > 0 && (
          <EmptyRows num={NUM_OF_GUESSES_ALLOWED - guesses.length} />
        )}
      </div>
      <GuessInput
        handleSubmit={handleSubmit}
        //  disabled={!(guesses.length < NUM_OF_GUESSES_ALLOWED)}
        disabled={gameState !== "playing"}
        msg="Enter a guess:"
      />
      <Keyboard data={keyboardData} />
      {gameState === "won" && <HappyBanner numOfGuesses={guesses.length} />}
      {gameState === "lost" && <SadBanner answer={answer} />}
    </>
  );
}

export default Game;
