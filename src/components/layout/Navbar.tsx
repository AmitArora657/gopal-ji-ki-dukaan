import { NavLink } from "react-router-dom";
import Container from "../common/Container";

import logo from "../../assets/images/logo.jpg";

const Navbar = () => {
  const linkClass = ({ isActive }: { isActive: boolean }) =>
    isActive
      ? "font-semibold text-red-900"
      : "text-gray-700 hover:text-red-900 transition";

  return (
    <header className="sticky top-0 z-50 border-b bg-white/90 backdrop-blur">
      <Container className="flex h-20 items-center justify-between">
        <NavLink to="/">
          <img src={logo} alt="Gopal Ji Ki Dukaan" className="h-20 w-auto" />
        </NavLink>
        <nav className="flex items-center gap-8">
          <NavLink to="/" className={linkClass}>
            Home
          </NavLink>

          <NavLink to="/products" className={linkClass}>
            Products
          </NavLink>

          <NavLink to="/about" className={linkClass}>
            About
          </NavLink>

          <NavLink to="/contact" className={linkClass}>
            Contact
          </NavLink>
        </nav>
      </Container>
    </header>
  );
};

export default Navbar;
