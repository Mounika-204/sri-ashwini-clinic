
import { lazy, Suspense } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Hero from "./sections/Hero";
import Terms from "./pages/Terms";

import { MessageCircle } from "lucide-react";

/* =========================================
   LAZY LOADED SECTIONS
========================================= */

const AboutSection = lazy(() => import("./sections/About"));
const Conditions = lazy(() => import("./sections/Conditions"));
const Treatments = lazy(() => import("./sections/Treatments"));
const Doctor = lazy(() => import("./sections/Doctor"));
const WhyChooseUs = lazy(() => import("./sections/WhyChooseUs"));
const Gallery = lazy(() => import("./sections/Gallery"));
const Appointment = lazy(() => import("./sections/Appointment"));
const Contact = lazy(() => import("./sections/Contact"));

/* =========================================
   LOADING FALLBACK
========================================= */

function PageLoader() {
  return (
    <div
      style={{
        minHeight: "40vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
      role="status"
      aria-label="Loading page content"
    >
      Loading...
    </div>
  );
}

/* =========================================
   HOME
========================================= */

function Home() {
  return (
    <main>
      <Hero />

      <Suspense fallback={<PageLoader />}>
        <AboutSection />
        <Conditions />
        <Treatments />
        <Doctor />
        <WhyChooseUs />
        <Gallery />
        <Appointment />
        <Contact />
      </Suspense>
    </main>
  );
}

/* =========================================
   APP
========================================= */

export default function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <Suspense fallback={<PageLoader />}>
        <Routes>
          <Route path="/" element={<Home />} />

          <Route
            path="/about"
            element={
              <main>
                <AboutSection />
              </main>
            }
          />

          <Route
            path="/conditions"
            element={
              <main>
                <Conditions />
              </main>
            }
          />

          <Route
            path="/treatments"
            element={
              <main>
                <Treatments />
              </main>
            }
          />

          <Route
            path="/doctor"
            element={
              <main>
                <Doctor />
                <WhyChooseUs />
              </main>
            }
          />

          <Route
            path="/gallery"
            element={
              <main>
                <Gallery />
              </main>
            }
          />

          <Route
            path="/contact"
            element={
              <main>
                <Contact />
              </main>
            }
          />

          <Route
            path="/appointment"
            element={
              <main>
                <Appointment />
              </main>
            }
          />

          <Route 
          path="/terms"
          element={<Terms />}
          />
          
        </Routes>
      </Suspense>

      <Footer />

      <a
        className="floating-whatsapp"
        href="https://wa.me/917285992521"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat with us on WhatsApp"
      >
        <MessageCircle aria-hidden="true" />
        <span>Chat With Us</span>
      </a>
    </BrowserRouter>
  );
}
