import { useEffect, useRef } from "react";
import gsap from "gsap";
import { initHeroWheel } from "../scripts/hero-wheel.js";

const techs = [
  "/img/js.png",
  "/img/angular.png",
  "/img/react.png",
  "/img/gsap.jpg",
  "/img/tai.png",
  "/img/docker.png",
  "/img/java.webp",
   "/img/angular.png",
  "/img/react.png",
  "/img/gsap.jpg",
  "/img/tai.png",
  "/img/docker.png",
  "/img/java.webp",
  
  
];

export default function Hero() {
  const titleRef = useRef(null);
  const subtitleRef = useRef(null);

  useEffect(() => {
    initHeroWheel();

    gsap.from([titleRef.current, subtitleRef.current], {
      opacity: 0,
      y: 50,
      duration: 1.5,
      delay: 0.3,
      ease: "power3.out",
    });
  }, []);

  return (
    <section
      id="hero"
      className="min-h-screen flex items-center px-10 pt-20 relative"

      
      
    >
<div className="w-1/2 relative h-[700px] overflow-hidden">
  {/* CONTENEDOR QUE RECORTA */}
  <div className="absolute left-0 top-1/2 -translate-y-1/2 w-[800px] h-[800px] overflow-hidden">
    
    {/* RUEDA QUE GIRA */}
    <div id="hero-wheel" className="absolute w-full h-full">
      {techs.map((src, i) => (
        <img
          key={i}
          src={src}
          className="hero-wheel-item absolute w-24 h-24 rounded-xl shadow-xl"
        />
      ))}
    </div>

  </div>
</div>



{/* DERECHA */}
<div className="w-1/2 text-left">
  <h1
    ref={titleRef}
    className="text-6xl md:text-7xl font-bold text-purple-400"
  >
    ¡Hola! <br />Soy Ayelén
  </h1>

  {/* TÍTULO UNIVERSITARIO */}
  <h2 className="mt-4 text-xl md:text-2xl text-white font-semibold">
    Técnica Universitaria en Desarrollo Web{" "}
    <span className="text-purple-400">| UNLaM</span>
  </h2>

  {/* STACK */}
  <p
    ref={subtitleRef}
    className="mt-3 text-lg text-gray-300 max-w-xl"
  >
    Fullstack · .NET · Java · React · DevOps
  </p>

  <div className="mt-10 flex gap-4">
    <a className="px-6 py-3 bg-purple-600 rounded-xl">
      Ver proyectos
    </a>
   <a
  href="/cv/Ayelen-Quiroga-CV.pdf"
  download
  target="_blank"
  class="px-6 py-3 border border-purple-500 rounded-xl hover:bg-purple-500 transition"
>
  Descargar CV
</a>

  </div>
</div>


{/* BADGE AWS */}
<div
  id="aws-badge"
  className="absolute top-24 right-10 bg-black/40 backdrop-blur-md
             border border-purple-500/30 text-sm text-white
             px-5 py-3 rounded-xl shadow-lg "
>
  <span className="text-purple-400 font-semibold">
    Cursando
  </span>{" "}
  AWS Certified Solutions Architect
  <span className="ml-2 bg-lime-400 text-black text-xs px-2 py-1 rounded-md font-bold">
    NEW
  </span>

</div>



    </section>
  );
}
