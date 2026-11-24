
import { motion, useReducedMotion } from "framer-motion";

import {
  ArrowDown,
  ArrowUpRight,
  Sparkles,
  Activity,
} from "lucide-react";

import { lazy, Suspense } from "react";

const Hero3D = lazy(() => import("../components/Hero3D"));

export default function Hero() {
  const reduce = useReducedMotion();

  const textReveal = {
    hidden: {
      opacity: 0,
      y: 25,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: reduce ? 0 : 0.65,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  const smoothReveal = {
    hidden: {
      opacity: 0,
      y: 18,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: reduce ? 0 : 0.55,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  return (
    <section className="hero" id="home">

      {/* BACKGROUND LAYERS */}
      <div className="hero-background" />
      <div className="hero-light-beam" />
      <div className="hero-grid-overlay" />

      {/* STATIC GLOW - avoids continuous animation */}
      <div className="hero-glow hero-glow-one" />
      <div className="hero-glow hero-glow-two" />

      {/* LEFT CONTENT */}
      <motion.div
        className="hero-content"
        initial={reduce ? false : "hidden"}
        animate="visible"
        variants={{
          hidden: {},
          visible: {
            transition: {
              staggerChildren: reduce ? 0 : 0.12,
              delayChildren: reduce ? 0 : 0.1,
            },
          },
        }}
      >

        <motion.div
          className="hero-premium-eyebrow"
          variants={smoothReveal}
        >
          <span className="hero-eyebrow-icon">
            <Activity size={15} />
          </span>

          SRI ASHWINI PHYSIOTHERAPY CLINIC

          <span className="hero-eyebrow-line" />
        </motion.div>

        <div className="hero-title-wrap">

        <motion.h1 variants={textReveal}>
          Sri Ashwini Physiotherapy Clinic
          <br />

          <span className="hero-title-highlight">
            <em>Trusted Physiotherapy Center in Rajahmundry.</em>
          </span>
        </motion.h1>

        </div>

        <motion.div
          className="hero-title-decoration"
          variants={smoothReveal}
        >
          <span />
          <Sparkles size={17} />
          <span />
        </motion.div>

        <motion.p
         className="hero-description"
         variants={smoothReveal}
         >
           Discover the art of better movement with personalised
           physiotherapy care in Danavaipeta, Rajahmundry.
           Focused on movement, strength and helping you feel
           more confident every day.
        </motion.p>

        {/* BUTTONS */}
        <motion.div
          className="hero-actions"
          variants={smoothReveal}
        >

          <motion.a
            href="#appointment"
            className="btn btn-green hero-main-button"
            whileHover={
              reduce
                ? undefined
                : { scale: 1.03, y: -3 }
            }
            whileTap={
              reduce
                ? undefined
                : { scale: 0.98 }
            }
          >
            Book an Appointment
            <ArrowUpRight size={19} />
          </motion.a>

          <motion.a
            href="#about"
            className="hero-link"
            whileHover={
              reduce ? undefined : { x: 5 }
            }
          >
            Discover More

            <span className="hero-link-icon">
              <ArrowDown size={16} />
            </span>
          </motion.a>

        </motion.div>

        {/* BOTTOM LABEL */}
        <motion.div
          className="hero-label"
          variants={smoothReveal}
        >
          <span className="hero-label-line" />
          MOVEMENT <i>•</i> WELLNESS <i>•</i> CARE
        </motion.div>

      </motion.div>

      {/* RIGHT 3D MODEL */}
      <motion.div
        className="hero-3d-wrapper"
        initial={reduce ? false : { opacity: 0, x: 35 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{
          duration: reduce ? 0 : 0.8,
          delay: reduce ? 0 : 0.25,
          ease: [0.22, 1, 0.36, 1],
        }}
      >

        <div className="hero-3d-floating">
  <Suspense fallback={<div className="hero-3d-placeholder" />}>
    <Hero3D />
  </Suspense>
</div>

        {/* MODEL DECORATIVE RING */}
        <div className="hero-model-ring" />

        {/* FLOATING LABEL */}
        <motion.div
          className="hero-floating-badge"
          initial={reduce ? false : { opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: reduce ? 0 : 0.6,
            delay: reduce ? 0 : 0.6,
          }}
        >

          <span className="hero-badge-icon">
            <Activity size={19} />
          </span>

          <span>
            <small>FOCUS ON</small>
            <strong>BETTER MOVEMENT</strong>
          </span>

        </motion.div>

      </motion.div>

      {/* DECORATIVE ORBITS */}
      <div className="hero-orbit orbit-one" />
      <div className="hero-orbit orbit-two" />

      {/* SCROLL INDICATOR */}
      <motion.a
        href="#about"
        className="hero-scroll-indicator"
        aria-label="Scroll to learn about the clinic"
        initial={reduce ? false : { opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{
          duration: reduce ? 0 : 0.5,
          delay: reduce ? 0 : 0.8,
        }}
      >
        <span>SCROLL TO EXPLORE</span>
        <ArrowDown size={16} />
      </motion.a>

    </section>
  );
}
