
import { m, useReducedMotion } from "framer-motion";
import {
  Zap,
  HandHeart,
  Activity,
  Dumbbell,
  ShieldCheck,
  ArrowUpRight,
  Sparkles,
} from "lucide-react";

const treatments = [
  {
    number: "01",
    title: "Electro Therapy",
    desc: "Electrotherapy is a physiotherapy treatment modality that may be used following individual assessment to support pain management and specific rehabilitation needs.",
    image:
      "https://www.medicalbazzar.com/cdn/shop/files/cm15-2_2ae09084-5883-4ad3-ab16-e1cf182396f3.jpg?v=1685474927&width=1445",
    alt: "Electrotherapy equipment used in physiotherapy treatment",
    icon: Zap,
    tag: "ADVANCED MODALITY",
  },
  {
    number: "02",
    title: "Manual Therapy",
    desc: "Manual physiotherapy uses hands-on techniques selected according to individual assessment to address movement limitations, joint mobility and physical comfort.",
    image:
      "https://images.squarespace-cdn.com/content/v1/64dafee7af8652400c388290/1711329419607-XZ6WZM8MLN8E421WVUUA/AdobeStock_129317801.jpeg",
    alt: "Manual therapy hands-on physiotherapy treatment",
    icon: HandHeart,
    tag: "HANDS-ON CARE",
  },
  {
    number: "03",
    title: "Cupping Therapy",
    desc: "Cupping therapy is a complementary treatment technique that may be considered by a qualified physiotherapist based on individual needs and clinical assessment.",
    image:
      "https://images.squarespace-cdn.com/content/v1/65b1a3020b75ee2043bf80a8/2b696c34-8ad7-4b10-8c3f-f046dab90ea4/IMG_8668.jpeg",
    alt: "Cupping therapy technique used in physiotherapy care",
    icon: Activity,
    tag: "SPECIALISED CARE",
  },
  {
    number: "04",
    title: "Exercise Therapy",
    desc: "Exercise therapy includes physiotherapist-guided exercises designed to support muscle strength, flexibility, balance and everyday movement.",
    image: "https://movephysiocare.com/image/aboutimgsp.png",
    alt: "Guided therapeutic exercises for physiotherapy and mobility",
    icon: Dumbbell,
    tag: "ACTIVE MOVEMENT",
  },
  {
    number: "05",
    title: "Dry Needling",
    desc: "Dry needling is a specialised physiotherapy technique that may be considered following professional assessment and when clinically appropriate.",
    image:
      "https://www.terapiadeldoloresicilia.it/cdn/shop/files/dryneedling.png?v=1748796342",
    alt: "Dry needling technique used by a trained healthcare professional",
    icon: ShieldCheck,
    tag: "SPECIALISED TECHNIQUE",
  },
  {
    number: "06",
    title: "IASTM Therapy",
    desc: "Instrument-assisted soft tissue mobilisation uses specialised tools to address soft tissue restrictions and support comfortable movement.",
    image:
      "https://static.wixstatic.com/media/401461_2adc13cb6139420dbf450f9fc5738459~mv2_d_6720_4480_s_4_2.jpg/v1/fill/w_600,h_400,al_c,q_80/401461_2adc13cb6139420dbf450f9fc5738459~mv2_d_6720_4480_s_4_2.jpg",
    alt: "Instrument-assisted soft tissue mobilisation physiotherapy technique",
    icon: Activity,
    tag: "SOFT TISSUE CARE",
  },
];

const cardVariants = {
  hidden: {
    opacity: 0,
    y: 22,
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

function Treatment3DBackground() {
  return (
    <div className="treatment-3d-background" aria-hidden="true">
      <div className="treatment-orbit orbit-a">
        <span />
      </div>

      <div className="treatment-orbit orbit-b">
        <span />
      </div>

      <div className="treatment-glass-sphere sphere-a" />
      <div className="treatment-glass-sphere sphere-b" />
      <div className="treatment-glass-sphere sphere-c" />

      <div className="treatment-3d-grid" />
    </div>
  );
}

export default function Treatments() {
  const reduce = useReducedMotion();

  const reveal = reduce
    ? {}
    : {
        initial: { opacity: 0, y: 20 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true, amount: 0.2 },
        transition: {
          duration: 0.5,
          ease: "easeOut",
        },
      };

  return (
    <section
      className="treatments section"
      id="treatments"
      aria-labelledby="treatments-title"
    >
      {/* BACKGROUND */}
      <Treatment3DBackground />

      <div className="treatments-glow glow-one" />
      <div className="treatments-glow glow-two" />

      <div className="treatments-inner">
        {/* SECTION HEADING */}
        <m.div
          className="section-heading treatment-heading"
          {...reveal}
        >
          <div className="eyebrow treatment-eyebrow">
            <Sparkles size={15} />
            OUR TREATMENT APPROACHES
          </div>

          <h2 id="treatments-title">
            Professional Physiotherapy
            <br />
            <em>Treatments & Care.</em>
          </h2>

          <p>
            At Sri Ashwini Physiotherapy Clinic in Danavaipeta,
            Rajahmundry, explore personalised physiotherapy
            treatments designed around your movement, comfort
            and individual care needs.
          </p>
        </m.div>

        {/* TREATMENT CARDS */}
        <div className="treatment-grid">
          {treatments.map((item, i) => {
            const Icon = item.icon;

            return (
              <m.article
                key={item.title}
                className={`treatment-card treatment-card-${i + 1}`}
                initial={reduce ? false : "hidden"}
                whileInView={reduce ? undefined : "visible"}
                variants={reduce ? undefined : cardVariants}
                viewport={{ once: true, amount: 0.1 }}
                transition={{
                  delay: reduce ? 0 : 0.05 * (i % 3),
                }}
                whileHover={
                  reduce
                    ? undefined
                    : {
                        y: -5,
                        transition: { duration: 0.2 },
                      }
                }
              >
                {/* IMAGE */}
                <div className="treatment-image">
                  <img
                    src={item.image}
                    alt={item.alt}
                    loading="lazy"
                    decoding="async"
                    onError={(e) => {
                      e.currentTarget.style.visibility = "hidden";
                    }}
                  />

                  <div className="treatment-image-shade" />

                  <span className="treatment-number">
                    {item.number}
                  </span>

                  <div className="treatment-image-icon">
                    <Icon size={25} strokeWidth={1.7} />
                  </div>

                  <span className="treatment-image-label">
                    {item.tag}
                  </span>
                </div>

                {/* CONTENT */}
                <div className="treatment-body">
                  <div className="treatment-icon">
                    <Icon size={25} strokeWidth={1.7} />
                  </div>

                  <h3>{item.title}</h3>

                  <p>{item.desc}</p>

                  <a
                    href="#appointment"
                    className="treatment-link"
                    aria-label={`Enquire about ${item.title} at Sri Ashwini Physiotherapy Clinic`}
                  >
                    Know More
                    <ArrowUpRight size={18} />
                  </a>
                </div>
              </m.article>
            );
          })}
        </div>

        {/* BOTTOM MESSAGE */}
        <m.div
          className="treatment-bottom"
          {...reveal}
        >
          <div className="treatment-bottom-icon">
            <Activity size={28} />
          </div>

          <div className="treatment-bottom-content">
            <span>CARE THAT STARTS WITH YOU</span>

            <h3>
              Every individual deserves a thoughtful approach.
            </h3>

            <p>
              Your physiotherapist can help determine which treatment
              approaches are appropriate for your individual needs.
              Visit Sri Ashwini Physiotherapy Clinic in Rajahmundry
              for professional physiotherapy guidance.
            </p>
          </div>

          <a
            href="#appointment"
            className="treatment-bottom-link"
          >
            Book Consultation
            <ArrowUpRight size={19} />
          </a>
        </m.div>
      </div>
    </section>
  );
}
