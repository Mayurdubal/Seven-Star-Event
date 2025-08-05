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
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  IconButton,
  CircularProgress
} from "@mui/material";
import ContactPhoneIcon from "@mui/icons-material/ContactPhone";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";
import SendIcon from "@mui/icons-material/Send";
import CloseIcon from "@mui/icons-material/Close";
import axios from "axios";

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
  const [chatOpen, setChatOpen] = useState(false);
  const [chatInput, setChatInput] = useState("");
  const [chatMessages, setChatMessages] = useState<
    { sender: "user" | "ai"; text: string }[]
  >([]);
  const [loading, setLoading] = useState(false);

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

  const handleSendMessage = async () => {
    if (!chatInput.trim()) return;

    setChatMessages([...chatMessages, { sender: "user", text: chatInput }]);
    const userMessage = chatInput;
    setChatInput("");
    setLoading(true);

    try {
      const res = await axios.post(
        "https://api.openai.com/v1/chat/completions",
        {
          model: "gpt-4o-mini",
          messages: [
            {
              role: "system",
              content:
                "You are a helpful AI support agent for Seven Star Services. Answer questions about valet services, pricing, and availability."
            },
            { role: "user", content: userMessage }
          ]
        },
        {
          headers: {
            Authorization: `Bearer ${process.env.NEXT_PUBLIC_OPENAI_API_KEY}`,
            "Content-Type": "application/json"
          }
        }
      );

      const aiReply = res.data.choices[0].message.content;
      setChatMessages((prev) => [...prev, { sender: "ai", text: aiReply }]);
    } catch (error) {
      setChatMessages((prev) => [
        ...prev,
        { sender: "ai", text: "Sorry, I couldn’t fetch a response right now." }
      ]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Box
      sx={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        bgcolor: "linear-gradient(135deg, #0A2A51, #003347)",
        py: 6
      }}
    >
      <Container maxWidth="sm">
        <Paper
          elevation={6}
          sx={{
            p: 5,
            borderRadius: 4,
            textAlign: "center",
            background: "linear-gradient(135deg, #ffffff, #f9fafc)",
            boxShadow: "0 8px 30px rgba(0,0,0,0.15)"
          }}
        >
          <Typography
            variant="h4"
            fontWeight={700}
            color="primary"
            gutterBottom
          >
            Contact Us
          </Typography>
          <Typography variant="body1" sx={{ mb: 4, color: "text.secondary" }}>
            We’d love to hear from you. Reach out today!
          </Typography>

          {/* Action Buttons */}
          <Box
            sx={{
              display: "flex",
              flexDirection: { xs: "column", sm: "row" },
              gap: 2,
              mb: 4
            }}
          >
            <Button
              variant="contained"
              startIcon={<ContactPhoneIcon />}
              sx={{
                flex: 1,
                py: 1.2,
                fontSize: "1rem",
                fontWeight: 600,
                background: "linear-gradient(135deg, #0A2A51, #1E88E5)",
                "&:hover": {
                  background: "linear-gradient(135deg, #003347, #1565C0)"
                }
              }}
            >
              Call Us
            </Button>
            <Button
              variant="outlined"
              startIcon={<ChatBubbleOutlineIcon />}
              sx={{
                flex: 1,
                py: 1.2,
                fontSize: "1rem",
                fontWeight: 600,
                borderColor: "#0A2A51",
                color: "#0A2A51",
                "&:hover": {
                  bgcolor: "#e3f2fd",
                  borderColor: "#003347"
                }
              }}
              onClick={() => setChatOpen(true)}
            >
              Live Chat
            </Button>
          </Box>

          {/* Contact Form */}
          <form onSubmit={handleFormSubmit}>
            <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
              <TextField
                label="Your Name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
              />
              <TextField
                label="Email Address"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
              <TextField
                label="Subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                required
              />
              <TextField
                label="Your Message"
                name="message"
                multiline
                rows={4}
                value={formData.message}
                onChange={handleChange}
                required
              />
              <Button
                type="submit"
                variant="contained"
                disabled={state.submitting}
                endIcon={<SendIcon />}
                sx={{
                  py: 1.5,
                  fontSize: "1.1rem",
                  fontWeight: 600,
                  background: "linear-gradient(135deg, #38bdf8, #0284c7)",
                  "&:hover": {
                    background: "linear-gradient(135deg, #0284c7, #0369a1)"
                  }
                }}
              >
                Send Message
              </Button>
            </Box>
          </form>

          <Typography
            textAlign="center"
            sx={{
              mt: 2,
              color: hasErrors ? "error.main" : "success.main",
              fontWeight: 500
            }}
          >
            {state.succeeded && "Your Message sent successfully!"}
            {hasErrors && "Failed to send Message"}
          </Typography>
        </Paper>
      </Container>

      {/* Live Chat Modal */}
      <Dialog
        open={chatOpen}
        onClose={() => setChatOpen(false)}
        fullWidth
        maxWidth="sm"
      >
        <DialogTitle>
          Seven Star Services - Live Chat
          <IconButton
            aria-label="close"
            onClick={() => setChatOpen(false)}
            sx={{ position: "absolute", right: 8, top: 8 }}
          >
            <CloseIcon />
          </IconButton>
        </DialogTitle>
        <DialogContent dividers sx={{ minHeight: "300px" }}>
          <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
            {chatMessages.map((msg, idx) => (
              <Box
                key={idx}
                sx={{
                  alignSelf: msg.sender === "user" ? "flex-end" : "flex-start",
                  bgcolor: msg.sender === "user" ? "primary.main" : "grey.200",
                  color: msg.sender === "user" ? "#fff" : "#000",
                  p: 1.5,
                  borderRadius: 2,
                  maxWidth: "80%"
                }}
              >
                {msg.text}
              </Box>
            ))}
            {loading && (
              <Box sx={{ display: "flex", justifyContent: "center" }}>
                <CircularProgress size={24} />
              </Box>
            )}
          </Box>
        </DialogContent>
        <DialogActions>
          <Box sx={{ display: "flex", gap: 1, width: "100%" }}>
            <TextField
              fullWidth
              placeholder="Type your message..."
              value={chatInput}
              onChange={(e) => setChatInput(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && handleSendMessage()}
            />
            <Button
              variant="contained"
              onClick={handleSendMessage}
              disabled={loading}
            >
              Send
            </Button>
          </Box>
        </DialogActions>
      </Dialog>
    </Box>
  );
};

export default Contact;
