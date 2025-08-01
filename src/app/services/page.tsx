import Image from "next/image";
import "./style.css";

const Services = () => {
  const testimonials = [
    {
      name: "Hanumant Hadule",
      location: "pune",
      image: "/video/hanu.png",
      quote:
        "What an amazing parking service! Thank you 7* Valet for the amazing options for our car parking spots around the city."
    },
    {
      name: "omkar Kalshetti",
      location: "Pune",
      image: "/video/omkar.png",
      quote:
        "Everyone in my circles likes the  7* Valet parking services. Thanks for its effective and efficient services that help me out! Great Job!"
    },
    {
      name: "Rohit Mashke",
      location: "Pune",
      image: "/video/rohit.png",
      quote:
        "I really liked this parking service, because it's vital to have a confirmed parking spot in crucial times. Thanks a lot  7* Valet and Goodspeed!"
    },
    {
      name: "Vinayak Varbade",
      location: "pune",
      image: "/video/vinayak.png",
      quote:
        "Seamless experience! 7* Valet has truly transformed how I park my car. Quick, efficient, and stress-free!"
    }
  ];

  return (
    <div className="testimonials-container">
      <h4 className="ourCutmers">
        What <span>Our Customers</span> Says
      </h4>
      <div className="title-underline"></div>

      <div className="testimonials">
        {testimonials.map((testimonial, index) => (
          <div className="testimonial-card" key={index}>
            <div className="testimonial-image">
              <Image
                src={testimonial.image}
                width={70}
                height={70}
                alt={testimonial.name}
              />
            </div>
            <h3 className="testimonial-name">{testimonial.name}</h3>
            <p className="testimonial-location">{testimonial.location}</p>
            <div className="testimonial-quote">❝ {testimonial.quote} ❞</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
