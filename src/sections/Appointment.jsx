
import { useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import Reveal from "../components/Reveal";
import {
  ArrowUpRight,
  Phone,
  CalendarDays,
  Clock3,
  Sparkles,
  HeartPulse,
} from "lucide-react";

const services = [
  "Electro Therapy",
  "Manual Therapy",
  "Cupping Therapy",
  "Exercise Therapy",
  "Dry Needling",
];

const contactNumbers = [
  {
    label: "PRIMARY CONTACT",
    number: "72859 92521",
    link: "tel:7285992521",
  },
  {
    label: "ALTERNATE CONTACT",
    number: "77804 85780",
    link: "tel:7780485780",
  },
  {
    label: "CLINIC LANDLINE",
    number: "0883-2443521",
    link: "tel:08832443521",
  },
];

export default function Appointment() {
  const reduce = useReducedMotion();

  const [form, setForm] = useState({
    name: "",
    phone: "",
    service: "",
    message: "",
  });

  function update(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  function submit(e) {
    e.preventDefault();

    const message = [
      "Hello Sri Ashwini Clinic,",
      `Name: ${form.name}`,
      `Phone: ${form.phone}`,
      `Service: ${form.service}`,
      `Message: ${form.message || "No additional message"}`,
    ].join("\n");

    window.open(
      `https://wa.me/917285992521?text=${encodeURIComponent(message)}`,
      "_blank",
      "noopener,noreferrer"
    );
  }

  const reveal = (delay = 0) =>
    reduce
      ? {}
      : {
          initial: { opacity: 0, y: 35, rotateX: -8 },
          whileInView: { opacity: 1, y: 0, rotateX: 0 },
          viewport: { once: true, amount: 0.2 },
          transition: {
            duration: 0.85,
            delay,
            ease: [0.22, 1, 0.36, 1],
          },
        };

  return (
    <section className="appointment section" id="appointment">
      <div className="appointment-bg-orb orb-one" />
      <div className="appointment-bg-orb orb-two" />
      <div className="appointment-grid-pattern" />

      <div className="appointment-inner">

        {/* LEFT CONTENT */}
        <div className="appointment-info">

          <motion.div {...reveal(0)}>
            <div className="appointment-eyebrow">
              <span className="appointment-eyebrow-line" />
              <Sparkles size={15} />
              LET'S CONNECT
            </div>
          </motion.div>

          <motion.div className="appointment-heading" {...reveal(0.12)}>
            <h2>
              Your journey
              <br />
              to <em>better movement</em>
              <br />
              starts here.
            </h2>
          </motion.div>

          <motion.p className="appointment-description" {...reveal(0.2)}>
            Every step towards recovery matters. Connect with our clinic
            and let us help you take the next step towards comfortable,
            confident movement.
          </motion.p>

          {/* Floating 3D card */}
          <motion.div
            className="appointment-highlight"
            animate={
              reduce
                ? {}
                : {
                    y: [0, -10, 0],
                    rotateY: [0, 3, 0],
                  }
            }
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            whileHover={
              reduce
                ? {}
                : { scale: 1.035, rotateY: -5, rotateX: 4 }
            }
          >
            <div className="appointment-highlight-icon">
              <HeartPulse size={27} />
            </div>

            <div>
              <span>YOUR WELLNESS MATTERS</span>
              <h3>Personal attention. Thoughtful care.</h3>
            </div>

            <Sparkles className="highlight-sparkle" size={21} />
          </motion.div>

          {/* ALL THREE CONTACT NUMBERS */}
          <div className="appointment-contact-list">
            {contactNumbers.map((contact, index) => (
              <motion.a
                key={contact.number}
                href={contact.link}
                className="appointment-phone"
                {...reveal(0.3 + index * 0.12)}
                whileHover={
                  reduce
                    ? {}
                    : { x: 8, scale: 1.02 }
                }
              >
                <span className="appointment-phone-icon">
                  <Phone size={21} />
                </span>

                <span className="appointment-phone-content">
                  <small>{contact.label}</small>
                  <strong>{contact.number}</strong>
                </span>

                <ArrowUpRight className="appointment-phone-arrow" />
              </motion.a>
            ))}
          </div>

          <motion.div
            className="appointment-mini-details"
            {...reveal(0.7)}
          >
            <div>
              <CalendarDays size={19} />
              <span>Appointment Enquiry</span>
            </div>

            <div>
              <Clock3 size={19} />
              <span>Subject to availability</span>
            </div>
          </motion.div>

          {/* Decorative 3D ring */}
          <motion.div
            className="appointment-3d-ring"
            animate={
              reduce
                ? {}
                : { rotate: 360, rotateX: [65, 75, 65] }
            }
            transition={{
              rotate: {
                duration: 24,
                repeat: Infinity,
                ease: "linear",
              },
              rotateX: {
                duration: 6,
                repeat: Infinity,
                ease: "easeInOut",
              },
            }}
          />
        </div>

        {/* RIGHT FORM */}
        <Reveal className="appointment-form-reveal">
          <motion.div
            className="appointment-form-card"
            initial={reduce ? false : { opacity: 0, y: 60, rotateY: 12 }}
            whileInView={
              reduce
                ? {}
                : { opacity: 1, y: 0, rotateY: 0 }
            }
            viewport={{ once: true, amount: 0.15 }}
            transition={{
              duration: 1,
              ease: [0.22, 1, 0.36, 1],
            }}
            whileHover={
              reduce
                ? {}
                : {
                    rotateY: -2,
                    rotateX: 1,
                    transition: { duration: 0.4 },
                  }
            }
          >
            <div className="appointment-form-top">
              <div className="appointment-form-icon">
                <CalendarDays size={25} />
              </div>

              <span>START YOUR RECOVERY JOURNEY</span>
            </div>

            <h3>Book an Appointment</h3>

            <p className="appointment-form-subtitle">
              Share your details and our team can contact you.
            </p>

            <form onSubmit={submit} className="appointment-form">

              <label>
                <span>Your Name</span>
                <input
                  name="name"
                  value={form.name}
                  onChange={update}
                  required
                  placeholder="Enter your full name"
                />
              </label>

              <label>
                <span>Phone Number</span>
                <input
                  name="phone"
                  type="tel"
                  value={form.phone}
                  onChange={update}
                  required
                  pattern="[0-9+() -]{8,16}"
                  placeholder="Enter contact number"
                />
              </label>

              <label>
                <span>Interested Treatment</span>
                <select
                  name="service"
                  value={form.service}
                  onChange={update}
                  required
                >
                  <option value="">Select a treatment</option>
                  {services.map((service) => (
                    <option key={service} value={service}>
                      {service}
                    </option>
                  ))}
                </select>
              </label>

              <label>
                <span>Your Message</span>
                <textarea
                  name="message"
                  value={form.message}
                  onChange={update}
                  placeholder="Tell us how we can help you..."
                  rows={3}
                />
              </label>

              <motion.button
                className="appointment-submit"
                type="submit"
                whileHover={
                  reduce
                    ? {}
                    : {
                        scale: 1.025,
                        y: -4,
                        boxShadow: "0 18px 35px rgba(5, 92, 86, 0.25)",
                      }
                }
                whileTap={{ scale: 0.97 }}
              >
                <span>Send Appointment Enquiry</span>
                <ArrowUpRight size={21} />
              </motion.button>

              <small className="appointment-note">
                Appointment confirmation is subject to clinic availability.
              </small>
            </form>
          </motion.div>
        </Reveal>

      </div>
    </section>
  );
}
