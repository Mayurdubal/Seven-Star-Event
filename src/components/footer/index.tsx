"use client";

import { Container, Typography, Box, Link, IconButton } from "@mui/material";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import YouTubeIcon from "@mui/icons-material/YouTube";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";
import EmailIcon from "@mui/icons-material/Email";

const Footer = () => {
  return (
    <Box
      component="footer"
      sx={{
        background:
          "linear-gradient(135deg, rgb(45, 61, 98), rgb(55, 101, 177))",
        py: 6,
        color: "#fff"
      }}
    >
      <Container maxWidth="lg">
        <Box
          sx={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "space-between",
            gap: 4,
            textAlign: { xs: "center", sm: "left" }
          }}
        >
          {/* Logo & Social */}
          <Box sx={{ flex: "1 1 200px" }}>
            <img src="/video/logo.png" alt="7* Valet Services" width={60} />
            <Typography variant="body2" sx={{ mt: 2, color: "#bbb" }}>
              Leader in Valet Services in Mumbai, Bangalore, Delhi NCR,
              Hyderabad, Pune.
            </Typography>
            <Box
              sx={{
                display: "flex",
                justifyContent: { xs: "center", sm: "flex-start" },
                gap: 1,
                mt: 2
              }}
            >
              <IconButton href="#" sx={{ color: "#fff" }}>
                <InstagramIcon />
              </IconButton>
              <IconButton href="#" sx={{ color: "#fff" }}>
                <FacebookIcon />
              </IconButton>
              <IconButton href="#" sx={{ color: "#fff" }}>
                <TwitterIcon />
              </IconButton>
              <IconButton href="#" sx={{ color: "#fff" }}>
                <YouTubeIcon />
              </IconButton>
              <IconButton href="#" sx={{ color: "#fff" }}>
                <LinkedInIcon />
              </IconButton>
            </Box>
          </Box>

          {/* Navigation */}
          <Box sx={{ flex: "1 1 200px" }}>
            <Typography variant="h6" fontWeight={700} color="#38bdf8">
              Navigation
            </Typography>
            <Link href="/about" color="#bbb" display="block" mt={1}>
              About Us
            </Link>
            <Link href="/services" color="#bbb" display="block" mt={1}>
              Testimonials
            </Link>
            <Link href="/portfolio" color="#bbb" display="block" mt={1}>
              FAQs
            </Link>
            <Link href="/customerFeedback" color="#bbb" display="block" mt={1}>
              Features
            </Link>
            <Link href="/contact" color="#bbb" display="block" mt={1}>
              Contact Us
            </Link>
          </Box>

          {/* Contact Info */}
          <Box sx={{ flex: "1 1 200px" }}>
            <Typography variant="h6" fontWeight={700} color="#38bdf8">
              Contact Info
            </Typography>
            <Typography variant="body2" mt={1} color="#bbb">
              Mahdevnagar Hadapsar, Pune Maharashtra, 412308.
            </Typography>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                mt: 1,
                justifyContent: { xs: "center", sm: "flex-start" }
              }}
            >
              <EmailIcon fontSize="small" sx={{ mr: 1, color: "#bbb" }} />
              <Link href="mailto:siddhant@valet.in" color="#bbb">
                siddhant@valet.in
              </Link>
            </Box>
          </Box>

          {/* Discover */}
          <Box sx={{ flex: "1 1 200px" }}>
            <Typography variant="h6" fontWeight={700} color="#38bdf8">
              Discover
            </Typography>
            <Link
              href="/termsAndConditions"
              color="#bbb"
              display="block"
              mt={1}
            >
              Terms & Conditions
            </Link>
            <Link href="/privacy-policy" color="#bbb" display="block" mt={1}>
              Privacy Policy
            </Link>
            <Link href="/contact" color="#bbb" display="block" mt={1}>
              Online Registration Details
            </Link>
          </Box>
        </Box>

        {/* Footer Bottom */}
        <Box textAlign="center" mt={4}>
          <Typography variant="body2" color="#bbb">
            © 7* Services Pvt Ltd. All rights Reserved
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;
