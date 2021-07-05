import "./featured.css";
import { AiOutlineInfoCircle } from "react-icons/ai";
import { BsFillPlayFill } from "react-icons/bs";
import NewMovies from "../new-releases/NewMovies";

function Featured({
   data,
   baseUrl,
   featuredMovie,
   featuredMovieVideo,
   youtubeBase,
   handleShowModal,
   handleShowModalSeries,
}) {
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
                  src={`${baseUrl}original/${backdrop_path}`}
                  alt={title || name}
               />
               <div className="overlay"></div>
               <div className="featured-video-details">
                  <img src="" alt="" />
                  <h2>{title || name}</h2>
                  <p>{overview}</p>
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
            <NewMovies
               heading={"Trending Today"}
               data={data}
               baseUrl={baseUrl}
               handleShowModal={handleShowModal}
               handleShowModalSeries={handleShowModalSeries}
            />
         </div>
      </section>
   );
}

export default Featured;
