
import { m, useReducedMotion } from "framer-motion";
import {
  CheckCircle2,
  Heart,
  ShieldCheck,
  Sparkles,
  Target,
  Eye,
  ArrowUpRight,
} from "lucide-react";

const features = [
  {
    icon: Heart,
    number: "01",
    title: "Individual Attention",
    text: "Every individual deserves thoughtful attention and care.",
  },
  {
    icon: ShieldCheck,
    number: "02",
    title: "Trusted Care",
    text: "A welcoming environment built around comfort and trust.",
  },
  {
    icon: Sparkles,
    number: "03",
    title: "Personalised Approach",
    text: "An approach that respects individual needs and goals.",
  },
];

export default function About() {
  const reduce = useReducedMotion();

  const reveal = {
    initial: reduce ? false : { opacity: 0, y: 45 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, amount: 0.2 },
    transition: { duration: 0.85, ease: [0.22, 1, 0.36, 1] },
  };

  const stagger = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: reduce ? 0 : 0.16,
      },
    },
  };

  const childReveal = {
    hidden: reduce ? {} : { opacity: 0, y: 35 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.75, ease: [0.22, 1, 0.36, 1] },
    },
  };

  return (
    <div className="about-page">

      {/* OUR STORY */}

      <section className="about-story section" id="about">

        <m.div
          className="about-story-image"
          initial={
            reduce
              ? false
              : { opacity: 0, x: -80, rotateY: 20, rotateX: 8, scale: 0.88 }
          }
          whileInView={{
            opacity: 1,
            x: 0,
            rotateY: 0,
            rotateX: 0,
            scale: 1,
          }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{
            duration: 1.3,
            ease: [0.22, 1, 0.36, 1],
          }}
          animate={
            reduce
              ? {}
              : {
                  y: [0, -12, 0],
                }
          }
          style={{ transformStyle: "preserve-3d" }}
        >
          <m.img
            src="/images/optimized/about-clinic-small.webp"
            alt="Sri Ashwini Physiotherapy Clinic in Danavaipeta, Rajahmundry"
            animate={
              reduce
                ? {}
                : {
                    scale: [1, 1.045, 1],
                    rotateZ: [0, 0.5, 0],
                  }
            }
            transition={{
              duration:16,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />

          <div className="about-image-overlay" />

          <m.div
            className="about-image-label"
            initial={reduce ? false : { opacity: 0, y: 30, z: -40 }}
            whileInView={{ opacity: 1, y: 0, z: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6, duration: 0.9 }}
          >
            <span>WELCOME TO</span>
            <strong>SRI ASHWINI</strong>
          </m.div>

          {!reduce && (
            <m.div
              className="about-image-orbit"
              animate={{ rotate: 360 }}
              transition={{
                duration: 25,
                repeat: Infinity,
                ease: "linear",
              }}
            />
          )}

          <div className="about-image-shine" />
        </m.div>

        <m.div
          className="about-story-content"
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <m.span className="eyebrow" variants={childReveal}>
            ABOUT OUR CLINIC
          </m.span>

          <m.h2 variants={childReveal}>
            A Place Where
            <br />
            <em>Care Comes First.</em>
          </m.h2>

          <m.p className="about-lead" variants={childReveal}>
            Welcome to Sri Ashwini Physiotherapy Clinic in Rajahmundry.
          </m.p>

          <m.p variants={childReveal}>
            Located in Danavaipeta, Rajahmundry, Sri Ashwini Physiotherapy
            Clinic offers personalised physiotherapy care for individuals
            experiencing back pain, neck pain, knee pain, shoulder pain
            and sports injuries. We believe that quality care begins with
            understanding. Our approach focuses on individual attention,
            clear communication and creating a comfortable experience
            for everyone who visits our clinic.
          </m.p>

          <m.div className="about-points" variants={stagger}>
            {[
              "Individual attention",
              "Comfortable environment",
              "Personalised guidance",
            ].map((item) => (
              <m.div key={item} variants={childReveal}>
                <CheckCircle2 size={19} />
                {item}
              </m.div>
            ))}
          </m.div>

          <m.a
            href="#appointment"
            className="text-link"
            variants={childReveal}
            whileHover={reduce ? {} : { x: 8 }}
          >
            Connect With Us <ArrowUpRight size={17} />
          </m.a>
        </m.div>
      </section>

      {/* MISSION AND VISION */}

      <section className="about-purpose">

        <m.div
          className="purpose-heading"
          {...reveal}
        >
          <span className="eyebrow">WHAT GUIDES US</span>
          <h2>
            Our Purpose.
            <br />
            <em>Our Promise.</em>
          </h2>
        </m.div>

        <m.div
          className="purpose-grid"
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
        >
          <m.div
            className="purpose-card"
            variants={childReveal}
            whileHover={
              reduce
                ? {}
                : {
                    y: -12,
                    rotateX: 3,
                    rotateY: -3,
                    scale: 1.015,
                  }
            }
            style={{ transformStyle: "preserve-3d" }}
          >
            <m.div
              className="purpose-icon"
              animate={reduce ? {} : { y: [0, -8, 0] }}
              transition={{
                duration: 7,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              <Target size={30} />
            </m.div>

            <span>OUR MISSION</span>
            <h3>Care With Purpose.</h3>
            <p>
              To provide thoughtful, individual-focused care in a welcoming
              and supportive environment.
            </p>
            <div className="purpose-number">01</div>
          </m.div>

          <m.div
            className="purpose-card purpose-card-dark"
            variants={childReveal}
            whileHover={
              reduce
                ? {}
                : {
                    y: -12,
                    rotateX: 3,
                    rotateY: 3,
                    scale: 1.015,
                  }
            }
            style={{ transformStyle: "preserve-3d" }}
          >
            <m.div
              className="purpose-icon"
              animate={reduce ? {} : { y: [0, -8, 0] }}
              transition={{
                duration: 7,
                delay: 0.5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              <Eye size={30} />
            </m.div>

            <span>OUR VISION</span>
            <h3>Building Trust.</h3>
            <p>
              To create a clinic experience where every individual feels
              respected, understood and valued.
            </p>
            <div className="purpose-number">02</div>
          </m.div>
        </m.div>
      </section>

      {/* WHY CHOOSE US */}

      <section className="about-features">

        <m.div
          className="features-heading"
          {...reveal}
        >
          <span className="eyebrow">THE SRI ASHWINI EXPERIENCE</span>
          <h2>
            Thoughtful Care.
            <br />
            <em>Every Step Of The Way.</em>
          </h2>
        </m.div>

        <m.div
          className="features-grid"
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
        >
          {features.map((item) => {
            const Icon = item.icon;

            return (
              <m.div
                className="about-feature-card"
                key={item.number}
                variants={childReveal}
                whileHover={
                  reduce
                    ? {}
                    : {
                        y: -14,
                        rotateX: 5,
                        rotateY: -4,
                        scale: 1.025,
                      }
                }
                style={{ transformStyle: "preserve-3d" }}
              >
                <span className="feature-number">{item.number}</span>

                <m.div
                  className="feature-icon"
                  whileHover={
                    reduce
                      ? {}
                      : {
                          rotate: 12,
                          scale: 1.15,
                          y: -5,
                        }
                  }
                  transition={{ type: "spring", stiffness: 250 }}
                >
                  <Icon size={30} />
                </m.div>

                <h3>{item.title}</h3>
                <p>{item.text}</p>

                <div className="feature-line" />
                <div className="feature-card-glow" />
              </m.div>
            );
          })}
        </m.div>
      </section>

      {/* FINAL CTA */}

      <section className="about-cta">

        <m.div
          className="cta-glow"
          animate={
            reduce
              ? {}
              : {
                  scale: [1, 1.25, 1],
                  opacity: [0.35, 0.8, 0.35],
                  rotate: [0, 90, 180],
                }
          }
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />

        <m.div
          className="cta-orb cta-orb-one"
          animate={reduce ? {} : { y: [0, -25, 0], x: [0, 15, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        />

        <m.div
          className="cta-orb cta-orb-two"
          animate={reduce ? {} : { y: [0, 20, 0], x: [0, -15, 0] }}
          transition={{
            duration: 7,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        <m.div
          className="about-cta-content"
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <m.span className="eyebrow" variants={childReveal}>
            WE ARE HERE FOR YOU
          </m.span>

          <m.h2 variants={childReveal}>
            Your Wellbeing
            <br />
            <em>Matters To Us.</em>
          </m.h2>

          <m.p variants={childReveal}>
            Get in touch with Sri Ashwini Physiotherapy Clinic in
            Danavaipeta, Rajahmundry.
          </m.p>

          <m.a
            href="#appointment"
            className="about-hero-btn"
            variants={childReveal}
            whileHover={reduce ? {} : { y: -7, scale: 1.04 }}
            whileTap={reduce ? {} : { scale: 0.96 }}
          >
            Connect With Us <ArrowUpRight size={18} />
          </m.a>
        </m.div>
      </section>
    </div>
  );
}

