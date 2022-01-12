import React, { useEffect } from "react";

export default function Pagination({
  totalGames,
  offset,
  paginate,
  prev,
  next,
}: any) {
  const numberPage = [];

  for (let i = 1; i <= Math.round(totalGames / offset); i++) {
    numberPage.push(i);
  }

  return (
    <div className="pagination">
      <button onClick={prev}>Prev</button>
      <ul>
        {numberPage.map((number, i) => (
          <li
            style={{
              display: "inline",
              padding: "3px",
              border: "1px solid black",
              cursor: "pointer",
            }}
            key={number + i}
            onClick={() => paginate(number)}
          >
            {number}
          </li>
        ))}
      </ul>
      <button onClick={next}>Next</button>
    </div>
  );
}
