import "../styles/global.css";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Divider,
  Link,
  Image
} from "@heroui/react";
import { useRef, useEffect } from "react";
import gsap from "gsap";

export default function Projects() {
  const cardsRef = useRef([]);

  useEffect(() => {
    gsap.from(cardsRef.current, {
      opacity: 0,
      y: 40,
      stagger: 0.2,
      rotate: 360,
      duration: 1.1,
      delay: 0.3,
      ease: "power3.out",
    });
  }, []);

  const projects = [
    {
      title: "FitRank",
      desc: "Plataforma de gimnasio con QR, rutinas y pagos.",
      img: "/images/fitrank.png",
      link: "#"
    },
    {
      title: "Veterinaria Web",
      desc: "Gestión de turnos, diagnósticos y paneles.",
      img: "/images/vet.png",
      link: "#"
    },
    {
      title: "Registro Aduanero",
      desc: "Sistema ASP.NET MVC con validaciones automáticas.",
      img: "/images/aduana.png",
      link: "#"
    }
  ];

  return (
    <section id="projects">
      <h2 className="text-4xl font-bold mb-12 text-center">Proyectos</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((p, i) => (
          <Card
            key={i}
            ref={el => cardsRef.current[i] = el}
            isHoverable
            className="bg-white/5 backdrop-blur-md border border-white/10"
          >
            <CardHeader className="flex items-center gap-3 p-4">
              <Image src={p.img} alt={p.title} width={48} height={48} radius="sm" />
              <h3 className="text-lg font-semibold text-purple-300">{p.title}</h3>
            </CardHeader>
            <Divider />
            <CardBody className="p-4">
              <p className="text-gray-300">{p.desc}</p>
            </CardBody>
            <Divider />
            <CardFooter className="p-4">
              <Link isExternal showAnchorIcon href={p.link} className="text-purple-400">
                Ver más
              </Link>
            </CardFooter>
          </Card>
        ))}
      </div>
    </section>
  );
}
