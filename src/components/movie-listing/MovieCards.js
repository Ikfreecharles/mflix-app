import { useState, useRef } from "react";

//import components and css
import "./movieCards.css";
import MovieList from "./MovieList";
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";

function MovieCards({ movies, title }) {
   const cardRef = useRef(null);
   const wrapperRef = useRef(null);
   const [mouseIn, setmouseIn] = useState(false);
   let index = 0;

   const handleClick = (direction) => {
      if (direction === "left" && index > 0) {
         index--;
         cardRef.current.style.transform = `translateX(-${
            wrapperRef.current.getBoundingClientRect().width * index
         }px)`;
      } else if (
         direction === "right" &&
         cardRef.current.getBoundingClientRect().width -
            index * wrapperRef.current.getBoundingClientRect().width >
            wrapperRef.current.getBoundingClientRect().width
      ) {
         index++;
         cardRef.current.style.transform = `translateX(-${
            wrapperRef.current.getBoundingClientRect().width * index
         }px)`;
      }
   };

   return (
      <section className="movie-card-outer-div">
         <h3>{title}</h3>
         <div className="movie-card-wrapper" ref={wrapperRef}>
            <div
               className="scroll-arrow left"
               onClick={() => handleClick("left")}
               onMouseEnter={() => setmouseIn(true)}
               onMouseLeave={() => setmouseIn(false)}
               style={{
                  opacity: `${mouseIn ? "1" : "0"}`,
                  transition: "all 0.5s ease-in-out",
               }}
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
               onClick={() => handleClick("right")}
               onMouseEnter={() => setmouseIn(true)}
               onMouseLeave={() => setmouseIn(false)}
               style={{
                  opacity: `${mouseIn ? "1" : "0"}`,
                  transition: "all 0.5s ease-in-out",
               }}
            >
               <IoIosArrowForward />
            </div>
         </div>
      </section>
   );
}

export default MovieCards;
