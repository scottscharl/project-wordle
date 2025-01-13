export default function EmptyRows({ num }) {
  const rows = [];
  for (let i = 0; i < num; i++) {
    rows.push(i);
  }

  const cells = [];
  for (let i = 0; i < 5; i++) {
    cells.push(i);
  }

  return (
    <>
      {rows.map(() => (
        <p key={Math.random()} className="guess">
          {cells.map(() => (
            <span key={Math.random()} className="cell">
              {" "}
            </span>
          ))}
        </p>
      ))}
    </>
  );
}
