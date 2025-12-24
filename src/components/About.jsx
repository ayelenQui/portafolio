import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function About() {
  const aboutRef = useRef(null);

  useEffect(() => {
    gsap.from(aboutRef.current, {
      opacity: 0,
      y: 30,
      duration: 1,
      scrollTrigger: {
        trigger: aboutRef.current,
        start: "top 80%",
      }
    });
  }, []);

  return (
    <section id="about" ref={aboutRef} className="py-40 px-10">
      <h2 className="text-4xl font-bold mb-6">Sobre mí</h2>
      <p className="text-lg text-gray-300 max-w-2xl">
        Soy desarrolladora apasionada por crear productos completos desde cero:
        APIs, interfaces modernas, bases de datos, despliegues y animaciones con un buen UX.
      </p>
    </section>
  );
}
