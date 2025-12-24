import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export function initProjectsScroll() {
  const cards = document.querySelectorAll(".project-card");
  if (!cards.length) return;

  cards.forEach(card => {

    // Animación de entrada del proyecto
    gsap.from(card, {
      opacity: 0,
      y: 80,
      duration: 1,
      ease: "power3.out",
      scrollTrigger: {
        trigger: card,
        start: "top 70%"
      }
    });

    // Animación DIFERIDA de los links
    const links = card.querySelector(".project-links");

    if (links) {
      gsap.to(links, {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: "power2.out",
        scrollTrigger: {
          trigger: card,
          start: "top 55%"
        }
      });
    }
  });
}
