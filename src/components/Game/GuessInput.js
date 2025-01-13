import React from "react";

export default function GuessInput({ handleSubmit, disabled }) {
  const [input, setInput] = React.useState("");

  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        handleSubmit(input);
        setInput("");
      }}
      className="guess-input-wrapper"
    >
      <label htmlFor="guess-input">Enter guess:</label>
      <input
        id="guess-input"
        type="text"
        maxLength={5}
        minLength={5}
        value={input}
        onChange={(event) => setInput(event.target.value.toUpperCase())}
        disabled={disabled}
      />
    </form>
  );
}
