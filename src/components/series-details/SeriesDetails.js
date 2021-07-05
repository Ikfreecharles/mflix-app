import { useState, useEffect } from "react";
import "./seriesDetails.css";
import { TiArrowSortedUp, TiArrowSortedDown } from "react-icons/ti";
import EpisodeList from "../episode-list/EpisodeList";

function SeriesDetails({
   numberOfSeasons,
   episodePerSeason,
   baseUrl,
   idToListEpisodes,
}) {
   const [dropDownIsTrue, setdropDownIsTrue] = useState(false);
   const [title, settitle] = useState("");
   const [seasonNumber, setseasonNumber] = useState(1);
   const [listOfEpisodes, setlistOfEpisodes] = useState([]);

   useEffect(() => {
      getEpisodes(idToListEpisodes, seasonNumber);
      /* return () => {
         setseasonNumber("");
         setlistOfEpisodes([]);
      }; */
   }, [idToListEpisodes, seasonNumber]);

   //function to handle number of season dropdown
   /* [
      {season, episode}
   ] */
   const seasonArray = (input) => {
      let seasonList = [];
      for (let i = 1; i <= input; i++) {
         seasonList.push(i);
      }
      return seasonList;
   };

   const handleEpisodeList = (arrayOne, arrayTwo) => {
      return arrayOne.map((item, index) => ({
         seasonNumber: item,
         numberOfEpisode: arrayTwo[index].episode_count,
      }));
   };

   //handle getting id of the selected season
   const handleClick = (e) => {
      e.preventDefault();
      //set title state to value extracted
      settitle(e.target.innerHTML);
      //set dropDownIsTrue state
      setdropDownIsTrue((dropDownIsTrue) => !dropDownIsTrue);
      //get season number from id
      setseasonNumber(e.target.id);
   };

   //function to get the episodes
   const getEpisodes = async (theSeries_ID, number) => {
      //get selected series comprehensive details
      const seriesComprehensiveDetailsData = await fetch(
         `https://api.themoviedb.org/3/tv/${theSeries_ID}/season/${number}?api_key=e52d1922f45f211a7d31e7e7fe6431de`
      );
      const seriesComprehensiveDetailsResult =
         await seriesComprehensiveDetailsData.json();
      setlistOfEpisodes(seriesComprehensiveDetailsResult.episodes);
   };

   //console.log(listOfEpisodes);
   //console.log(seasonNumber);
   return (
      <article>
         <div className="sd-topbar">
            <h3>Episodes</h3>
            <form className="sd-form">
               <div
                  className="sd-btn"
                  onClick={() => {
                     setdropDownIsTrue((dropDownIsTrue) => !dropDownIsTrue);
                  }}
               >
                  <div className="sd-btn-inner">
                     <p>
                        {title !== ""
                           ? title
                           : handleEpisodeList(
                                seasonArray(numberOfSeasons),
                                episodePerSeason
                             )
                                .slice(0, 1)
                                .map((season) => {
                                   return `Season ${season.seasonNumber}`;
                                })}
                     </p>
                     {dropDownIsTrue ? (
                        <TiArrowSortedUp />
                     ) : (
                        <TiArrowSortedDown />
                     )}
                  </div>
               </div>
               <div
                  className={`sd-options ${dropDownIsTrue ? "sd-show" : ""}`}
                  onClick={(e) => {
                     handleClick(e);
                  }}
               >
                  {handleEpisodeList(
                     seasonArray(numberOfSeasons),
                     episodePerSeason
                  ).map((season) => {
                     return (
                        <p
                           key={season.seasonNumber}
                           value={season.seasonNumber}
                           id={season.seasonNumber}
                        >
                           Season {season.seasonNumber} (
                           {season.numberOfEpisode} episodes)
                        </p>
                     );
                  })}
               </div>
               {/* <select className="sd-btn" name="seasons" id="seasons">
                  {handleEpisodeList(
                     seasonArray(numberOfSeasons),
                     episodePerSeason
                  ).map((season) => {
                     return (
                        <option
                           key={season.seasonNumber}
                           value={season.seasonNumber}
                           onSelect={(e) => {
                              console.log(e);
                           }}
                        >
                           Season {season.seasonNumber} (
                           {season.numberOfEpisode} episodes)
                        </option>
                     );
                  })}
               </select> */}
            </form>
         </div>
         {listOfEpisodes.map((item) => {
            const {
               id,
               name,
               overview,
               still_path,
               air_date,
               episode_number,
               crew,
            } = item;
            return (
               <EpisodeList
                  key={id}
                  name={name}
                  overview={overview}
                  stillPath={still_path}
                  airDate={air_date}
                  episodeNumber={episode_number}
                  crew={crew}
                  baseUrl={baseUrl}
               />
            );
         })}
      </article>
   );
}

export default SeriesDetails;
