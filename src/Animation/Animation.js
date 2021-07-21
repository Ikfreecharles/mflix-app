import anime from "animejs/lib/anime.es.js";

const navAnimate = () =>
   anime({
      targets: ".menu-div",
      opacity: [0, 1],
      duration: 500,
   });

export { navAnimate };
