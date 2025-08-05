/* eslint-disable react/no-unescaped-entities */
"use client";

import Link from "next/link";
import { useForm } from "@formspree/react";
import { SupportAgent, Email, Phone } from "@mui/icons-material"; // ✅ MUI icons

import "./style.css";
import { techStack } from "@/constants";
import ProjectsGrid from "@/components/projectsGrid";
import Testimonial from "@/components/testimonial";
import FAQAccordion from "./portfolio/page";

export default function Home() {
  const [state, handleSubmit] = useForm("moqovqjk");
  const hasErrors = Array.isArray(state.errors) && state.errors.length > 0;

  return (
    <main className="home">
      {/* Banner Section */}
      <div className="banner">
        <div className="wrapper">
          <div className="intro">
            <h2>
              Valet Service
              <span className="new-line">7⭐ Parking Services</span>
            </h2>
            <p>
              Your Vehicle, Our Priority—Delivering Premium Valet Services with
              Excellence.. 🚗🔑
            </p>
            <h3>Arrive in Style, Park with Confidence</h3>
            <ul>
              <li>
                <Link className="contact-us" href="/contact">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link href="/portfolio"> Services</Link>
              </li>
            </ul>
          </div>
          <figure>
            <img
              src="/video/key.png"
              width={600}
              height={800}
              alt="Valet Parking Key"
            />
          </figure>
        </div>
      </div>

      {/* About Section */}
      <div className="wrapper">
        <div className="about">
          <div className="about-us">
            <h3>About Us</h3>
            <h4>7 Star Valet Parking</h4>
            <p>
              We redefine luxury and convenience with our premium valet
              services. Our mission is to provide a seamless, hassle-free
              parking experience that enhances customer satisfaction and ensures
              the highest standards of professionalism. Whether at hotels,
              restaurants, corporate events, or private gatherings, our team is
              dedicated to delivering effortless parking solutions with elegance
              and efficiency.
            </p>

            <div>
              <Link href="/about">
                <button>Learn More</button>
              </Link>
              <Link href="/contact">Let's Connect</Link>
            </div>
          </div>
        </div>

        {/* Services Section */}
        <div className="services">
          <h3>Our Services</h3>
          <h4>
            Elevate Your Parking Experience with{" "}
            <span>Premium Valet Services</span>
          </h4>
          <p>
            We provide luxury valet solutions designed for convenience, safety,
            and efficiency. From high-end venues to corporate events, we ensure
            a seamless parking experience.
          </p>

          <div className="services1">
            <div>
              <span className="badge">Event Valet Parking</span>
              <h5>
                Professional valet service for weddings, corporate events, and
                private parties.
              </h5>
              <p>
                Our expert valet team ensures smooth parking for your guests,
                providing efficiency and a welcoming experience.
              </p>
              <Link href="/booking">
                <button>Book Now</button>
              </Link>
            </div>
            <div>
              <span className="badge">Hotel & Restaurant Valet</span>
              <h5>
                Seamless parking experience for hotels, fine dining, and VIP
                lounges.
              </h5>
              <p>
                Enhance guest experience with our hassle-free valet services at
                your hotel or restaurant, ensuring a first-class arrival
                experience.
              </p>
              <Link href="/customerFeedback">
                <button>Discover</button>
              </Link>
            </div>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="projects">
          <h3>Explore our FAQ's</h3>
          <h5>✔️ Luxury Meets Convenience</h5>
          <p>
            Elevate your guest experience with{" "}
            <b>professional, fast, and secure</b> valet parking services,
            ensuring a smooth and welcoming arrival.
          </p>

          <h5>✔️ Safety & Security First</h5>
          <p>
            Our trained valets follow strict <b>security protocols</b>,
            providing GPS vehicle tracking, insured coverage, and{" "}
            <b>contactless payment</b>
            options for peace of mind.
          </p>

          <h5>✔️ Tailored Parking Solutions</h5>
          <p>
            From corporate events to weddings, hotels, restaurants, and airport
            valet services, we cater to every parking need with{" "}
            <b>customized solutions</b>.
          </p>

          <FAQAccordion />
        </div>

        {/* Testimonials Section */}
        <Testimonial />

        {/* Contact Section */}
        <div className="contact">
          <h3>Contact</h3>
          <h4>
            Need <span>help?</span> Say Hello
          </h4>
          <p>
            Feel free to reach out to us using the options below, and our
            dedicated team will respond to your inquiries promptly.
          </p>
          <div className="options">
            <div>
              <button>
                <SupportAgent style={{ marginRight: "8px" }} /> Need Support?
              </button>
              <button>
                <Email style={{ marginRight: "8px" }} /> Have Feedback?
              </button>
              <button>
                <Phone style={{ marginRight: "8px" }} /> Call Us
              </button>
            </div>
            <div>
              <h4>How can we help you today?</h4>
              <p>Let us know who you are and what you're looking for below.</p>
              <form className="content-form" onSubmit={handleSubmit}>
                <span>
                  <input type="text" name="name" placeholder="Name" required />
                  <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    required
                  />
                </span>
                <input
                  type="text"
                  name="subject"
                  placeholder="Subject"
                  required
                />
                <textarea placeholder="Your Message" name="message" required />
                <button
                  className="themebtu contact-btn"
                  type="submit"
                  disabled={state.submitting}
                >
                  Send
                </button>
              </form>
              <p
                style={{
                  opacity: 1,
                  marginTop: "20px",
                  color: hasErrors ? "red" : "green"
                }}
              >
                {state.succeeded && "Your Message sent successfully!"}
                {hasErrors && "Failed to send Message"}
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
