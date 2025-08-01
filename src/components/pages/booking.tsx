"use client";

import React, { useState } from "react";
import {
  TextField,
  Button,
  Container,
  Typography,
  MenuItem,
  Select,
  FormControl,
  InputLabel
} from "@mui/material";

const BookingForm = () => {
  const [bookingDetails, setBookingDetails] = useState({
    name: "",
    email: "",
    phone: "",
    serviceType: "",
    date: "",
    time: ""
  });

  const handleChange = (
    event: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = event.target as HTMLInputElement;
    setBookingDetails((prevDetails) => ({
      ...prevDetails,
      [name]: value
    }));
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    console.log("Booking Confirmed:", bookingDetails);
  };

  return (
    <Container
      maxWidth="sm"
      sx={{
        mt: 4,
        p: 4,
        borderRadius: 2,
        boxShadow: 3,
        bgcolor: "white"
      }}
    >
      <Typography variant="h4" gutterBottom align="center">
        Book Your Valet Service
      </Typography>
      <form onSubmit={handleSubmit}>
        <TextField
          label="Full Name"
          name="name"
          value={bookingDetails.name}
          onChange={handleChange}
          fullWidth
          required
          margin="normal"
        />
        <TextField
          label="Email"
          type="email"
          name="email"
          value={bookingDetails.email}
          onChange={handleChange}
          fullWidth
          required
          margin="normal"
        />
        <TextField
          label="Phone Number"
          name="phone"
          value={bookingDetails.phone}
          onChange={handleChange}
          fullWidth
          required
          margin="normal"
        />
        <FormControl fullWidth margin="normal">
          <InputLabel>Service Type</InputLabel>
          <Select
            name="serviceType"
            value={bookingDetails.serviceType}
            onChange={(event) =>
              setBookingDetails((prevDetails) => ({
                ...prevDetails,
                serviceType: event.target.value
              }))
            }
            required
          >
            <MenuItem value="Event Valet">Event Valet</MenuItem>
            <MenuItem value="Hotel Valet">Hotel Valet</MenuItem>
            <MenuItem value="Corporate Valet">Corporate Valet</MenuItem>
          </Select>
        </FormControl>
        <TextField
          label="Date"
          type="date"
          name="date"
          value={bookingDetails.date}
          onChange={handleChange}
          fullWidth
          required
          margin="normal"
          InputLabelProps={{ shrink: true }}
        />
        <TextField
          label="Time"
          type="time"
          name="time"
          value={bookingDetails.time}
          onChange={handleChange}
          fullWidth
          required
          margin="normal"
          InputLabelProps={{ shrink: true }}
        />
        <Button
          type="submit"
          variant="contained"
          color="primary"
          fullWidth
          sx={{ mt: 2 }}
        >
          Confirm Booking
        </Button>
      </form>
    </Container>
  );
};

export default BookingForm;
