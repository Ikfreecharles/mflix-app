import { useState, useRef } from "react";
import "./movieCards.css";
import MovieList from "./MovieList";
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";

function MovieCards({ movies, baseUrl, handleShowModal, title }) {
   const listRef = useRef();
   const [slideNumber, setslideNumber] = useState(0);

   const handleClick = (direction) => {
      let distance = listRef.current.getBoundingClientRect().x;
      console.log(listRef.current.getBoundingClientRect());
      if (direction === "left" && slideNumber > 0) {
         setslideNumber((slideNumber) => slideNumber - 4);
         listRef.current.style.transform = `translateX(${
            210 * 4 + distance
         }px)`;
      }
      if (direction === "right" && slideNumber < movies.length) {
         setslideNumber((slideNumber) => slideNumber + 4);
         listRef.current.style.transform = `translateX(${
            -210 * 4 + distance
         }px)`;
      }
   };
   return (
      <section className="movie-card-outer-div">
         <h3>{title}</h3>
         <div className="movie-card-wrapper">
            <div
               className="scroll-arrow left"
               onClick={() => handleClick("left")}
            >
               <IoIosArrowBack />
            </div>
            <div className="movie-card-outer-container" ref={listRef}>
               {movies.map((items, index) => {
                  const {
                     id,
                     adult,
                     backdrop_path,
                     title,
                     name,
                     overview,
                     release_date,
                     original_language,
                  } = items;
                  return (
                     <MovieList
                        key={items.id}
                        id={id}
                        adult={adult}
                        backdropPath={backdrop_path}
                        movieTitle={title}
                        name={name}
                        overview={overview}
                        releaseDate={release_date}
                        originalLanguage={original_language}
                        index={index}
                        baseUrl={baseUrl}
                        handleShowModal={handleShowModal}
                        handleClick={handleClick}
                     />
                  );
               })}
            </div>
            <div
               className="scroll-arrow right"
               onClick={() => handleClick("right", slideNumber, setslideNumber)}
            >
               <IoIosArrowForward />
            </div>
         </div>
      </section>
   );
}

export default MovieCards;
