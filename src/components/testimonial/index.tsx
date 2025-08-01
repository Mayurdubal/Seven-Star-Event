"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import {
  Card,
  CardContent,
  Typography,
  Chip,
  Box,
  Container
} from "@mui/material";

const valetTestimonials = [
  {
    name: "Rahul Sharma",
    location: "Wework",
    feedback: "I am very happy with the car valet service provided by Park+.",
    videoUrl: "/video/rahul-intro.mp4"
  },
  {
    name: "Ajay Sharma",
    location: "Wework",
    feedback:
      "Park+ valet service is amazing! Super quick and convenient. Loved it!",
    videoUrl: "/video/ajay-intro.mp4"
  },
  {
    name: "Madhu Sharma",
    location: "Wework",
    feedback:
      "Great experience with Park+ valet. Very professional and hassle-free.",
    videoUrl: "/video/madhu-intro.mp4"
  },
  {
    name: "Vikram Patel",
    location: "Regus",
    feedback:
      "Excellent service! The staff is courteous, and the process is seamless.",
    videoUrl: "/video/vikram-intro.mp4"
  },
  {
    name: "Neha Gupta",
    location: "CoWrks",
    feedback: "Highly recommend Park+ valet! Timely and efficient service.",
    videoUrl: "/video/neha-intro.mp4"
  }
];

const Testimonial = () => {
  return (
    <Container
      maxWidth="lg"
      sx={{
        textAlign: "center",
        padding: "4rem 2rem",
        maxWidth: "95rem",
        margin: "auto"
      }}
    >
      <Typography variant="h4" fontWeight={700} color="#0a2a51" gutterBottom>
        Testimonials
      </Typography>
      <Box
        sx={{
          width: "3rem",
          height: "0.25rem",
          backgroundColor: "#5d9cec",
          margin: "0 auto 2rem auto"
        }}
      />
      <Swiper
        modules={[Pagination]}
        spaceBetween={20}
        slidesPerView={1}
        pagination={{ clickable: true }}
        breakpoints={{
          640: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 }
        }}
        style={{ paddingBottom: "40px" }}
      >
        {valetTestimonials.map(
          ({ name, location, feedback, videoUrl }, index) => (
            <SwiperSlide key={index}>
              <Card
                sx={{
                  background: "#ffffff",
                  padding: "2rem",
                  borderRadius: "10px",
                  maxWidth: "22rem",
                  boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
                  textAlign: "center",
                  position: "relative"
                }}
              >
                <Box
                  sx={{
                    width: "5rem",
                    height: "5rem",
                    borderRadius: "50%",
                    overflow: "hidden",
                    margin: "-3rem auto 1rem",
                    border: "4px solid #ffffff"
                  }}
                >
                  <video width="100%" height="auto" controls>
                    <source src={videoUrl} type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                </Box>
                <CardContent>
                  <Typography variant="h6" fontWeight={700} color="#0a2a51">
                    {name}
                  </Typography>
                  <Typography variant="subtitle2" color="#666" gutterBottom>
                    {location}
                  </Typography>
                  <Typography
                    variant="body2"
                    fontStyle="italic"
                    color="#333"
                    sx={{ padding: "0.5rem" }}
                  >
                    {feedback}
                  </Typography>
                </CardContent>
              </Card>
            </SwiperSlide>
          )
        )}
      </Swiper>
    </Container>
  );
};

export default Testimonial;
