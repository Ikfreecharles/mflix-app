import { useState, useContext } from "react";
import AppContext from "../../Context/app-context";
import HoverModal from "../HoverModal/HoverModal";

function MovieList({ item }) {
   const { base_url, handleShowModal } = useContext(AppContext);
   const {
      id,
      adult,
      backdrop_path,
      title,
      name,
      overview,
      release_date,
      original_language,
   } = item;

   return (
      <article className="movie-list-outer-div-container">
         <div className="movie-list-inner-div">
            <img
               src={`${base_url}original${backdrop_path}`}
               alt={title || name}
            />
         </div>

         <HoverModal
            id={id}
            adult={adult}
            backdropPath={backdrop_path}
            movieTitle={title}
            name={name}
            overview={overview}
            releaseDate={release_date}
            originalLanguage={original_language}
            baseUrl={base_url}
            handleShowModal={handleShowModal}
         />
      </article>
   );
}

export default MovieList;
