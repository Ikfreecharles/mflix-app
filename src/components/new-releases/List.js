import { useRef, useContext } from "react";
import AppContext from "../../Context/app-context";

//import components and css
import { BsFillPlayFill } from "react-icons/bs";
import { AiOutlinePlus } from "react-icons/ai";
import { IoIosArrowDown } from "react-icons/io";

function List({
   id,
   backdrop,
   title,
   mediaType,
   name,
   firstAirDate,
   releaseDate,
   posterPath,
   originalLanguage,
   adult,
}) {
   const { base_url, handleShowModal, handleShowModalSeries } =
      useContext(AppContext);
   const movieCardRef = useRef();

   //console.log(firstAirDate, releaseDate);
   const handleShowModalId = (type, airDate, iD) => {
      if (type === "tv" || airDate !== "") {
         handleShowModalSeries(true, iD, true);
      } else {
         handleShowModal(true, iD, false);
      }
   };
   const handleMouseEnter = () => {
      movieCardRef.current.style.transform = `scale(1.1)`;
      movieCardRef.current.style.zIndex = `2`;
      movieCardRef.current.style.transition = `all 0.4s ease-in-out`;
      setTimeout(() => {
         movieCardRef.current.style.backgroundImage = `url(${base_url}original${posterPath})`;
      }, 500);
   };
   const handleMouseOut = () => {
      movieCardRef.current.style.transform = `scale(1)`;
      movieCardRef.current.style.zIndex = `0`;
      movieCardRef.current.style.transition = `all 0.4s ease-in-out`;
      setTimeout(() => {
         movieCardRef.current.style.backgroundImage = `url(${base_url}original${backdrop})`;
      }, 500);
   };

   return (
      <article>
         <div
            className="movie-card"
            onMouseEnter={() => handleMouseEnter()}
            onMouseLeave={() => handleMouseOut()}
            ref={movieCardRef}
            style={{ backgroundImage: `url(${base_url}original${backdrop})` }}
         >
            <div className="overlay"></div>

            <div className="movie-logo-div">
               <div className="movie-type">
                  <img className="movie-type" src="/images/onlyN.png" alt="" />
                  <p>{mediaType === "tv" ? "Series" : mediaType || "Series"}</p>
               </div>
               {mediaType === "tv" && (
                  <div className="stripe-outer">
                     <div className="stripe">
                        <p>New Episode</p>
                     </div>
                  </div>
               )}
            </div>
            <div className="overlay-two"></div>

            <div className="movie-details">
               <div className="control">
                  <div className="play-plus">
                     <div className="play">
                        <BsFillPlayFill />
                     </div>
                     <div className="plus">
                        <AiOutlinePlus />
                     </div>
                  </div>
                  <div
                     className="details"
                     onClick={() => {
                        firstAirDate
                           ? handleShowModalId(mediaType, firstAirDate, id)
                           : handleShowModalId(mediaType, "", id);
                     }}
                  >
                     <IoIosArrowDown />
                  </div>
               </div>
               <h4>{title || name}</h4>
               <div className="movie-more-details">
                  <p style={{ color: "#1abb00" }}>97% match</p>
                  <p className="age-limit">
                     {adult === true || adult === false
                        ? adult === true
                           ? "16+"
                           : "<12"
                        : originalLanguage.toUpperCase()}
                  </p>
                  <p>{firstAirDate ? firstAirDate : releaseDate}</p>
               </div>
               <ul className="movie-genre-list">
                  <li>Exciting</li>
                  <div className="l-dot"></div>
                  <li>Action</li>
                  <div className="l-dot"></div>
                  <li>Comedy</li>
               </ul>
            </div>
         </div>
      </article>
   );
}

export default List;
