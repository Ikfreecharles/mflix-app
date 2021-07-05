import "./App.css";
import Featured from "./components/featured/Featured";
import Nav from "./components/nav/Nav";
import MovieCards from "./components/movie-listing/MovieCards";
import MovieModalPreview from "./components/modal-preview/MovieModalPreview";
import NewMovies from "./components/new-releases/NewMovies";
import { useFectch } from "./useFetch";

function App() {
   const {
      base_url,
      youtubeBase,
      movie,
      latestMovies,
      featuredMovie,
      featuredMovieVideo,
      showModal,
      eachMovie,
      dataLoadedIsTrue,
      movieCredit,
      seriesCredit,
      similarMovies,
      similarSeries,
      upcomingMovies,
      tvSeries,
      eachSeries,
      isSeries,
      idToListEpisodes,
      handleShowModal,
      handleShowModalSeries,
      handleClick,
   } = useFectch();

   return (
      <div className="app-div">
         <Nav />
         <Featured
            data={movie}
            baseUrl={base_url}
            featuredMovie={featuredMovie}
            featuredMovieVideo={featuredMovieVideo}
            youtubeBase={youtubeBase}
            handleShowModal={handleShowModal}
            handleShowModalSeries={handleShowModalSeries}
         />
         <MovieCards
            title={"Now Playing"}
            movies={latestMovies}
            baseUrl={base_url}
            handleShowModal={handleShowModal}
            handleClick={handleClick}
         />
         <MovieCards
            title={"Upcoming Movies"}
            movies={upcomingMovies}
            baseUrl={base_url}
            handleShowModal={handleShowModal}
         />
         <article className="new-movies-container-div-app-js">
            <NewMovies
               heading={"Tv Series"}
               data={tvSeries}
               baseUrl={base_url}
               handleShowModal={handleShowModalSeries}
               handleShowModalSeries={handleShowModalSeries}
            />
         </article>
         {showModal && dataLoadedIsTrue && (
            <MovieModalPreview
               handleShowModal={handleShowModal}
               eachMovieAndSeries={
                  Object.keys(eachSeries).length !== 0 ? eachSeries : eachMovie
               }
               eachSeries={eachSeries}
               creditMovieAndSeries={
                  Object.keys(seriesCredit).length !== 0
                     ? seriesCredit
                     : movieCredit
               }
               baseUrl={base_url}
               similarMoviesAndSeries={
                  similarMovies.length !== 0 ? similarMovies : similarSeries
               }
               isSeries={isSeries}
               idToListEpisodes={idToListEpisodes}
            />
         )}
      </div>
   );
}

export default App;
