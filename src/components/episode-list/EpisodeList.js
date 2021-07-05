import "./episodeList.css";

function EpisodeList({
   name,
   overview,
   stillPath,
   airDate,
   episodeNumber,
   crew,
   baseUrl,
}) {
   return (
      <article className="container ep-div-outer">
         <div className="row">
            <div className="ep-number col-1">
               <h3>{episodeNumber}</h3>
            </div>
            <div className="ep-img-div col-3">
               <img src={`${baseUrl}original${stillPath}`} alt={name} />
            </div>
            <div className="ep-description col-8">
               <h3>{name}</h3>
               <p style={{ height: "96px" }}>
                  {overview
                     ? overview.length > 170
                        ? `${overview.substring(0, 170)}...`
                        : `${overview.substring(0, 170)}`
                     : "No overview information"}
               </p>
               <p>
                  <span>Air Date: </span>
                  {airDate ? airDate : "No Information"}
               </p>
               <div className="ep-crew">
                  <p style={{ height: "92px" }}>
                     <span>Crew: </span>
                     {crew.length !== 0
                        ? crew
                             .map((item) => `${item.job}: ${item.name}`)
                             .join(", ").length > 170
                           ? `${crew
                                .map((item) => `${item.job}: ${item.name}`)
                                .join(", ")}...`
                           : crew
                                .map((item) => `${item.job}: ${item.name}`)
                                .join(", ")
                        : "No Information"}
                  </p>
               </div>
            </div>
         </div>
      </article>
   );
}

export default EpisodeList;
