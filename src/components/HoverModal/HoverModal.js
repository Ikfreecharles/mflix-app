import "./hoverModal.css";
import { BsPlayFill } from "react-icons/bs";
import { AiOutlinePlus } from "react-icons/ai";
import { BiLike, BiDislike } from "react-icons/bi";
import { IoIosArrowDown } from "react-icons/io";

function HoverModal({
   id,
   adult,
   backdropPath,
   movieTitle,
   name,
   overview,
   baseUrl,
   releaseDate,
   originalLanguage,
   handleShowModal,
}) {
   return (
      <article className="hm-outer-container">
         <div className="hm-inner-div">
            <img
               src={`${baseUrl}original${backdropPath}`}
               alt={movieTitle || name}
            />
         </div>
         <div className="hm-details">
            <div className="hm-controls">
               <div className="hm-four-controls">
                  <div className="hm-play">
                     <BsPlayFill />
                  </div>
                  <div className="hm-plus">
                     <AiOutlinePlus />
                  </div>
                  <div className="hm-like">
                     <BiLike />
                  </div>
                  <div className="hm-dislike">
                     <BiDislike />
                  </div>
               </div>
               <div
                  className="hm-dropdown"
                  onClick={() => handleShowModal(true, id)}
               >
                  <IoIosArrowDown />
               </div>
            </div>
            <div className="more-hm-details">
               <p>{releaseDate}</p>
               <p className="age-limit">{adult ? "16+" : "<12"}</p>
               <p>{originalLanguage.toUpperCase()}</p>
            </div>
            <p className="hm-title">{movieTitle || name}</p>

            <div className="hm-genre">
               <p>Action, Comedy</p>
            </div>
         </div>
      </article>
   );
}

export default HoverModal;
