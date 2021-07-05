import { useState, useRef } from "react";
import List from "./List";
import "./newMovies.css";
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";

function NewMovies({
   data,
   baseUrl,
   handleShowModal,
   handleShowModalSeries,
   heading,
}) {
   const [slideNumber, setslideNumber] = useState(0);
   const [mouseIn, setmouseIn] = useState(true);
   const listRef = useRef();

   const handleClick = (direction) => {
      let distance = listRef.current.getBoundingClientRect().x;
      console.log(listRef.current.getBoundingClientRect());
      if (direction === "left" && slideNumber > 0) {
         setslideNumber((slideNumber) => slideNumber - 4);
         listRef.current.style.transform = `translateX(${
            210 * 4 + distance
         }px)`;
      }
      if (direction === "right" && slideNumber < data.length - 4) {
         setslideNumber((slideNumber) => slideNumber + 4);
         listRef.current.style.transform = `translateX(${
            -210 * 4 + distance
         }px)`;
      }
   };

   return (
      <section className="new-movie-section">
         <h3>{heading}</h3>
         <div className="movie-list">
            {mouseIn && (
               <div
                  className="scroll-arrow left"
                  onClick={() => handleClick("left")}
                  //onMouseEnter={() => setmouseIn(true)}
               >
                  <IoIosArrowBack />
               </div>
            )}
            <div
               className="list-container"
               ref={listRef}
               /* onMouseEnter={() => setmouseIn(true)}
               onMouseLeave={() => setmouseIn(false)} */
            >
               {data.map((items) => {
                  const {
                     id,
                     backdrop_path,
                     title,
                     media_type,
                     name,
                     poster_path,
                     first_air_date,
                     release_date,
                     original_language,
                     adult,
                  } = items;
                  return (
                     <List
                        key={id}
                        id={id}
                        backdrop={backdrop_path}
                        title={title}
                        mediaType={media_type}
                        baseUrl={baseUrl}
                        name={name}
                        firstAirDate={first_air_date}
                        releaseDate={release_date}
                        posterPath={poster_path}
                        originalLanguage={original_language}
                        adult={adult}
                        handleShowModal={handleShowModal}
                        handleShowModalSeries={handleShowModalSeries}
                     />
                  );
               })}
            </div>
            {mouseIn && (
               <div
                  className="scroll-arrow right"
                  onClick={() => handleClick("right")}
                  //onMouseEnter={() => setmouseIn(true)}
               >
                  <IoIosArrowForward />
               </div>
            )}
         </div>
      </section>
   );
}

export default NewMovies;
