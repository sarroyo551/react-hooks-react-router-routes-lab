import React from "react";
import { actors } from "../data";

function Actors() {

  const actorMap = actors.map((item) => <div key={item.name}>
    <h4>{item.name}</h4>
    <ul>
      {item.movies.map((i) => <li key={i}>
        {i}
        </li>)}
    </ul>
  </div>)

  return <div>
    <h1>Actors Page</h1>
    {actorMap}
  </div>
}

export default Actors;
