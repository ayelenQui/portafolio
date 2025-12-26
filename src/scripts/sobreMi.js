import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export function initSobreMiScroll() {
  const wrapper = document.querySelector(".sobre-mi-wrapper");
  if (!wrapper) return;

  /* =========================
     HELPER
  ========================= */
  function hideAllItems(tl) {
    tl.to(".bolso-item", {
      opacity: 0,
      scale: 0.4,
      x: 0,
      y: 0,
      duration: 0.3
    });
  }

  /* =========================
     ESTADO INICIAL
  ========================= */
  gsap.set(".sobre-mi-content", { opacity: 0, y: 100 });
  gsap.set(".sobre-mi-texto", { opacity: 0, y: 40 });
  gsap.set(".bolso-title", { opacity: 0, x: -180 });

  gsap.set(".bolso-wrapper", {
    opacity: 0,
    scale: 1.4,
    x:-180
  });

  gsap.set(".bolso-item", {
    opacity: 0,
    scale: 0.4,
    x: 0,
    y: 0
  });

  /* =========================
     TIMELINE
  ========================= */
  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: wrapper,
      start: "top top",
      end: "+=300%",
      scrub: true,
      pin: true,
      anticipatePin: 1,
       pinSpacing: true,
    }
  });

  /* =========================
     HERO UNLaM
  ========================= */
  tl.to(".sobre-mi-bg", { scale: 1.4, ease: "none" });
  tl.to(".sobre-mi-title", { opacity: 0, y: -100 }, "<");
  tl.to(".sobre-mi-hero", { opacity: 0 });

  /* =========================
     CONTENIDO
  ========================= */
  tl.to(".sobre-mi-content", { opacity: 1, y: 0, duration: 1 });
  tl.to(".sobre-mi-texto", { opacity: 1, y: 0, duration: 1 });

  /* =========================
     TÍTULO METÁFORA
  ========================= */
tl.to(".bolso-title", {
  opacity: 1,
  x: 100,
        // 👈 se corre a la izquierda
  duration: 1.5,
  ease: "circ.inOut"
});


  /* =========================
     BOLSO (ENTRA GRANDE)
  ========================= */
  tl.to(".bolso-wrapper", {
    opacity: 1,
    scale: 1,
    duration: 1.5,
    x:0,
    ease: "sine.inOut",
    delay: 0.2
  });

  /* =========================
     FRONTEND
  ========================= */
  hideAllItems(tl);

  tl.to(".stack-label", { textContent: "Frontend", duration: 0.5 });

  tl.to(".bolso-item.front", {
    opacity: 1,
    scale: 1,
    x: (i, el, arr) => (i - (arr.length - 1) / 2) * 60,
    y: (i) => -180 - i * 20,
    stagger: 0.12,
    duration: 2.5,
    delay: 0.2,
    
  });

  /* =========================
     BACKEND
  ========================= */
  hideAllItems(tl);

  tl.to(".stack-label", { textContent: "Backend", duration: 0.2 });

  tl.to(".bolso-item.back", {
    opacity: 1,
    scale: 1,
    x: (i, el, arr) => (i - (arr.length - 1) / 2) * 70,
    y: (i) => -200 - i * 25,
    stagger: 0.12,
    duration: 2.5,
    ease: "power3.out"
  });

  /* =========================
     DEVOPS
  ========================= */
  hideAllItems(tl);

  tl.to(".stack-label", { textContent: "DevOps", duration: 0.2 });

  tl.to(".bolso-item.devops", {
    opacity: 1,
    scale: 1,
    x: (i, el, arr) => (i - (arr.length - 1) / 2) * 80,
    y: -220,
    stagger: 0.15,
    duration: 2.5,
    ease: "power3.out"
  });
}
gsap.registerPlugin(ScrollTrigger);

gsap.utils.toArray(".project-card").forEach(card => {
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
});