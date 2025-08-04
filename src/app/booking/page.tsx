"use client";

import React, { useState } from "react";
import {
  TextField,
  MenuItem,
  Button,
  Container,
  Typography,
  FormControl,
  InputLabel,
  Select,
  Grid,
  Paper,
  InputAdornment
} from "@mui/material";
import EventIcon from "@mui/icons-material/Event";
import EmailIcon from "@mui/icons-material/Email";
import PhoneIcon from "@mui/icons-material/Phone";
import PersonIcon from "@mui/icons-material/Person";
import DirectionsCarIcon from "@mui/icons-material/DirectionsCar";

const BookingPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    date: ""
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSelectChange = (e: any) => {
    setFormData((prev) => ({
      ...prev,
      service: e.target.value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Booking request submitted successfully!");
  };

  return (
    <Container maxWidth="md">
      <Paper
        elevation={5}
        sx={{
          padding: "3rem",
          borderRadius: "10px",
          background: "linear-gradient(135deg, #f9f9f9 0%, #ffffff 100%)",
          boxShadow: "0px 8px 20px rgba(0, 0, 0, 0.1)",
          textAlign: "center",
          mt: 5
        }}
      >
        <Typography
          variant="h4"
          sx={{
            mb: 3,
            fontWeight: "bold",
            color: "#0A2A51",
            textTransform: "uppercase",
            letterSpacing: "1px"
          }}
        >
          Book Your Valet Service
        </Typography>
        <Typography variant="subtitle1" sx={{ mb: 4, color: "#666" }}>
          Hassle-free parking solutions for your convenience
        </Typography>
        <form onSubmit={handleSubmit}>
          <Grid container spacing={3}>
            {/* Full Name */}
            <Grid item xs={12} sm={6} {...({} as any)}>
              <TextField
                fullWidth
                label="Full Name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                margin="normal"
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <PersonIcon sx={{ color: "#0A2A51", mr: 1 }} />
                    </InputAdornment>
                  )
                }}
              />
            </Grid>

            {/* Email */}
            <Grid item xs={12} sm={6} {...({} as any)}>
              <TextField
                fullWidth
                label="Email"
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                margin="normal"
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <EmailIcon sx={{ color: "#0A2A51", mr: 1 }} />
                    </InputAdornment>
                  )
                }}
              />
            </Grid>

            {/* Phone */}
            <Grid item xs={12} sm={6} {...({} as any)}>
              <TextField
                fullWidth
                label="Phone Number"
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                required
                margin="normal"
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <PhoneIcon sx={{ color: "#0A2A51", mr: 1 }} />
                    </InputAdornment>
                  )
                }}
              />
            </Grid>

            {/* Service Select */}
            <Grid item xs={12} sm={6} {...({} as any)}>
              <FormControl fullWidth margin="normal">
                <InputLabel>Select Service</InputLabel>
                <Select
                  name="service"
                  value={formData.service}
                  onChange={handleSelectChange}
                  required
                >
                  <MenuItem value="Event Valet Parking">
                    <DirectionsCarIcon sx={{ mr: 1, color: "#0A2A51" }} />
                    Event Valet Parking
                  </MenuItem>
                  <MenuItem value="Hotel & Restaurant Valet">
                    <DirectionsCarIcon sx={{ mr: 1, color: "#0A2A51" }} />
                    Hotel & Restaurant Valet
                  </MenuItem>
                  <MenuItem value="Corporate & Retail Valet">
                    <DirectionsCarIcon sx={{ mr: 1, color: "#0A2A51" }} />
                    Corporate & Retail Valet
                  </MenuItem>
                  <MenuItem value="Airport & VIP Transport">
                    <DirectionsCarIcon sx={{ mr: 1, color: "#0A2A51" }} />
                    Airport & VIP Transport
                  </MenuItem>
                </Select>
              </FormControl>
            </Grid>

            {/* Booking Date */}
            <Grid item xs={12} {...({} as any)}>
              <TextField
                fullWidth
                label="Booking Date"
                type="date"
                name="date"
                value={formData.date}
                onChange={handleChange}
                InputLabelProps={{ shrink: true }}
                required
                margin="normal"
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <EventIcon sx={{ color: "#0A2A51", mr: 1 }} />
                    </InputAdornment>
                  )
                }}
              />
            </Grid>

            {/* Submit Button */}
            <Grid item xs={12} {...({} as any)}>
              <Button
                type="submit"
                variant="contained"
                fullWidth
                sx={{
                  mt: 3,
                  backgroundColor: "#0A2A51",
                  padding: "12px",
                  fontSize: "1.1rem",
                  fontWeight: "bold",
                  borderRadius: "6px",
                  boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.2)",
                  "&:hover": {
                    backgroundColor: "#003347",
                    boxShadow: "none"
                  }
                }}
              >
                Confirm Booking
              </Button>
            </Grid>
          </Grid>
        </form>
      </Paper>
    </Container>
  );
};

export default BookingPage;
