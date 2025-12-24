import gsap from "gsap";

export function initHeroWheel() {
  const items = gsap.utils.toArray(".hero-wheel-item");
  const wheel = document.getElementById("hero-wheel");

  const radius = 360;
  const center = 170;

  items.forEach((el, i) => {
    const angle = (i / items.length) * Math.PI * 2;

    gsap.set(el, {
      x: center + Math.cos(angle) * radius - 48,
      y: center + Math.sin(angle) * radius - 48,
    });
  });

  // 👇 AHORA SÍ: GIRAMOS LA RUEDA
  gsap.to(wheel, {
    rotation: 360,
    duration: 20,
    ease: "none",
    repeat: -1,
    transformOrigin: "50% 50%",
  });

  // 👇 CONTRARROTACIÓN para que los íconos no giren
  gsap.to(items, {
    rotation: -360,
    duration: 20,
    ease: "none",
    repeat: -1,
    transformOrigin: "50% 50%",
  });
}
