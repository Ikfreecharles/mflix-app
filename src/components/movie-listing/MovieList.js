import { useState } from "react";
import { BsPlayFill } from "react-icons/bs";
import { AiOutlinePlus } from "react-icons/ai";
import { BiLike, BiDislike } from "react-icons/bi";
import { IoIosArrowDown } from "react-icons/io";

function MovieList({
   id,
   adult,
   backdropPath,
   movieTitle,
   name,
   overview,
   releaseDate,
   originalLanguage,
   index,
   baseUrl,
   handleShowModal,
}) {
   const [isHoverTrue, setisHoverTrue] = useState(false);

   return (
      <article
         className="movie-list-outer-div-container"
         onMouseOver={() => setisHoverTrue(true)}
         onMouseLeave={() => setisHoverTrue(false)}
         style={{ left: isHoverTrue && index * 230 - 65 + 50 + index * 2.5 }}
      >
         <div className="movie-list-inner-div">
            <img
               src={`${baseUrl}original${backdropPath}`}
               alt={movieTitle || name}
            />
         </div>

         <div className="movie-list-details">
            <div className="movie-list-controls">
               <div className="movie-list-four-controls">
                  <div className="movie-list-play">
                     <BsPlayFill />
                  </div>
                  <div className="movie-list-plus">
                     <AiOutlinePlus />
                  </div>
                  <div className="movie-list-like">
                     <BiLike />
                  </div>
                  <div className="movie-list-dislike">
                     <BiDislike />
                  </div>
               </div>
               <div
                  className="movie-list-dropdown"
                  onClick={() => handleShowModal(true, id)}
               >
                  <IoIosArrowDown />
               </div>
            </div>
            <div className="more-movie-list-details">
               <p>{releaseDate}</p>
               <p className="age-limit">{adult ? "16+" : "<12"}</p>
               <p>{originalLanguage.toUpperCase()}</p>
            </div>
            <p className="movie-list-title">{movieTitle || name}</p>
            <p className="movie-list-description">
               {`${overview.substring(0, 140)}...`}
            </p>
            <div className="movie-list-genre">
               <p>Action, Comedy</p>
            </div>
         </div>
      </article>
   );
}

export default MovieList;
