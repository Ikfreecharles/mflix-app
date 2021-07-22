import { useEffect, useContext } from "react";
import AppContext from "../../Context/app-context";

//import components and css
import "./movieModalPreview.css";
import { CgClose } from "react-icons/cg";
import MoreLikeThis from "../more-like-this/MoreLikeThis";
import SeriesDetails from "../series-details/SeriesDetails";

function MovieModalPreview() {
   let eachMovieAndSeries;
   let creditMovieAndSeries;
   let similarMoviesAndSeries;
   const {
      handleShowModal,
      base_url,
      isSeries,
      idToListEpisodes,
      eachSeries,
      eachMovie,
      seriesCredit,
      movieCredit,
      similarMovies,
      similarSeries,
   } = useContext(AppContext);

   Object.keys(eachSeries).length !== 0
      ? (eachMovieAndSeries = eachSeries)
      : (eachMovieAndSeries = eachMovie);
   Object.keys(seriesCredit).length !== 0
      ? (creditMovieAndSeries = seriesCredit)
      : (creditMovieAndSeries = movieCredit);
   similarMovies.length !== 0
      ? (similarMoviesAndSeries = similarMovies)
      : (similarMoviesAndSeries = similarSeries);

   const {
      backdrop_path,
      overview,
      runtime,
      release_date,
      adult,
      title,
      name,
      genres,
      status,
      first_air_date,
      number_of_seasons,
      seasons,
      original_language,
   } = eachMovieAndSeries;

   const { cast, crew } = creditMovieAndSeries;

   useEffect(() => {
      document.body.style.overflow = "hidden";
      return () => {
         document.body.style.overflowY = "";
      };
   }, []);

   try {
      return (
         <article className="mmp-div">
            <div className="mmp-outer-div">
               <div
                  className="mmp-close"
                  onClick={() => handleShowModal(false)}
               >
                  <CgClose />
               </div>
               <div className="mmp-img-overlay">
                  <img
                     className="mmp-img"
                     src={`${base_url}original${backdrop_path}`}
                     alt={title ? title : name}
                  />
                  <div className="overlay"></div>
               </div>

               <div className="container mmp-container-adjust">
                  <section className="mmp-details row">
                     <div className="mmp-description col-lg-7">
                        <p className="mmp-title">{title ? title : name}</p>
                        <div className="mmp-desc-metadata">
                           <p style={{ color: "#00b916" }}>
                              {release_date
                                 ? release_date.substring(0, 4)
                                 : first_air_date.substring(0, 4) || "no date"}
                           </p>
                           <p className="age-limit">
                              {adult === true || adult === false
                                 ? adult === true
                                    ? "16+"
                                    : "<12"
                                 : original_language.toUpperCase()}
                           </p>
                           <p>
                              {runtime
                                 ? `${Math.floor(runtime / 60)}h ${
                                      runtime % 60
                                   } m`
                                 : `${number_of_seasons}${
                                      number_of_seasons > 1
                                         ? " seasons"
                                         : " season"
                                   }`}
                           </p>
                        </div>
                        <p className="mmp-desc">{overview}</p>
                        {/* <div className="mmp-production-companies">
                           {production_companies.map((logo) => {
                              const { id, logo_path, name } = logo;
                              return (
                                 <img
                                    key={id}
                                    src={`${baseUrl}original${logo_path}`}
                                    alt={name || logo_path}
                                 />
                              );
                           })}
                        </div> */}
                     </div>
                     <div className="mmp-cast col-lg-4">
                        <p>
                           <span>Cast: </span>
                           {`${cast
                              .slice(0, 4)
                              .map((item) => item.name)
                              .join(", ")}, `}{" "}
                           <span
                              style={{
                                 color: "#4c4c4c",
                                 fontStyle: "italic",
                                 cursor: "pointer",
                              }}
                           >
                              <a href="#more">more...</a>
                           </span>
                        </p>
                        <p>
                           <span>Genres: </span>
                           {genres.map((item) => item.name).join(", ")}
                        </p>
                        <p>
                           <span>This film is: </span>
                           {`${status}` || "No information"}
                        </p>
                     </div>
                  </section>
               </div>
               {/**if isSeries is true, display this component */}
               {isSeries && (
                  <SeriesDetails
                     numberOfSeasons={number_of_seasons}
                     episodePerSeason={seasons}
                     baseUrl={base_url}
                     idToListEpisodes={idToListEpisodes}
                  />
               )}
               {/**if isSeries is true, display this component */}

               {/**call the more like this component*/}
               <h3>More Like This</h3>
               <MoreLikeThis
                  similarMoviesAndSeries={similarMoviesAndSeries}
                  baseUrl={base_url}
               />
               {/**call the more like this component*/}

               <h3>About the Movie</h3>
               <div className="mmp-about-movie" id="more">
                  <p>
                     <span>Director: </span>
                     {crew
                        .filter((crews) => crews.job === "Director")
                        .map((item) => item.name)
                        .join(", ")}
                  </p>
                  <p>
                     <span>Cast: </span>
                     {cast.map((item) => item.name).join(", ")}
                  </p>
                  <p>
                     <span>Screenplay: </span>
                     {crew
                        .filter((crews) => crews.job === "Screenplay")
                        .map((item) => item.name)
                        .join(", ") || "No information"}
                  </p>
                  <p>
                     <span>Genres: </span>
                     {genres.map((item) => item.name).join(", ") ||
                        "No information"}
                  </p>
                  <p>
                     <span>This film is: </span>
                     {`${status}` || "No information"}
                  </p>
                  <p>
                     {adult === false || adult === true ? (
                        adult === true ? (
                           <span>
                              Maturity rating:
                              <span className="age-limit">16</span> Suitable for
                              ages 16 and up
                           </span>
                        ) : (
                           <span>
                              Maturity rating:
                              <span className="age-limit">12</span> Suitable for
                              ages 12 and up
                           </span>
                        )
                     ) : (
                        <span>
                           Original Language: {original_language.toUpperCase()}
                        </span>
                     )}
                  </p>
               </div>
            </div>
         </article>
      );
   } catch (error) {
      console.log(error);
   }
}

export default MovieModalPreview;
