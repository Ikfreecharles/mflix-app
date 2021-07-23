import { useState, useRef } from "react";

//import components and css
import "./newMovies.css";
import List from "./List";
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";

function NewMovies({ heading, data }) {
   const listRef = useRef(null);
   const sectionRef = useRef(null);
   const [mouseIn, setmouseIn] = useState(false);
   let idx = 0;

   const handleClick = (direction) => {
      const listRefWidth = listRef.current.getBoundingClientRect().width;
      const sectionRefWidth = sectionRef.current.getBoundingClientRect().width;
      const widthDiff = listRefWidth - idx * sectionRefWidth;

      if (direction === "left" && idx > 0) {
         idx--;
         listRef.current.style.transform = `translateX(-${
            idx * sectionRefWidth
         }px)`;
      } else if (direction === "right" && widthDiff > sectionRefWidth) {
         idx++;
         listRef.current.style.transform = `translateX(-${
            idx * sectionRefWidth
         }px)`;
      }
      console.log("index: ", idx);
   };

   return (
      <section className="new-movie-section">
         <h3>{heading}</h3>
         <div className="movie-list" ref={sectionRef}>
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
               <IoIosArrowBack className="nm-scroll-arrow" />
            </div>
            )
            <div
               className="list-container"
               ref={listRef}
               onMouseEnter={() => setmouseIn(true)}
               onMouseLeave={() => setmouseIn(false)}
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
                        name={name}
                        firstAirDate={first_air_date}
                        releaseDate={release_date}
                        posterPath={poster_path}
                        originalLanguage={original_language}
                        adult={adult}
                     />
                  );
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
            )
         </div>
      </section>
   );
}

export default NewMovies;
