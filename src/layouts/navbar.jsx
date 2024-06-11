import { Navbar, Nav, Container } from "react-bootstrap";
import { Outlet, Link, useLocation, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import './navbar.css';
import logo from '../img/logo.png';

const NavigationBar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeLink, setActiveLink] = useState("");
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    setActiveLink(location.pathname);
  }, [location.pathname]);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  const handleLogoClick = () => {
    navigate('/');
  };

  return (
    <>
      <Navbar className="navBg" expand="lg">
        <Container>
          <Navbar.Brand onClick={handleLogoClick} style={{ cursor: 'pointer' }}>
            {/* <img src={logo} alt="Logo de SNP" className="nav-item-img" style={{ width: "40px", height: "100px" }} /> */}
          </Navbar.Brand>
          <div className="custom-toggler" onClick={toggleMenu}>
            <span className="navbar-toggler-icon"></span>
          </div>
        </Container>
      </Navbar>
      {menuOpen && (
        <div className="floating-menu">
          <Nav className="flex-column">
            <Nav.Link
              as={Link}
              to="/preciopordia"
              className={`nav-item-custom ${activeLink === "/preciopordia" ? "active" : ""}`}
              onClick={closeMenu}
            >
              Precio por día
            </Nav.Link>

            <Nav.Link
              as={Link}
              to="/preciohistorico"
              className={`nav-item-custom ${activeLink === "/preciohistorico" ? "active" : ""}`}
              onClick={closeMenu}
            >
              Precio Histórico
            </Nav.Link>

            <Nav.Link
              as={Link}
              to="/selection"
              className={`nav-item-custom ${activeLink === "/selection" ? "active" : ""}`}
              onClick={closeMenu}
            >
              Inicio
            </Nav.Link>
          </Nav>
        </div>
      )}
      <section>
        <Outlet />
      </section>
    </>
  );
};

export default NavigationBar;
