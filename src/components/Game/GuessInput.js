import React from "react";

export default function GuessInput({ msg, handleSubmit, disabled }) {
  const [input, setInput] = React.useState("");

  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        if (input.length === 5) {
          handleSubmit(input);
          setInput("");
        }
      }}
      className="guess-input-wrapper"
    >
      <label htmlFor="guess-input">Enter A Guess:</label>
      <input
        id="guess-input"
        type="text"
        maxLength={5}
        minLength={5}
        value={input}
        onChange={(event) => {
          setInput(event.target.value.toUpperCase().replace(/[^a-zA-Z]/g, ""));
        }}
        disabled={disabled}
        // className={disabled ? "visually-hidden" : ""}
      />
    </form>
  );
}
