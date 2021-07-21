import { useState, useEffect } from "react";
import AppContext from "./app-context";
import { useFetch } from "../useFetch";

function AppState(props) {
   const api_key = "e52d1922f45f211a7d31e7e7fe6431de";
   const base_url = "https://image.tmdb.org/t/p/";
   const youtubeBase = "https://www.youtube.com/embed/";

   const [loading, setloading] = useState(false);
   const [trendingMovies, settrendingmovies] = useState([]);
   const [latestMovies, setlatestMovies] = useState([]);
   const [featuredMovie, setfeaturedMovie] = useState({});
   const [featuredMovieVideo, setfeaturedMovieVideo] = useState({});
   const [showModal, setshowModal] = useState(false);
   const [movieID, setmovieID] = useState("");
   const [seriesID, setseriesID] = useState("");
   const [eachMovie, seteachMovie] = useState({});
   const [dataLoadedIsTrue, setdataLoadedIsTrue] = useState(false);
   const [movieCredit, setmovieCredit] = useState({});
   const [seriesCredit, setseriesCredit] = useState({});
   const [similarMovies, setsimilarMovies] = useState([]);
   const [similarSeries, setsimilarSeries] = useState([]);
   const [upcomingMovies, setupcomingMovies] = useState([]);
   const [tvSeries, settvSeries] = useState([]);
   const [eachSeries, seteachSeries] = useState({});
   const [isSeries, setisSeries] = useState(false);
   const [idToListEpisodes, setidToListEpisodes] = useState("");

   //handle show modal for movies
   const handleShowModal = (decision, movieID, isSeriesDecision) => {
      setmovieID(movieID);
      setshowModal(decision);
      setisSeries(isSeriesDecision);
   };
   //handle show modal for series
   const handleShowModalSeries = (decision, seriesID, isSeriesDecision) => {
      setseriesID(seriesID);
      setidToListEpisodes(seriesID);
      setshowModal(decision);
      setisSeries(isSeriesDecision);
   };

   //useEffects
   useEffect(() => {
      getData(
         api_key,
         settrendingmovies,
         setfeaturedMovie,
         setfeaturedMovieVideo,
         setlatestMovies,
         setupcomingMovies,
         settvSeries,
         setloading
      );
   }, []);

   useEffect(() => {
      if (seriesID) {
         getEachSeriesDetails(
            seriesID,
            api_key,
            seteachSeries,
            setsimilarSeries,
            setseriesCredit,
            setdataLoadedIsTrue
         );
      }
      if (movieID) {
         getEachMovieDetails(
            movieID,
            api_key,
            seteachMovie,
            setmovieCredit,
            setsimilarMovies,
            setdataLoadedIsTrue
         );
      }
      return () => {
         setmovieID("");
         setseriesID("");
         seteachMovie({});
         seteachSeries({});
         setsimilarMovies([]);
         setsimilarSeries([]);
         setseriesCredit({});
         setmovieCredit({});
         setdataLoadedIsTrue(false);
      };
   }, [movieID, seriesID]);
   const { getData, getEachMovieDetails, getEachSeriesDetails } = useFetch();
   return (
      <AppContext.Provider
         value={{
            base_url,
            youtubeBase,
            trendingMovies,
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
            seriesID,
            idToListEpisodes,
            loading,
            handleShowModal,
            handleShowModalSeries,
         }}
      >
         {props.children}
      </AppContext.Provider>
   );
}

export default AppState;
