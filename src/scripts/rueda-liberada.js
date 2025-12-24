import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function initVogueScroll(options = {}) {
  gsap.registerPlugin(ScrollTrigger);

  const isHero = document.querySelector("#hero-wheel") !== null;
  const isProyectos = document.querySelector("#proyectos-vogue") !== null;

  // elementos (en HERO usa .wheel-item, en PROYECTOS usa .vogue-item)
  const selector = isHero ? ".wheel-item" : ".vogue-item";
  const items = gsap.utils.toArray(selector);

  // valores según modo
  const radius = isHero ? 230 : 250;
  const cx = isHero ? -180 : window.innerWidth / 2;    // HERO → media rueda
  const cy = window.innerHeight / 2;

  let rotation = 0;

  // ⭐ POSICIÓN INICIAL EN RUEDA
  function renderWheel() {
    items.forEach((el, i) => {
      const angle = (i / items.length) * Math.PI * 2 + rotation;

      const x = cx + Math.cos(angle) * radius;
      const y = cy + Math.sin(angle) * radius;

      gsap.set(el, { x, y });
    });
  }

  renderWheel();

  // ⭐ MODO HERO → rueda gira siempre
  if (isHero) {
    gsap.ticker.add(() => {
      rotation += 0.003;
      renderWheel();
    });
  }

  // ⭐ MODO PROYECTOS → usa scrollTrigger (lo que ya tenías)
  if (isProyectos) {
    const frase1 = document.querySelector("#frase-1");
    const frase2 = document.querySelector("#frase-2");
    const titulo  = document.querySelector("#proyectos-title");
    const frase3 = document.querySelector("#frase-3");

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: "#proyectos-vogue",
        start: "top top",
        end: "+=2000",
        scrub: 1,
        pin: true,
        pinSpacing: true,
      },
    });

    if (frase1) tl.to(frase1, { opacity: 1, y: -20, duration: 1 });
    if (frase2) tl.to(frase2, { opacity: 1, y: -20, duration: 1 });
    if (titulo) tl.to(titulo, { opacity: 1, y: -30, duration: 1 });

    // NO SE DESPARRAMAN — YA INICIAN EN RUEDA
    // Podés agregar efectos aquí si querés

    if (frase3) tl.to(frase3, { opacity: 1, y: -20, duration: 1 });
  }
}
