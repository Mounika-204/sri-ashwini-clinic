
import Reveal from "../components/Reveal";

import {
  Phone,
  MapPin,
  Clock,
  ArrowUpRight,
} from "lucide-react";

export default function Contact() {
  const clinicMapLink =
    "https://maps.app.goo.gl/pF8WpdnFY5EQJ7tw6";

  return (
    <section
      className="contact section"
      id="contact"
      aria-labelledby="contact-title"
    >

      <Reveal className="section-heading">
        <div className="eyebrow">GET IN TOUCH</div>

        <h2 id="contact-title">
          Contact Our
          <br />
          <em>Physiotherapy Clinic.</em>
        </h2>

        <p>
          Have questions about physiotherapy treatment?
          Contact Sri Ashwini Physiotherapy Clinic in
          Danavaipeta, Rajahmundry, Andhra Pradesh.
          We are here to help you with your enquiries.
        </p>
      </Reveal>

      <div className="contact-grid">

        {/* Primary Contact */}
        <a
          className="contact-card"
          href="tel:7285992521"
          aria-label="Call Sri Ashwini Physiotherapy Clinic at 72859 92521"
        >
          <Phone />
          <span>PRIMARY CONTACT</span>
          <h3>72859 92521</h3>
          <ArrowUpRight />
        </a>

        {/* Alternate Contact */}
        <a
          className="contact-card"
          href="tel:7780485780"
          aria-label="Call Sri Ashwini Physiotherapy Clinic at 77804 85780"
        >
          <Phone />
          <span>ALTERNATE CONTACT</span>
          <h3>77804 85780</h3>
          <ArrowUpRight />
        </a>

        {/* Landline */}
        <a
          className="contact-card"
          href="tel:08832443521"
          aria-label="Call Sri Ashwini Physiotherapy Clinic landline 0883-2443521"
        >
          <Phone />
          <span>CLINIC LANDLINE</span>
          <h3>0883-2443521</h3>
          <ArrowUpRight />
        </a>

        {/* Location */}
        <a
          className="contact-card"
          href={clinicMapLink}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="View Sri Ashwini Physiotherapy Clinic location in Danavaipeta, Rajahmundry on Google Maps"
        >
          <MapPin />
          <span>OUR LOCATION</span>
          <h3>Danavaipeta</h3>
          <p>
            Rajahmundry, Andhra Pradesh - 533103
          </p>
          <ArrowUpRight />
        </a>

      </div>

      {/* GOOGLE MAP */}
      <Reveal className="contact-map-section">

        <div className="contact-map-heading">
          <span className="eyebrow">FIND OUR CLINIC</span>

          <h3>
            Visit Our <em>Clinic.</em>
          </h3>

          <p>
            Find Sri Ashwini Physiotherapy Clinic in
            Danavaipeta, Rajahmundry, Andhra Pradesh.
            Use the map below to find our clinic location.
          </p>
        </div>

        <div className="contact-map-wrapper">

          <iframe
            title="Sri Ashwini Physiotherapy Clinic location in Danavaipeta, Rajahmundry - Google Maps"
            src="https://www.google.com/maps/embed?pb=!1m16!1m11!1m3!1d3!2d0!3d0!2m2!1f0!2f90!3m2!1i1024!2i768!4f75!3m3!1m2!1s0x3a37a3322039a40d%3A0xc0e83db9b96b24a1!2sSri%20Ashwini%20Physiotherapy%20Clinic!4v1794567320119"
            width="100%"
            height="420"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="strict-origin-when-cross-origin"
          />

        </div>

        <a
          className="contact-map-directions"
          href={clinicMapLink}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Get directions to Sri Ashwini Physiotherapy Clinic in Danavaipeta, Rajahmundry"
        >
          <MapPin size={18} />
          Get Directions
          <ArrowUpRight size={17} />
        </a>

      </Reveal>

      {/* Clinic Timings */}
      <Reveal className="contact-hours">

        <Clock />

        <span>
          Clinic Timings: 9:00 AM – 8:00 PM
          <br />
          Monday – Saturday
        </span>

      </Reveal>

    </section>
  );
}
