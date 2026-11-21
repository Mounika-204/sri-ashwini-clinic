
import { motion, useReducedMotion } from "framer-motion";
import {
  Bone,
  Activity,
  PersonStanding,
  Dumbbell,
  Waves,
  HeartPulse,
  ArrowUpRight,
  Sparkles,
} from "lucide-react";

const conditions = [
  {
    number: "01",
    icon: Bone,
    title: "Back Pain",
    text: "Physiotherapy assessment and care guidance for back pain, spinal discomfort and movement-related difficulties.",
    image: "/images/back pain.jpg",
    alt: "Back pain physiotherapy care and spinal movement assessment",
    tag: "Spine Care",
  },
  {
    number: "02",
    icon: PersonStanding,
    title: "Neck Pain",
    text: "Physiotherapy guidance for neck pain, stiffness, restricted movement and improving everyday comfort.",
    image: "/images/neck pain.jpg",
    alt: "Neck pain physiotherapy and neck mobility care",
    tag: "Neck Care",
  },
  {
    number: "03",
    icon: Activity,
    title: "Joint Pain",
    text: "Individualised physiotherapy guidance for joint pain, mobility concerns and improving movement and function.",
    image: "/images/joint pain.jpg",
    alt: "Joint pain physiotherapy and mobility exercises",
    tag: "Joint Mobility",
  },
  {
    number: "04",
    icon: Dumbbell,
    title: "Sports Injuries",
    text: "Sports injury physiotherapy assessment and movement guidance to support recovery and physical function.",
    image: "/images/sports.jpg",
    alt: "Sports injury physiotherapy and physical movement care",
    tag: "Sports Care",
  },
  {
    number: "05",
    icon: Waves,
    title: "Muscle Pain",
    text: "Physiotherapy support for muscle pain, tightness and movement limitations through appropriate care guidance.",
    image: "/images/muscle.jpg",
    alt: "Muscle pain physiotherapy and muscle movement care",
    tag: "Muscle Care",
  },
  {
    number: "06",
    icon: HeartPulse,
    title: "Posture Problems",
    text: "Physiotherapy guidance for posture awareness, body alignment and developing healthier movement habits.",
    image:
      "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&w=900&q=85",
    alt: "Posture improvement exercises and physiotherapy guidance",
    tag: "Posture Care",
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.07,
    },
  },
};

const cardVariants = {
  hidden: {
    opacity: 0,
    y: 25,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.45,
      ease: "easeOut",
    },
  },
};

export default function Conditions() {
  const reduce = useReducedMotion();

  const reveal = reduce
    ? {}
    : {
        initial: { opacity: 0, y: 20 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true, amount: 0.2 },
        transition: { duration: 0.5, ease: "easeOut" },
      };

  return (
    <section
      className="conditions-page section"
      id="conditions"
      aria-labelledby="conditions-title"
    >
      <div className="conditions-bg-orb orb-one" />
      <div className="conditions-bg-orb orb-two" />

      <div className="conditions-container">
        {/* SECTION HEADING */}
        <motion.div
          className="conditions-heading"
          {...reveal}
        >
          <div className="conditions-eyebrow">
            <Sparkles size={15} />
            WHAT BRINGS YOU HERE?
          </div>

          <h2 id="conditions-title">
            Common Conditions We Treat.
            <br />
            <em>Move with confidence.</em>
          </h2>

          <p>
            At Sri Ashwini Physiotherapy Clinic in Danavaipeta,
            Rajahmundry, we provide professional physiotherapy
            assessment and guidance for common pain, mobility
            and movement-related concerns.
          </p>
        </motion.div>

        {/* FEATURE IMAGE */}
        <motion.div
          className="conditions-feature"
          {...reveal}
        >
          <div className="conditions-feature-image">
            <img
              src="https://images.pexels.com/photos/7659564/pexels-photo-7659564.jpeg"
              alt="Professional physiotherapy consultation and patient care"
              loading="lazy"
              decoding="async"
            />
          </div>

          <div className="conditions-feature-overlay" />

          <div className="conditions-feature-content">
            <span>PERSON-CENTRED CARE</span>

            <h3>
              Your movement.
              <br />
              Your wellbeing.
            </h3>

            <p>
              Understand your concerns with guidance from a
              qualified healthcare professional.
            </p>
          </div>

          <div className="feature-floating-icon">
            <Activity size={28} />
          </div>
        </motion.div>

        {/* CONDITION CARDS */}
        <div className="conditions-grid-heading">
          <div>
            <span>EXPLORE CONDITIONS</span>
            <h3>How can we help?</h3>
          </div>

          <p>
            Explore common reasons people seek physiotherapy
            care in Rajahmundry.
          </p>
        </div>

        <motion.div
          className="condition-grid"
          variants={containerVariants}
          initial={reduce ? false : "hidden"}
          whileInView={reduce ? undefined : "visible"}
          viewport={{ once: true, amount: 0.1 }}
        >
          {conditions.map((item) => {
            const Icon = item.icon;

            return (
              <motion.article
                className="condition-card"
                key={item.title}
                variants={reduce ? undefined : cardVariants}
                whileHover={
                  reduce
                    ? undefined
                    : {
                        y: -5,
                        transition: { duration: 0.2 },
                      }
                }
              >
                <div className="condition-image-wrap">
                  <img
                    src={item.image}
                    alt={item.alt}
                    loading="lazy"
                    decoding="async"
                  />

                  <div className="condition-image-overlay" />

                  <div className="condition-card-icon">
                    <Icon size={23} strokeWidth={1.8} />
                  </div>
                </div>

                <div className="condition-card-content">
                  <span className="condition-tag">
                    {item.tag}
                  </span>

                  <h3>{item.title}</h3>

                  <p>{item.text}</p>

                  <a
                    href="#appointment"
                    className="condition-link"
                    aria-label={`Enquire about physiotherapy for ${item.title}`}
                  >
                    Enquire Now
                    <ArrowUpRight size={17} />
                  </a>
                </div>
              </motion.article>
            );
          })}
        </motion.div>

        {/* MEDICAL NOTE */}
        <motion.div
          className="conditions-note"
          {...reveal}
        >
          <HeartPulse size={23} />

          <p>
            A professional physiotherapy assessment is necessary
            to determine appropriate care based on individual
            symptoms and healthcare needs.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
