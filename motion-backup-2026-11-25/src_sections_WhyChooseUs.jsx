
import { motion, useReducedMotion } from "framer-motion";
import Reveal from "../components/Reveal";
import {
  HeartHandshake,
  ShieldCheck,
  Activity,
  Sparkles,
  ArrowUpRight,
} from "lucide-react";

const features = [
  {
    icon: HeartHandshake,
    number: "01",
    title: "Patient First",
    text: "Your concerns and goals matter. We focus on understanding your needs and making every interaction meaningful.",
    accent: "mint",
  },
  {
    icon: ShieldCheck,
    number: "02",
    title: "Guided Care",
    text: "Treatment choices are guided by individual assessment, professional attention and your recovery goals.",
    accent: "blue",
  },
  {
    icon: Activity,
    number: "03",
    title: "Movement Focus",
    text: "We value everyday mobility, comfort and function, helping you work towards confident movement.",
    accent: "gold",
  },
  {
    icon: Sparkles,
    number: "04",
    title: "Personal Attention",
    text: "A thoughtful and supportive experience, with care that respects your individual needs.",
    accent: "violet",
  },
];

export default function WhyChooseUs() {
  const reduce = useReducedMotion();

  return (
    <section className="why section" id="why-choose-us">

      {/* BACKGROUND */}
      <div className="why-bg-glow why-glow-one" />
      <div className="why-bg-glow why-glow-two" />
      <div className="why-grid-lines" />

      <div className="why-container">

        {/* HEADING */}
        <motion.div
          className="why-heading"
          initial={reduce ? false : { opacity: 0, y: 45 }}
          whileInView={reduce ? {} : { opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{
            duration: 0.7,
            ease: "easeOut",
          }}
        >
          <div className="why-eyebrow">
            <span />
            THE DIFFERENCE
            <span />
          </div>

          <h2>
            Why choose
            <br />
            <em>our approach?</em>
          </h2>

          <p>
            Thoughtful care, individual attention and a focus on
            helping you move towards a more comfortable everyday life.
          </p>
        </motion.div>

        {/* 3D FEATURE CARDS */}
        <div className="why-grid">
          {features.map((feature, i) => {
            const Icon = feature.icon;

            return (
              <motion.div
                key={feature.title}
                className={`why-card-wrap why-${feature.accent}`}
                initial={
                  reduce
                    ? false
                    : {
                        opacity: 0,
                        y: 50,
                        rotateX: 10,
                        scale: 0.96,
                      }
                }
                whileInView={
                  reduce
                    ? {}
                    : {
                        opacity: 1,
                        y: 0,
                        rotateX: 0,
                        scale: 1,
                      }
                }
                viewport={{ once: true, amount: 0.15 }}
                transition={{
                  duration: 0.65,
                  delay: i * 0.1,
                  ease: "easeOut",
                }}
                whileHover={
                  reduce
                    ? {}
                    : {
                        y: -8,
                        rotateY: i % 2 === 0 ? 3 : -3,
                        rotateX: -2,
                        scale: 1.015,
                        transition: { duration: 0.25 },
                      }
                }
              >
                <article className="why-card">

                  <div className="why-card-top">
                    <ArrowUpRight
                      className="why-arrow"
                      size={21}
                    />
                  </div>

                  {/* Optimized icon animation */}
                  <motion.div
                    className="why-icon"
                    animate={
                      reduce
                        ? {}
                        : {
                            y: [0, -4, 0],
                          }
                    }
                    transition={{
                      duration: 7 + i,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: i * 0.4,
                    }}
                  >
                    <div className="why-icon-inner">
                      <Icon size={31} strokeWidth={1.7} />
                    </div>

                    <div className="why-icon-orbit" />
                  </motion.div>

                  <div className="why-card-content">
                    <h3>{feature.title}</h3>
                    <p>{feature.text}</p>
                  </div>

                  <div className="why-card-bottom">
                    <span>THOUGHTFUL CARE</span>
                    <span className="why-bottom-line" />
                  </div>

                  <div className="why-card-shine" />

                </article>
              </motion.div>
            );
          })}
        </div>

        {/* BOTTOM MESSAGE */}
        <Reveal>
          <div className="why-bottom-message">
            <div className="why-bottom-icon">
              <HeartHandshake size={24} />
            </div>

            <p>
              Because every individual deserves care that begins with
              understanding.
            </p>

            <Sparkles
              size={20}
              className="why-bottom-sparkle"
            />
          </div>
        </Reveal>

      </div>
    </section>
  );
}
