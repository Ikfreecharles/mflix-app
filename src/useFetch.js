import { useState, useEffect } from "react";

export const useFectch = () => {
   const api_key = "e52d1922f45f211a7d31e7e7fe6431de";
   const base_url = "https://image.tmdb.org/t/p/";
   const youtubeBase = "https://www.youtube.com/embed/";

   const [movie, setdata] = useState([]);
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
      getData();
   }, []);

   useEffect(() => {
      if (seriesID) {
         getEachSeriesDetails(seriesID);
      }
      if (movieID) {
         getEachMovieDetails(movieID);
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

   //Functions
   const getData = async () => {
      //get the trending movie for the day
      const trendingMovieData = await fetch(
         `https://api.themoviedb.org/3/trending/all/day?api_key=${api_key}`
      );
      const trendingMovieResult = await trendingMovieData.json();
      setdata(trendingMovieResult.results);

      //get random video of movie to display in featured
      const movieId =
         trendingMovieResult.results[Math.floor(Math.random() * 20)];
      const featuredVideoData = await fetch(
         `https://api.themoviedb.org/3/movie/${movieId.id}?api_key=${api_key}&append_to_response=videos`
      );
      const featuredVideoResult = await featuredVideoData.json();
      setfeaturedMovie(featuredVideoResult);
      setfeaturedMovieVideo(featuredVideoResult.videos.results[0]);

      //get the latest showing
      const nowPlayingMovieData = await fetch(
         `https://api.themoviedb.org/3/movie/now_playing?api_key=${api_key}`
      );
      const nowPlayingMovieResult = await nowPlayingMovieData.json();
      setlatestMovies(nowPlayingMovieResult.results);

      //get the upcoming movie
      const upcomingMovieData = await fetch(
         `https://api.themoviedb.org/3/movie/upcoming?api_key=${api_key}`
      );
      const upcomingMovieResult = await upcomingMovieData.json();
      setupcomingMovies(upcomingMovieResult.results);

      //get tv series
      const tvSeriesData = await fetch(
         `https://api.themoviedb.org/3/tv/on_the_air?api_key=${api_key}`
      );
      const tvSeriesResult = await tvSeriesData.json();
      settvSeries(tvSeriesResult.results);
   };

   const getEachMovieDetails = async (theMovie_ID) => {
      //get selected movie details
      const MovieDetailsData = await fetch(
         `https://api.themoviedb.org/3/movie/${theMovie_ID}?api_key=${api_key}&append_to_response=videos`
      );
      const MovieDetailsResult = await MovieDetailsData.json();
      seteachMovie(MovieDetailsResult);

      //get selected movie credits
      const movieCreditData = await fetch(
         `https://api.themoviedb.org/3/movie/${theMovie_ID}/credits?api_key=${api_key}`
      );
      const movieCreditResult = await movieCreditData.json();
      setmovieCredit(movieCreditResult);

      //get similar movies
      const similarMoviesData = await fetch(
         `https://api.themoviedb.org/3/movie/${theMovie_ID}/similar?api_key=${api_key}`
      );
      const similarMoviesResult = await similarMoviesData.json();
      setsimilarMovies(similarMoviesResult.results);

      //set to true to show modal
      setdataLoadedIsTrue(true);
   };

   const getEachSeriesDetails = async (theSeries_ID) => {
      //get selected series details
      const seriesDetailsData = await fetch(
         `https://api.themoviedb.org/3/tv/${theSeries_ID}?api_key=${api_key}`
      );
      const seriesDetailsResult = await seriesDetailsData.json();
      seteachSeries(seriesDetailsResult);

      //get similar series
      const similarSeriesData = await fetch(
         `https://api.themoviedb.org/3/tv/${theSeries_ID}/similar?api_key=${api_key}`
      );
      const similarSeriesResult = await similarSeriesData.json();
      setsimilarSeries(similarSeriesResult.results);

      //get selected series credit
      const seriesCreditData = await fetch(
         `https://api.themoviedb.org/3/tv/${theSeries_ID}/credits?api_key=${api_key}`
      );
      const seriesCreditResult = await seriesCreditData.json();
      setseriesCredit(seriesCreditResult);

      //set to true to show modal
      setdataLoadedIsTrue(true);
   };

   //function to handle the scrolling of the components
   /* const handleClick = (direction, slideNumber, setslideNumber, ref, data) => {
      let distance = ref.current.getBoundingClientRect().x;
      console.log(ref);
      if (direction === "left" && slideNumber > 0) {
         setslideNumber(slideNumber - 4);
         ref.current.style.transform = `translateX(${210 * 4 + distance}px)`;
      }
      if (direction === "right" && slideNumber < data.length - 2) {
         setslideNumber(slideNumber + 4);
         ref.current.style.transform = `translateX(${-210 * 4 + distance}px)`;
      }
   }; */

   return {
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
      seriesID,
      idToListEpisodes,

      handleShowModal,
      handleShowModalSeries,
   };
};
