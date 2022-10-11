import React from "react";
import { movies } from "../data";

function Movies() {

  const movieMap = movies.map((item) => <div key={item.title}>
    <h3>
      {item.title}
    </h3>
    <h4>
      {item.time}
    </h4>
    <ul>
      {item.genres.map((gen) => <li key={gen}>{gen}</li>)}
    </ul>
  </div>
  )

  

  return <div>
    <h1>Movies Page</h1>
      {movieMap}
    </div>;
}

export default Movies;
