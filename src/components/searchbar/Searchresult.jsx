import React from "react";
import "./searchresult.css";

const Searchresult = ({ results }) => {
  return (
    <div className="results">
      {results.map((result, id) => {
        return <div key={id}>{result.name}</div>;
      })}
    </div>
  );
};

export default Searchresult;
