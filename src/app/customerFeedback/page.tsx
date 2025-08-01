"use client";

import {
  Container,
  Grid,
  Card,
  CardContent,
  Typography,
  Box,
  CardMedia
} from "@mui/material";
import LocalParkingIcon from "@mui/icons-material/LocalParking";
import DirectionsCarIcon from "@mui/icons-material/DirectionsCar";
import SecurityIcon from "@mui/icons-material/Security";
import SupportAgentIcon from "@mui/icons-material/SupportAgent";

const services = [
  {
    title: "Valet Parking",
    description:
      "Convenient valet parking with secure handling of your vehicle.",
    icon: <LocalParkingIcon fontSize="large" color="primary" />,
    image: "/images/valet-parking.jpg"
  },
  {
    title: "Car Wash",
    description: "Professional car wash services while your car is parked.",
    icon: <DirectionsCarIcon fontSize="large" color="primary" />,
    image: "/images/car-wash.jpg"
  },
  {
    title: "Vehicle Security",
    description: "24/7 security to ensure your vehicle's safety.",
    icon: <SecurityIcon fontSize="large" color="primary" />,
    image: "/images/vehicle-security.jpg"
  },
  {
    title: "Customer Support",
    description: "24/7 customer assistance for any parking-related issues.",
    icon: <SupportAgentIcon fontSize="large" color="primary" />,
    image: "/images/customer-support.jpg"
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
      <Grid container spacing={4} justifyContent="center">
        {services.map((service, index) => (
          <Grid item xs={12} sm={6} md={3} key={index}>
            <Card
              sx={{
                boxShadow: 3,
                borderRadius: "10px",
                textAlign: "center",
                p: 3
              }}
            >
              <CardMedia
                component="img"
                height="140"
                image={service.image}
                alt={service.title}
                sx={{ borderRadius: "8px" }}
              />
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
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default Services;
