import React from "react";
import MoreLikeThisList from "./MoreLikeThisList";

function MoreLikeThis({ similarMoviesAndSeries, baseUrl }) {
   return (
      <article className="container" style={{ padding: "0 5% 2rem" }}>
         <div className="row g-3">
            {similarMoviesAndSeries.map((moviesAndSeries) => {
               const {
                  id,
                  backdrop_path,
                  overview,
                  adult,
                  release_date,
                  rating,
                  title,
                  name,
                  first_air_date,
                  original_name,
                  original_language,
                  vote_average,
               } = moviesAndSeries;
               return (
                  <MoreLikeThisList
                     key={id}
                     backdropPath={backdrop_path}
                     overview={overview}
                     adult={adult}
                     releaseDate={release_date}
                     rating={rating}
                     baseUrl={baseUrl}
                     title={title}
                     name={name}
                     firstAirDate={first_air_date}
                     originalName={original_name}
                     originalLanguage={original_language}
                     voteAverage={vote_average}
                  />
               );
            })}
         </div>
      </article>
   );
}

export default MoreLikeThis;
