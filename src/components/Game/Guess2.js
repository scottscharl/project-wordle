export default function Guess({ data }) {
  return (
    <p key={Math.random()} className="guess">
      {data.map((item) => (
        <span key={Math.random()} className={`cell ${item.status}`}>
          {item.letter}
        </span>
      ))}
    </p>
  );
}
