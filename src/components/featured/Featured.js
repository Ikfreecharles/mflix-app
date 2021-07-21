import { useContext } from "react";
import AppContext from "../../Context/app-context";

//import css and components
import "./featured.css";
import "./featuredMediaquery.css";
import { AiOutlineInfoCircle } from "react-icons/ai";
import { BsFillPlayFill } from "react-icons/bs";
import NewMovies from "../new-releases/NewMovies";

function Featured() {
   const { base_url, featuredMovie } = useContext(AppContext);
   const { title, name, overview, backdrop_path } = featuredMovie;

   return (
      <section className="featured-outer-div">
         <div className="featured-inner-div">
            <div className="featured-inner-div-padded">
               {/* {featuredMovieVideo.key ? (
                  <iframe
                     src={`${youtubeBase}${featuredMovieVideo.key}?autoplay=1&mute=1&loop=1`}
                     title={title || name}
                  ></iframe>
               ) : (
                  <video>
                     <source src={`${youtubeBase}${featuredMovieVideo.key}`} />
                  </video> 
                  <img
                     src={`${baseUrl}original/${backdrop_path}`}
                     alt={title || name}
                  />
               )} */}
               <img
                  src={`${base_url}original${backdrop_path}`}
                  alt={title || name}
               />
               <div className="overlay"></div>
               <div className="featured-video-details">
                  <img src="" alt="" />
                  <h2>{title || name}</h2>
                  <p>
                     {overview.length > 350
                        ? `${overview.toString().substring(0, 350)}...`
                        : overview}
                  </p>
                  <div className="buttons-div">
                     <button className="play-button">
                        <BsFillPlayFill className="icon-size" /> Play
                     </button>
                     <button className="more-info-button">
                        <AiOutlineInfoCircle className="icon-size" /> More Info
                     </button>
                  </div>
               </div>
            </div>
            <NewMovies heading={"Trending Today"} />
         </div>
      </section>
   );
}

export default Featured;
