import { useContext } from "react";
import AppContext from "./Context/app-context";

//import components
import Featured from "./components/featured/Featured";
import Nav from "./components/nav/Nav";
import MovieCards from "./components/movie-listing/MovieCards";
import MovieModalPreview from "./components/modal-preview/MovieModalPreview";
import NewMovies from "./components/new-releases/NewMovies";

function AppInner() {
   const { loading, showModal, dataLoadedIsTrue } = useContext(AppContext);

   return (
      <div>
         <Nav />

         {loading ? <Featured /> : <h2 id="page-loading">Loading...</h2>}

         {/*  <MovieCards
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
         </article>*/}
         {showModal && dataLoadedIsTrue && <MovieModalPreview />}
      </div>
   );
}

export default AppInner;
