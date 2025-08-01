"use client";

import { useForm } from "@formspree/react";
import { useState, ChangeEvent } from "react";
import {
  Container,
  Typography,
  Button,
  TextField,
  Box,
  Paper,
  Grid,
  IconButton
} from "@mui/material";
import SupportAgentIcon from "@mui/icons-material/SupportAgent";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import SendIcon from "@mui/icons-material/Send";
import ContactPhoneIcon from "@mui/icons-material/ContactPhone";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";

interface FormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

const Contact = () => {
  const [state, handleSubmit] = useForm("moqovqjk");
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    subject: "",
    message: ""
  });
  const hasErrors = Array.isArray(state.errors) && state.errors.length > 0;

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleFormSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    await handleSubmit(e);
    if (state.succeeded) {
      setFormData({ name: "", email: "", subject: "", message: "" });
    }
  };

  return (
    <Box sx={{ py: 10, color: "#fff" }}>
      <Container maxWidth="lg">
        <Paper
          elevation={5}
          sx={{
            p: 5,
            borderRadius: 4,
            textAlign: "center",
            backgroundColor: "#1e293b",
            color: "#fff"
          }}
        >
          <Typography
            variant="h4"
            fontWeight={700}
            color="#38bdf8"
            gutterBottom
          >
            Contact Us
          </Typography>
          <Typography variant="h6" gutterBottom>
            Need <span style={{ color: "#38bdf8" }}>help?</span> Let&apos;s
            Talk!
          </Typography>
          <Typography variant="body1" paragraph>
            Our team is ready to assist you. Reach out to us through any of the
            options below.
          </Typography>

          <Grid container spacing={2} justifyContent="center" sx={{ my: 3 }}>
            <Grid item>
              <Button
                variant="contained"
                color="primary"
                startIcon={<ContactPhoneIcon />}
              >
                Call Us
              </Button>
            </Grid>
            <Grid item>
              <Button
                variant="contained"
                color="secondary"
                startIcon={<ChatBubbleOutlineIcon />}
              >
                Live Chat
              </Button>
            </Grid>
          </Grid>

          <Box sx={{ textAlign: "left", mt: 4 }}>
            <Typography variant="h5" gutterBottom color="#38bdf8">
              How can we assist you?
            </Typography>
            <Typography variant="body1" paragraph>
              Fill in the form below, and we will get back to you as soon as
              possible.
            </Typography>

            <form onSubmit={handleFormSubmit}>
              <Grid container spacing={2} sx={{ mb: 2 }}>
                <Grid item xs={12} sm={6}>
                  <TextField
                    fullWidth
                    label="Your Name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    sx={{ bgcolor: "#fff", borderRadius: 1 }}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    fullWidth
                    label="Email Address"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    sx={{ bgcolor: "#fff", borderRadius: 1 }}
                  />
                </Grid>
              </Grid>
              <TextField
                fullWidth
                label="Subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                required
                sx={{ mb: 2, bgcolor: "#fff", borderRadius: 1 }}
              />
              <TextField
                fullWidth
                label="Your Message"
                name="message"
                multiline
                rows={4}
                value={formData.message}
                onChange={handleChange}
                required
                sx={{ mb: 2, bgcolor: "#fff", borderRadius: 1 }}
              />
              <Button
                variant="contained"
                color="success"
                type="submit"
                disabled={state.submitting}
                endIcon={<SendIcon />}
                fullWidth
                sx={{
                  fontSize: "1.1rem",
                  py: 1.5,
                  bgcolor: "#38bdf8",
                  "&:hover": { bgcolor: "#0284c7" }
                }}
              >
                Send Message
              </Button>
            </form>
            <Typography
              sx={{
                opacity: 1,
                marginTop: 2,
                color: hasErrors ? "#f87171" : "#4ade80"
              }}
            >
              {state.succeeded && "Your Message sent successfully!"}
              {hasErrors && "Failed to send Message"}
            </Typography>
          </Box>
        </Paper>
      </Container>
    </Box>
  );
};

export default Contact;
