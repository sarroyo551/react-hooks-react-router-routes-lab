import React from "react";
import { directors } from "../data";

function Directors() {

  const dirMap = directors.map((item) => <div key={item.name}>
    <h4>
    {item.name}
    </h4>
    <ul>
      {item.movies.map((i) => <li key={i}>{i}</li>)}
    </ul>
  </div>)

  return <div>
    <h1>Directors Page</h1>
    {dirMap}
    </div>;
}

export default Directors;
