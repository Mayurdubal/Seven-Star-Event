"use client";
import { useEffect, useRef } from "react";
import Image from "next/image";
import "./style.css";

const About = () => {
  const benefitsRef = useRef<HTMLDivElement | null>(null);
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      { threshold: 0.2 }
    );

    if (benefitsRef.current) {
      const elements = benefitsRef.current.querySelectorAll(
        ".benefit-item"
      ) as NodeListOf<HTMLDivElement>;
      elements.forEach((el) => observer.observe(el));

      return () => elements.forEach((el) => observer.unobserve(el));
    }
  }, []);

  return (
    <div className="about-container">
      <h2 className="section-title">Why Choose Valet Parking?</h2>
      <div className="title-underline"></div>
      <div className="video-container">
        <video width="600" height="500" autoPlay muted playsInline loop>
          <source src="/video/parking-intro.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
      <div>
        <h3 className="sub-title">The 3S Benefits For The Customer</h3>
        <div className="title-underline"></div>
      </div>
      <div className="benefits" ref={benefitsRef}>
        <div className="benefit-item">
          <Image
            src="/video/save-money.png"
            width={500}
            height={450}
            alt="Save Money"
          />
          <div>
            <h4 className="save-money">Save Money</h4>
            <p>
              Valuing the customer needs and providing the services at the Fair
              Price point.
            </p>
          </div>
        </div>

        <div className="benefit-item">
          <Image
            src="/video/save-time.png"
            width={500}
            height={450}
            alt="Save Time"
          />
          <div>
            <h4 className="save-money">Save Time</h4>
            <p>
              No more circling around the parking lot to find a nearby vacant
              parking space.
            </p>
          </div>
        </div>

        <div className="benefit-item">
          <Image
            src="/video/save-stress.png"
            width={500}
            height={450}
            alt="Save Stress"
          />
          <div>
            <h4 className="save-money">Save Stress</h4>
            <p>
              No more frustration and worry about the safety and security of the
              vehicle.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
