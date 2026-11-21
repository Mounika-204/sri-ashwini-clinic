import { motion, useReducedMotion } from "framer-motion";
import { Images, Sparkles } from "lucide-react";

const images = [
  {
    number: "01",
    src: "https://realign.clinic/images/blog/physiotherapy-faridabad-huda-sectors.jpg",
    alt: "Physiotherapy clinic environment reference photograph",
    layout: "large",
    direction: -45,
  },
  {
    number: "02",
    src: "https://realign.clinic/images/services/orthopedic.jpg",
    alt: "Orthopaedic physiotherapy reference photograph",
    layout: "small",
    direction: 35,
  },
  {
    number: "03",
    src: "/images/gallery1.jpeg",
    alt: "Physiotherapy care reference photograph",
    layout: "large",
    direction: -35,
  },
  {
    number: "04",
    src: "/images/gallery2.jpeg",
    alt: "Manual therapy reference photograph",
    layout: "small",
    direction: 35,
  },
  {
    number: "05",
    src: "/images/gallery3.jpeg",
    alt: "Exercise therapy reference photograph",
    layout: "small",
    direction: -35,
  },
  {
    number: "06",
    src: "/images/gallery4.jpeg",
    alt: "Knee physiotherapy reference photograph",
    layout: "large",
    direction: 45,
  },
  {
    number: "07",
    src: "/images/gallery5.jpeg",
    alt: "Spine care reference photograph",
    layout: "small",
    direction: -35,
  },
  {
    number: "08",
    src: "/images/gallery6.jpeg",
    alt: "Shoulder therapy reference photograph",
    layout: "large",
    direction: 35,
  },

  {
    number: "09",
    src: "/images/gallery7.jpeg",
    alt: "Sports physiotherapy reference photograph",
    layout: "small",
    direction: -35,
  },

  {
    number: "10",
    src: "/images/gallery8.jpeg",
    alt: "Dry needling reference photograph",
    layout: "large",
    direction: 45,
  },
  {
    number: "11",
    src: "/images/gallery9.jpeg",
    alt: "Electrotherapy reference photograph",
    layout: "small",
    direction: -35,
  },
  {
    number: "12",
    src: "/images/gallery10.jpeg",
    alt: "Physiotherapy clinic environment reference photograph",
    layout: "large",
    direction: 35,
  },
  {
    number: "13",
    src: "https://realign.clinic/images/blog/ankle-fracture-physiotherapy-faridabad.jpg",
    alt: "Ankle physiotherapy reference photograph",
    layout: "small",
    direction: -35,
  },
  {
    number: "14",
    src: "https://images.squarespace-cdn.com/content/v1/615208d34b68ee013856a968/1632856856520-B1EF0L09CQA17FVAY7AF/physio-fit-praxis-3.jpg",
    alt: "Physiotherapy space reference photograph",
    layout: "large",
    direction: 45,
  },

  /* =========================
     ADDITIONAL 19 IMAGES
     ========================= */

  {
    number: "15",
    src: "/images/gallery11.jpeg",
    alt: "Physiotherapy treatment room reference photograph",
    layout: "small",
    direction: -35,
  },
  {
    number: "16",
    src: "/images/gallery12.jpeg",
    alt: "Physiotherapy rehabilitation reference photograph",
    layout: "large",
    direction: 35,
  },
  {
    number: "17",
    src: "/images/gallery13.jpeg",
    alt: "Back pain physiotherapy reference photograph",
    layout: "small",
    direction: -35,
  },
  {
    number: "18",
    src: "/images/gallery14.jpeg",
    alt: "Neck pain physiotherapy reference photograph",
    layout: "large",
    direction: 45,
  },
  {
    number: "19",
    src: "/images/gallery15.jpeg",
    alt: "Shoulder rehabilitation reference photograph",
    layout: "small",
    direction: 35,
  },
  {
    number: "20",
    src: "/images/gallery16.jpeg",
    alt: "Knee rehabilitation reference photograph",
    layout: "large",
    direction: -35,
  },
  {
    number: "21",
    src: "/images/gallery17.jpeg",
    alt: "Sports injury rehabilitation reference photograph",
    layout: "small",
    direction: 35,
  },
  {
    number: "22",
    src: "/images/gallery18.jpeg",
    alt: "Physical rehabilitation exercise reference photograph",
    layout: "large",
    direction: -45,
  },
  {
    number: "23",
    src: "/images/gallery19.jpeg",
    alt: "Physiotherapy exercise session reference photograph",
    layout: "small",
    direction: 35,
  },
  {
    number: "24",
    src: "/images/gallery20.jpeg",
    alt: "Manual physiotherapy treatment reference photograph",
    layout: "large",
    direction: -35,
  },
  {
    number: "25",
    src: "/images/gallery21.jpeg",
    alt: "Therapeutic exercise reference photograph",
    layout: "small",
    direction: 45,
  },
  {
    number: "26",
    src: "/images/gallery22.jpeg",
    alt: "Physiotherapy rehabilitation equipment reference photograph",
    layout: "large",
    direction: -35,
  },
  {
    number: "27",
    src: "/images/gallery23.jpeg",
    alt: "Patient physiotherapy care reference photograph",
    layout: "small",
    direction: 35,
  },
  {
    number: "28",
    src: "/images/gallery24.jpeg",
    alt: "Physiotherapy stretching exercise reference photograph",
    layout: "large",
    direction: -45,
  },
  {
    number: "29",
    src: "/images/gallery25.jpeg",
    alt: "Mobility rehabilitation reference photograph",
    layout: "small",
    direction: 35,
  },
  {
    number: "30",
    src: "/images/gallery26.jpeg",
    alt: "Physiotherapy therapy equipment reference photograph",
    layout: "large",
    direction: -35,
  },
  {
    number: "31",
    src: "/images/gallery27.jpeg",
    alt: "Functional rehabilitation reference photograph",
    layout: "small",
    direction: 45,
  },
  {
    number: "32",
    src: "/images/gallery28.jpeg",
    alt: "Patient movement therapy reference photograph",
    layout: "large",
    direction: -35,
  },
  {
    number: "33",
    src: "/images/gallery29.jpeg",
    alt: "Modern physiotherapy clinic interior reference photograph",
    layout: "small",
    direction: 35,
  },
];


export default function Gallery() {
  const reduce = useReducedMotion();

  const headingAnimation = (delay = 0) =>
    reduce
      ? {}
      : {
          initial: { opacity: 0, y: 20 },
          whileInView: { opacity: 1, y: 0 },
          viewport: { once: true, amount: 0.2 },
          transition: {
            duration: 0.6,
            delay,
            ease: "easeOut",
          },
        };

  return (
    <section
      className="gallery gallery-cinematic section"
      id="gallery"
      aria-labelledby="gallery-heading"
    >
      {/* BACKGROUND */}
      <div className="gallery-bg-glow gallery-glow-one" />
      <div className="gallery-bg-glow gallery-glow-two" />
      <div className="gallery-background-grid" />

      <div className="gallery-container">

        {/* SECTION HEADING */}
        <div className="gallery-header">

          <motion.div
            className="gallery-eyebrow"
            {...headingAnimation(0.05)}
          >
            <span className="gallery-eyebrow-icon">
              <Images size={16} />
            </span>
            OUR VISUAL STORY
            <span className="gallery-eyebrow-line" />
          </motion.div>

          <motion.h2
            id="gallery-heading"
            className="gallery-main-heading"
            {...headingAnimation(0.1)}
          >
            A closer look
            <br />
            <span>inside Sri Ashwini.</span>
          </motion.h2>

          <motion.p
            className="gallery-intro"
            {...headingAnimation(0.15)}
          >
            Explore the spaces, surroundings and details that make
            Sri Ashwini Physiotherapy Clinic a welcoming place for care
            in Rajahmundry.
          </motion.p>

          <motion.div
            className="gallery-heading-decoration"
            {...headingAnimation(0.2)}
          >
            <Sparkles size={15} />
            <span>OUR SPACE. OUR STORY. OUR COMMITMENT.</span>
          </motion.div>

        </div>

        {/* OPTIMIZED GALLERY GRID */}
        <div className="gallery-cinematic-grid">

          {images.map((item, i) => (
            <motion.div
              key={item.number}
              className={`gallery-card gallery-card-${i + 1} gallery-${item.layout}`}

              initial={
                reduce
                  ? false
                  : {
                      opacity: 0,
                      y: 25,
                      scale: 0.97,
                    }
              }

              whileInView={
                reduce
                  ? {}
                  : {
                      opacity: 1,
                      y: 0,
                      scale: 1,
                    }
              }

              viewport={{
                once: true,
                amount: 0.1,
              }}

              transition={{
                duration: 0.55,
                delay: Math.min(i * 0.025, 0.3),
                ease: "easeOut",
              }}

              whileHover={
                reduce
                  ? {}
                  : {
                      y: -7,
                      scale: 1.015,
                      transition: { duration: 0.25 },
                    }
              }
            >

              <div className="gallery-image-wrap">

                <img
                  src={item.src}
                  alt={item.alt}
                  loading="lazy"
                  decoding="async"
                  onError={(event) => {
                    event.currentTarget.style.visibility = "hidden";
                    console.warn(
                      "Gallery image failed to load:",
                      item.src
                    );
                  }}
                />

                <div className="gallery-image-shade" />

              </div>

              <div className="gallery-card-edge" />

            </motion.div>
          ))}

        </div>

        {/* BOTTOM DECORATION */}
        <motion.div
          className="gallery-bottom-line"
          {...headingAnimation(0.1)}
        >
          <span />
          <p>EVERY SPACE HAS A STORY TO TELL</p>
          <span />
        </motion.div>

      </div>
    </section>
  );
}
