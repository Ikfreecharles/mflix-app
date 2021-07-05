import "./moreLikeThisList.css";
import { AiOutlinePlus } from "react-icons/ai";

function MoreLikeThisList({
   backdropPath,
   overview,
   adult,
   releaseDate,
   rating,
   baseUrl,
   title,
   name,
   firstAirDate,
   originalName,
   originalLanguage,
   voteAverage,
}) {
   return (
      <div className="col-lg-4 col-md-6 mlt-outer">
         <div className="mlt-outer-div">
            <div className="mlt-img">
               <img src={`${baseUrl}original${backdropPath}`} alt="" />
            </div>
            <div className="mlt-details">
               <div className="mlt-metadata-outer">
                  <div className="mlt-metadata">
                     <p>
                        {releaseDate
                           ? releaseDate.substring(0, 4)
                           : firstAirDate.substring(0, 4)}
                     </p>
                     <p className="age-limit">
                        {adult
                           ? adult
                              ? "18+"
                              : "<12"
                           : originalLanguage.toUpperCase()}
                     </p>
                     <p>Rating: {rating ? rating : voteAverage}</p>
                  </div>
                  <div className="mlt-add">
                     <AiOutlinePlus />
                  </div>
               </div>
               <p className="mlt-title">
                  {title || name ? title || name : originalName}
               </p>
               <p className="mlt-descr">{`${overview.substring(0, 100)}...`}</p>
            </div>
         </div>
      </div>
   );
}

export default MoreLikeThisList;
