import { useState } from "react";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import logo from "../../assets/logo.png";
import Button from "../common/Button";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const closeMenu = () => setOpen(false);

  const scrollWithOffset = (el) => {
    const navbar = document.querySelector(".navbar");
    const navbarHeight = navbar ? navbar.offsetHeight : 76;
    const extraGap = 140;
    const y =
      el.getBoundingClientRect().top + window.scrollY - navbarHeight - extraGap;

    window.scrollTo({
      top: y,
      behavior: "smooth",
    });
  };

  return (
    <>
      <header className="navbar">
        <div className="container nav-inner">
          <Link to="/" className="logo" onClick={closeMenu}>
            <img src={logo} alt="Make Bee Trip" />
          </Link>

          <button
            className="nav-toggle"
            aria-label="Toggle navigation"
            aria-expanded={open}
            onClick={() => setOpen((prev) => !prev)}
            type="button"
          >
            <span />
            <span />
            <span />
          </button>

          <nav className={`nav-links ${open ? "open" : ""}`}>
            <HashLink
              smooth
              to="/#services"
              scroll={scrollWithOffset}
              onClick={closeMenu}
            >
              Services
            </HashLink>

            <HashLink
              smooth
              to="/#destinations"
              scroll={scrollWithOffset}
              onClick={closeMenu}
            >
              Destinations
            </HashLink>

            <HashLink
              smooth
              to="/#hotels"
              scroll={scrollWithOffset}
              onClick={closeMenu}
            >
              Hotels
            </HashLink>

            <HashLink
              smooth
              to="/#contact"
              scroll={scrollWithOffset}
              onClick={closeMenu}
            >
              Contact
            </HashLink>

            <div className="nav-actions mobile-actions">
              <Button variant="outline">Login</Button>
              <Button>Sign Up</Button>
            </div>
          </nav>

          <div className="nav-actions desktop-actions">
            <Button variant="outline">Login</Button>
            <Button>Sign Up</Button>
          </div>
        </div>
      </header>

      {open && <div className="backdrop" onClick={closeMenu} />}
    </>
  );
};

export default Navbar;
