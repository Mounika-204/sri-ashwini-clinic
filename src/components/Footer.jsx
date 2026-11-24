
import { motion, useReducedMotion } from "framer-motion";

import {
  ArrowUp,
  ArrowDown,
  Heart,
  MapPin,
  Phone,
  Mail,
  ArrowUpRight,
  Activity,
} from "lucide-react";

import {
  FaInstagram,
  FaFacebookF,
  FaYoutube,
} from "react-icons/fa";

const links = [
  ["Home", "/#home"],
  ["About Us", "/#about"],
  ["Treatments", "/#treatments"],
  ["Our Doctor", "/#doctor"],
  ["Gallery", "/#gallery"],
  ["Contact", "/#contact"],
  ["Terms & Conditions", "/terms"],
];

const contactNumbers = [
  "7285992521",
  "7780485780",
  "08832443521",
];

function Footer() {
  const reduce = useReducedMotion();

  const handleBackToTop = (e) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleScrollToBottom = () => {
    window.scrollTo({
      top: document.documentElement.scrollHeight,
      behavior: "smooth",
    });
  };

  const handleLinkClick = (e, path) => {
    if (!path.startsWith("/#")) return;

    const sectionId = path.replace("/#", "");

    // Homepage lo already unte smooth scroll
    if (window.location.pathname === "/") {
      const target = document.getElementById(sectionId);

      if (target) {
        e.preventDefault();

        const headerOffset = 100;

        const targetPosition =
          target.getBoundingClientRect().top +
          window.scrollY -
          headerOffset;

        window.scrollTo({
          top: targetPosition,
          behavior: "smooth",
        });

        window.history.replaceState(null, "", path);
      }
    }
  };

  const reveal = {
    hidden: { opacity: 0, y: 45, rotateX: -12 },
    visible: {
      opacity: 1,
      y: 0,
      rotateX: 0,
      transition: {
        duration: 0.8,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  return (
    <footer
      className="footer-3d"
      aria-label="Sri Ashwini Physiotherapy Clinic footer"
    >
      <div className="footer-glow footer-glow-one" />
      <div className="footer-glow footer-glow-two" />

      <motion.div
        className="footer-floating-icon"
        animate={
          reduce
            ? {}
            : { y: [0, -18, 0], rotate: [0, 12, 0] }
        }
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        <Activity size={35} />
      </motion.div>

      <div className="footer-main">

        {/* BRAND */}
        <motion.div
          className="footer-brand-3d"
          variants={reveal}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <motion.div
            className="footer-logo-icon"
            animate={
              reduce
                ? {}
                : {
                    y: [0, -10, 0],
                    rotateY: [0, 12, 0, -12, 0],
                    rotateX: [0, 5, 0, -5, 0],
                  }
            }
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            whileHover={
              reduce
                ? {}
                : {
                    scale: 1.12,
                    rotateY: 18,
                    rotateX: -8,
                    z: 35,
                  }
            }
            style={{
              transformStyle: "preserve-3d",
              perspective: 1000,
            }}
          >
            <motion.img
              src="/images/logo.webp"
              alt="Sri Ashwini Physiotherapy Clinic logo, Rajahmundry"
              className="footer-logo-image"
              animate={
                reduce
                  ? {}
                  : {
                      filter: [
                        "drop-shadow(0px 5px 5px rgba(0,0,0,0.15))",
                        "drop-shadow(0px 12px 12px rgba(7,158,153,0.35))",
                        "drop-shadow(0px 5px 5px rgba(0,0,0,0.15))",
                      ],
                    }
              }
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
          </motion.div>

          <h2>Sri Ashwini</h2>

          <span className="footer-subtitle">
            PHYSIOTHERAPY CLINIC
          </span>

          <p>
            Sri Ashwini Physiotherapy Clinic in Danavaipeta,
            Rajahmundry, provides personalised physiotherapy
            care focused on movement, comfort and a healthier
            everyday life.
          </p>

          <div
            className="footer-socials"
            aria-label="Follow Sri Ashwini Physiotherapy Clinic on social media"
          >
            <a
              className="social-instagram"
              href="https://www.instagram.com/sriashwiniphysiotherapyclinic?dlrf=MXQyMTJqMjVuZWZreQ=="
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Follow Sri Ashwini Physiotherapy Clinic on Instagram"
            >
              <FaInstagram size={20} />
              <ArrowUpRight size={15} />
            </a>

            <a
              className="social-facebook"
              href="https://www.facebook.com/share/19QETM7fKr/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Follow Sri Ashwini Physiotherapy Clinic on Facebook"
            >
              <FaFacebookF size={20} />
              <ArrowUpRight size={15} />
            </a>

            <a
              className="social-youtube"
              href="https://youtube.com/@sriashwiniphysiotherapyclinic?si=6lVs_8cZ0HAZQHsY"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Watch Sri Ashwini Physiotherapy Clinic videos on YouTube"
            >
              <FaYoutube size={22} />
              <ArrowUpRight size={15} />
            </a>
          </div>
        </motion.div>

        {/* QUICK LINKS */}
        <motion.div
          className="footer-links-3d"
          variants={reveal}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <span className="footer-label">EXPLORE</span>
          <h3>Quick Links</h3>

          <div
            className="footer-link-list"
            role="navigation"
            aria-label="Sri Ashwini Physiotherapy Clinic website navigation"
          >
            {links.map(([name, path]) => (
              <motion.a
                key={name}
                href={path}
                onClick={(e) => handleLinkClick(e, path)}
                whileHover={reduce ? {} : { x: 9 }}
                transition={{ duration: 0.25 }}
                aria-label={`Go to ${name}`}
              >
                {name}
                <ArrowUpRight size={15} />
              </motion.a>
            ))}
          </div>
        </motion.div>

        {/* CONTACT DETAILS */}
        <motion.div
          className="footer-contact-3d"
          variants={reveal}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <span className="footer-label">GET IN TOUCH</span>
          <h3>Let's Connect</h3>

          <div className="footer-phone-group">
            {contactNumbers.map((number, index) => (
              <motion.a
                key={number}
                href={`tel:${number}`}
                className="footer-phone-row"
                whileHover={reduce ? {} : { x: 6 }}
                transition={{ duration: 0.25 }}
                aria-label={`Call Sri Ashwini Physiotherapy Clinic at ${
                  number === "08832443521"
                    ? "0883-2443521"
                    : number === "7285992521"
                    ? "72859 92521"
                    : "77804 85780"
                }`}
              >
                <div className="footer-contact-icon">
                  <Phone size={19} />
                </div>

                <div className="footer-phone-info">
                  <span>
                    {index === 2 ? "LANDLINE" : "MOBILE"}
                  </span>

                  <p>
                    {number === "08832443521"
                      ? "0883-2443521"
                      : number === "7285992521"
                      ? "72859 92521"
                      : "77804 85780"}
                  </p>
                </div>

                <ArrowUpRight size={17} />
              </motion.a>
            ))}
          </div>



          {/* EMAIL */}
           {/* EMAIL */}
<motion.a
  className="footer-contact-card footer-email-fix"
  href="mailto:sriashwiniphysiotherapyclinic@gmail.com"
  initial={false}
  whileHover={reduce ? {} : { x: 7 }}
  transition={{ duration: 0.25 }}
  aria-label="Email Sri Ashwini Physiotherapy Clinic"
>
  <div className="footer-contact-icon">
    <Mail size={20} />
  </div>

  <div className="footer-email-content">
    <span>EMAIL</span>
    <p>sriashwiniphysiotherapyclinic@gmail.com</p>
  </div>

  <ArrowUpRight size={17} />
</motion.a>

          {/* LOCATION */}
          <motion.a
            className="footer-contact-card"
            href="https://maps.app.goo.gl/pF8WpdnFY5EQJ7tw6"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={reduce ? {} : { x: 7 }}
            aria-label="Find Sri Ashwini Physiotherapy Clinic in Danavaipeta, Rajahmundry on Google Maps"
          >
            <div className="footer-contact-icon">
              <MapPin size={20} />
            </div>

            <div>
              <span>LOCATION</span>
              <p>Danavaipeta, Rajahmundry</p>
            </div>

            <ArrowUpRight size={17} />
          </motion.a>

          <div className="footer-appointment">
            <Activity size={19} />
            <span>
              Your journey to better movement starts here.
            </span>
          </div>
        </motion.div>
      </div>

      <div className="footer-3d-divider" />

      {/* FOOTER BOTTOM */}
      <div className="footer-bottom-3d">
        <p>
          © {new Date().getFullYear()} Sri Ashwini Physiotherapy Clinic,
          Rajahmundry. All rights reserved.
        </p>

        <p className="footer-made">
          Made with <Heart size={15} fill="currentColor" />
          for better movement.
        </p>

        <motion.button
          type="button"
          className="footer-top-button"
          onClick={handleBackToTop}
          whileHover={
            reduce ? {} : { y: -6, rotate: -8, scale: 1.1 }
          }
          whileTap={{ scale: 0.9 }}
          aria-label="Back to top of Sri Ashwini Physiotherapy Clinic website"
        >
          <ArrowUp size={20} />
        </motion.button>
      </div>

      <motion.button
        type="button"
        className="footer-bottom-button"
        onClick={handleScrollToBottom}
        whileHover={
          reduce ? {} : { y: 6, rotate: 8, scale: 1.1 }
        }
        whileTap={{ scale: 0.9 }}
        aria-label="Scroll to bottom of website"
      >
        <ArrowDown size={20} />
      </motion.button>
    </footer>
  );
}

export default Footer;
