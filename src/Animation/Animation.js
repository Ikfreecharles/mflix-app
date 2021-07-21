import anime from "animejs/lib/anime.es.js";

const navAnimate = () => {
   anime({
      targets: ".menu-div",
      opacity: [0, 1],
      duration: 1000,
   });
};

const movieCardAnimate = () => {
   anime({
      targets: ".movie-card",
      height: "27rem",
      width: "270px",
   });
};

export { navAnimate, movieCardAnimate };
