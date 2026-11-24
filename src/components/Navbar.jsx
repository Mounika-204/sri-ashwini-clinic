import { useState, useEffect } from "react";
import { Menu, X, ArrowUpRight, Activity } from "lucide-react";
import {
  motion,
  AnimatePresence,
  useReducedMotion,
} from "framer-motion";
import { Link, useLocation } from "react-router-dom";

const links = [
  ["Home", "/"],
  ["About", "/about"],
  ["Conditions", "/conditions"],
  ["Treatments", "/treatments"],
  ["Doctor", "/doctor"],
  ["Gallery", "/gallery"],
  ["Contact", "/contact"],
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const location = useLocation();
  const reduce = useReducedMotion();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 35);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const isActive = (url) => {
    if (url === "/") return location.pathname === "/";
    return location.pathname === url ||
      location.pathname.startsWith(url + "/");
  };

  return (
    <>
      <motion.header
        className={`navbar-3d ${scrolled ? "navbar-scrolled" : ""}`}
        initial={reduce ? false : { y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{
          duration: 0.85,
          ease: [0.22, 1, 0.36, 1],
        }}
      >
        <div className="navbar-orb navbar-orb-one" />
        <div className="navbar-orb navbar-orb-two" />

        {/* LOGO */}

        <motion.div
          className="brand-3d"
          whileHover={reduce ? {} : {
            scale: 1.04,
            rotateY: -7,
            rotateX: 5,
          }}
          transition={{ type: "spring", stiffness: 250 }}
        >
          <Link to="/" className="brand-link">
            <motion.div
              className="brand-image-wrap"
              animate={reduce ? {} : {
                y: [0, -4, 0],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              <img
                src="/images/logo-optimized.webp"
                alt="Sri Ashwini Physiotherapy Clinic"
              />
            </motion.div>

            <span className="brand-text">
              <b>SRI ASHWINI</b>
              <small>PHYSIOTHERAPY CLINIC</small>
            </span>
          </Link>
        </motion.div>

        {/* DESKTOP NAVIGATION */}

        <nav className="nav-3d-links">
          {links.map(([name, url], index) => (
            <motion.div
              key={name}
              className="nav-3d-item"
              initial={reduce ? false : {
                opacity: 0,
                y: -15,
              }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.06 + 0.2 }}
              whileHover={reduce ? {} : {
                y: -4,
                scale: 1.06,
              }}
            >
              <Link
                to={url}
                className={isActive(url) ? "active" : ""}
              >
                {name}
                <span className="nav-3d-line" />
              </Link>
            </motion.div>
          ))}
        </nav>

        {/* APPOINTMENT BUTTON */}

        <motion.div
          className="nav-book-wrap"
          whileHover={reduce ? {} : {
            y: -4,
            scale: 1.04,
          }}
          whileTap={{ scale: 0.96 }}
        >
          <Link to="/appointment" className="nav-book-3d">
            <span>Book Appointment</span>
            <ArrowUpRight size={17} />
          </Link>
        </motion.div>

        {/* MOBILE MENU BUTTON */}

        <motion.button
          className="nav-mobile-toggle"
          onClick={() => setOpen(!open)}
          whileTap={{ scale: 0.88, rotate: 8 }}
          aria-label={open ? "Close navigation" : "Open navigation"}
          aria-expanded={open}
        >
          <AnimatePresence mode="wait" initial={false}>
            <motion.span
              key={open ? "close" : "menu"}
              initial={{ opacity: 0, rotate: -90, scale: 0.5 }}
              animate={{ opacity: 1, rotate: 0, scale: 1 }}
              exit={{ opacity: 0, rotate: 90, scale: 0.5 }}
              transition={{ duration: 0.2 }}
            >
              {open ? <X size={24} /> : <Menu size={24} />}
            </motion.span>
          </AnimatePresence>
        </motion.button>
      </motion.header>

      {/* MOBILE NAVIGATION */}

      <AnimatePresence>
        {open && (
          <>
            <motion.div
              className="nav-mobile-backdrop"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setOpen(false)}
            />

            <motion.nav
              className="nav-mobile-panel"
              initial={{ opacity: 0, y: -25, scale: 0.94 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -20, scale: 0.96 }}
              transition={{
                duration: 0.35,
                ease: [0.22, 1, 0.36, 1],
              }}
            >
              <div className="mobile-menu-heading">
                <div>
                  <Activity size={19} />
                  <span>EXPLORE OUR CLINIC</span>
                </div>
              </div>

              {links.map(([name, url], index) => (
                <motion.div
                  key={name}
                  initial={{ opacity: 0, x: 25 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.055 }}
                >
                  <Link
                    to={url}
                    onClick={() => setOpen(false)}
                    className={isActive(url) ? "active" : ""}
                  >
                    <span className="mobile-link-number">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    {name}
                    <ArrowUpRight size={17} />
                  </Link>
                </motion.div>
              ))}

              <Link
                to="/appointment"
                className="mobile-book-button"
                onClick={() => setOpen(false)}
              >
                Book Your Appointment
                <ArrowUpRight size={18} />
              </Link>
            </motion.nav>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
