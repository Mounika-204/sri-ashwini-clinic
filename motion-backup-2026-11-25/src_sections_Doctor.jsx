
import { motion, useReducedMotion } from "framer-motion";
import {
  ArrowUpRight,
  Stethoscope,
  Activity,
  HeartPulse,
  Plus,
  Sparkles,
} from "lucide-react";

const words = ["Care", "with", "purpose."];

export default function Doctor() {
  const reduce = useReducedMotion();

  const reveal = (delay = 0) =>
    reduce
      ? {}
      : {
          initial: { opacity: 0, y: 35 },
          whileInView: { opacity: 1, y: 0 },
          viewport: { once: true, amount: 0.25 },
          transition: {
            duration: 0.85,
            delay,
            ease: [0.22, 1, 0.36, 1],
          },
        };

  return (
    <section className="doctor doctor-premium section" id="doctor">

      {/* Background effects */}
      <div className="doctor-bg-glow doctor-glow-one" />
      <div className="doctor-bg-glow doctor-glow-two" />
      <div className="doctor-grid-pattern" />

      <div className="doctor-premium-inner">

        {/* LEFT - 3D MEDICAL ARTWORK */}
        <motion.div
          className="doctor-visual doctor-3d-visual"
          initial={reduce ? {} : { opacity: 0, x: -80, rotateY: 18 }}
          whileInView={reduce ? {} : { opacity: 1, x: 0, rotateY: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
        >

          <div className="doctor-visual-label">
            <span className="doctor-label-dot" />
            PERSONALised CARE
          </div>

          <div className="doctor-orbit-scene">

            {/* Outer rotating rings */}
            <div className="doctor-orbit doctor-orbit-outer" />
            <div className="doctor-orbit doctor-orbit-middle" />
            <div className="doctor-orbit doctor-orbit-inner" />

            {/* Floating icon cards */}
            <motion.div
              className="doctor-float-card doctor-float-top"
              animate={reduce ? {} : { y: [0, -13, 0], rotate: [0, 5, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            >
              <HeartPulse size={27} />
            </motion.div>

            <motion.div
              className="doctor-float-card doctor-float-bottom"
              animate={reduce ? {} : { y: [0, 12, 0], rotate: [0, -7, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            >
              <Activity size={28} />
            </motion.div>

            <motion.div
              className="doctor-float-card doctor-float-side"
              animate={reduce ? {} : { y: [0, -9, 0], x: [0, 5, 0] }}
              transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut" }}
            >
              <Plus size={25} />
            </motion.div>

            {/* Central glass sculpture */}
            <div className="doctor-glass-sculpture">
              <div className="doctor-glass-inner">
                <div className="doctor-icon-halo" />
                <Stethoscope className="doctor-main-icon" strokeWidth={1.2} />
                <div className="doctor-sculpture-caption">
                  <Sparkles size={13} />
                  CARE & COMMITMENT
                </div>
              </div>
            </div>

            {/* Orbit particles */}
            <span className="doctor-particle particle-one" />
            <span className="doctor-particle particle-two" />
            <span className="doctor-particle particle-three" />
            <span className="doctor-particle particle-four" />

          </div>

          <div className="doctor-visual-bottom">
            <span>01 / PERSONAL ATTENTION</span>
            <span>02 / THOUGHTFUL CARE</span>
          </div>

        </motion.div>

        {/* RIGHT - DOCTOR CONTENT */}
        <div className="doctor-content doctor-premium-content">

          <motion.div
            className="doctor-premium-eyebrow"
            {...reveal(0.1)}
          >
            <span className="doctor-eyebrow-line" />
            MEET YOUR PHYSIOTHERAPIST
          </motion.div>

          {/* Animated heading */}
          <h2 className="doctor-premium-heading">
            <span className="doctor-heading-line">
              {words.map((word, index) => (
                <motion.span
                  key={word}
                  className="doctor-word"
                  initial={reduce ? {} : { opacity: 0, y: 45, rotateX: -35 }}
                  whileInView={reduce ? {} : { opacity: 1, y: 0, rotateX: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.75,
                    delay: 0.2 + index * 0.14,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                >
                  {word}
                </motion.span>
              ))}
            </span>

            <motion.span
              className="doctor-heading-highlight"
              initial={reduce ? {} : { opacity: 0, x: 45, filter: "blur(8px)" }}
              whileInView={reduce ? {} : { opacity: 1, x: 0, filter: "blur(0px)" }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.75 }}
            >
              Guidance with heart.
            </motion.span>
          </h2>

          <motion.div
            className="doctor-name-block"
            {...reveal(0.55)}
          >
            <span className="doctor-name-line" />
            <div>
              <h3>Dr. Ashwini Gayatri</h3>
              <span>PHYSIOTHERAPIST</span>
            </div>
          </motion.div>

          <motion.p
            className="doctor-premium-description"
            {...reveal(0.7)}
          >
            At Sri Ashwini Physiotherapy Clinic, every individual deserves
            thoughtful attention. We focus on understanding your needs and
            providing appropriate movement-focused care with a personal
            approach.
          </motion.p>

          {/* Animated values */}
          <motion.div
            className="doctor-values"
            {...reveal(0.85)}
          >
            <div className="doctor-value-item">
              <span className="doctor-value-number">01</span>
              <span>Individual Attention</span>
            </div>

            <div className="doctor-value-item">
              <span className="doctor-value-number">02</span>
              <span>Thoughtful Guidance</span>
            </div>
          </motion.div>

          <motion.a
            href="#appointment"
            className="doctor-premium-button"
            whileHover={reduce ? {} : { scale: 1.04, y: -5 }}
            whileTap={{ scale: 0.96 }}
            {...reveal(1)}
          >
            <span>Contact Our Clinic</span>
            <span className="doctor-button-icon">
              <ArrowUpRight size={20} />
            </span>
          </motion.a>

        </div>
      </div>
    </section>
  );
}
