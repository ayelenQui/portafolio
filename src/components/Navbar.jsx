import "../styles/global.css";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Link,
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
  Avatar
} from "@heroui/react";

export default function AppNavbar() {
  return (
    <Navbar className="fixed top-0 left-0 w-full h-20 z-50 bg-black/80 backdrop-blur">
      <NavbarBrand>
        <span className="font-bold text-white text-xl">AYELÉN</span>
      </NavbarBrand>

      <NavbarContent className="hidden sm:flex gap-6" justify="center">
        <NavbarItem><Link color="foreground" href="#hero">Home</Link></NavbarItem>
        <NavbarItem><Link color="foreground" href="#about">Sobre mí</Link></NavbarItem>
        <NavbarItem><Link color="foreground" href="#projects">Proyectos</Link></NavbarItem>
        <NavbarItem><Link color="foreground" href="#contact">Contacto</Link></NavbarItem>
      </NavbarContent>

      <NavbarContent as="div" justify="end">
        <Dropdown placement="bottom-end">
          <DropdownTrigger>
            <Avatar size="sm" src="/img/gsap.jpg" name="Ayelén" />
          </DropdownTrigger>
          <DropdownMenu variant="flat" aria-label="User Menu">
            <DropdownItem key="perfil">Mi Perfil</DropdownItem>
            <DropdownItem key="logout" color="danger">Cerrar sesión</DropdownItem>
          </DropdownMenu>
        </Dropdown>
      </NavbarContent>
    </Navbar>
  );
}
