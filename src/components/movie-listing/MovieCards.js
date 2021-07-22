import { useState, useRef } from "react";

//import components and css
import "./movieCards.css";
import MovieList from "./MovieList";
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";

function MovieCards({ movies, title }) {
   const cardRef = useRef(null);
   const wrapperRef = useRef(null);
   const [slideNumber, setslideNumber] = useState(0);
   let index = 0;
   const handleClick = (direction) => {
      if (direction === "left" && index > 0) {
         index--;
         cardRef.current.style.transform = `translateX(-${800 * index}px)`;
      } else if (
         direction === "right" &&
         cardRef.current.getBoundingClientRect().width - index * 800 >
            wrapperRef.current.getBoundingClientRect().width
      ) {
         index++;
         cardRef.current.style.transform = `translateX(-${800 * index}px)`;
      }
   };
   console.log(index);
   return (
      <section className="movie-card-outer-div">
         <h3>{title}</h3>
         <div className="movie-card-wrapper" ref={wrapperRef}>
            <div
               className="scroll-arrow left"
               onClick={() => handleClick("left")}
            >
               <IoIosArrowBack />
            </div>
            <div className="movie-card-outer-container" ref={cardRef}>
               {movies.map((items) => {
                  return <MovieList key={items.id} item={items} />;
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
