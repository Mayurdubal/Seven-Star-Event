"use client";

import { Container, Card, CardContent, Typography, Box } from "@mui/material";
import LocalParkingIcon from "@mui/icons-material/LocalParking";
import DirectionsCarIcon from "@mui/icons-material/DirectionsCar";
import SecurityIcon from "@mui/icons-material/Security";
import SupportAgentIcon from "@mui/icons-material/SupportAgent";

const services = [
  {
    title: "Valet Parking",
    description:
      "Convenient valet parking with secure handling of your vehicle.",
    icon: <LocalParkingIcon sx={{ fontSize: 80, color: "#0a2a51" }} />
  },
  {
    title: "Car Wash",
    description: "Professional car wash services while your car is parked.",
    icon: <DirectionsCarIcon sx={{ fontSize: 80, color: "#0a2a51" }} />
  },
  {
    title: "Vehicle Security",
    description: "24/7 security to ensure your vehicle's safety.",
    icon: <SecurityIcon sx={{ fontSize: 80, color: "#0a2a51" }} />
  },
  {
    title: "Customer Support",
    description: "24/7 customer assistance for any parking-related issues.",
    icon: <SupportAgentIcon sx={{ fontSize: 80, color: "#0a2a51" }} />
  }
];

const Services = () => {
  return (
    <Container maxWidth="lg" sx={{ textAlign: "center", py: 6 }}>
      <Typography variant="h4" fontWeight={700} color="#0a2a51" gutterBottom>
        Our Services
      </Typography>
      <Box
        sx={{
          width: "3rem",
          height: "0.25rem",
          backgroundColor: "#5d9cec",
          margin: "0 auto 2rem auto"
        }}
      />

      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          gap: 4
        }}
      >
        {services.map((service, index) => (
          <Card
            key={index}
            sx={{
              width: { xs: "100%", sm: "45%", md: "22%" },
              boxShadow: 3,
              borderRadius: "10px",
              textAlign: "center",
              p: 3,
              transition: "transform 0.3s",
              "&:hover": { transform: "translateY(-5px)", boxShadow: 6 }
            }}
          >
            <Box sx={{ display: "flex", justifyContent: "center", my: 2 }}>
              {service.icon}
            </Box>
            <CardContent>
              <Typography variant="h6" fontWeight={700}>
                {service.title}
              </Typography>
              <Typography variant="body2" color="text.secondary" mt={1}>
                {service.description}
              </Typography>
            </CardContent>
          </Card>
        ))}
      </Box>
    </Container>
  );
};

export default Services;
