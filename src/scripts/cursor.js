import gsap from "gsap";

export default function initCursorTrail() {

  const chars = ["<", ">", "{", "}", "/", ";", "()", "[]", "=>"];
  const trailContainer = document.getElementById("cursor-trail");

  let lastTime = 0;
  const delay = 40; // milisegundos de separación (AJUSTALO)

  window.addEventListener("mousemove", (e) => {

    const now = performance.now();

    // controla que no salgan tan pegados
    if (now - lastTime < delay) return;
    lastTime = now;

    // Crear elemento
    const span = document.createElement("span");
    span.classList.add("trail-char");

    span.textContent = chars[Math.floor(Math.random() * chars.length)];

    span.style.left = e.clientX + "px";
    span.style.top = e.clientY + "px";

    trailContainer.appendChild(span);

    gsap.to(span, {
      y: "+=25",
      opacity: 0,
      scale: 0.7,
      duration: 1,
      ease: "power2.out",
      onComplete: () => span.remove()
    });

  });

}
