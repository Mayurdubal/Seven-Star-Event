"use client";

import {
  Container,
  Grid,
  Typography,
  Box,
  Link,
  IconButton
} from "@mui/material";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import YouTubeIcon from "@mui/icons-material/YouTube";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";
import EmailIcon from "@mui/icons-material/Email";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import PhoneIcon from "@mui/icons-material/Phone";

const Footer = () => {
  return (
    <Box
      sx={{
        background: "linear-gradient(135deg,rgb(45, 61, 98),rgb(55, 101, 177))",
        py: 6,
        color: "#fff"
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={4} justifyContent="space-between">
          <Grid item xs={12} sm={3} textAlign="center">
            <img src="/video/logo.png" alt="7* Valet Services" width={50} />
            <Typography variant="body2" sx={{ mt: 2, color: "#bbb" }}>
              Leader in Valet Services in Mumbai, Bangalore, Delhi NCR,
              Hyderabad, Pune.
            </Typography>
            <Box
              sx={{ display: "flex", justifyContent: "center", gap: 1, mt: 2 }}
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
          </Grid>

          <Grid item xs={12} sm={3}>
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
          </Grid>

          <Grid item xs={12} sm={3}>
            <Typography variant="h6" fontWeight={700} color="#38bdf8">
              Contact Info
            </Typography>
            <Typography variant="body2" mt={1} color="#bbb">
              Mahdevnagar Hadapsar, Pune Mahaarshtra, 412308.
            </Typography>
            <Box display="flex" alignItems="center" mt={1}>
              <EmailIcon fontSize="small" sx={{ mr: 1, color: "#bbb" }} />
              <Typography variant="body2" color="#bbb">
                <Link href="mailto:info@valeto.in" color="#bbb">
                  siddhant@valet.in
                </Link>
              </Typography>
            </Box>
          </Grid>

          <Grid item xs={12} sm={3}>
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
          </Grid>
        </Grid>

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
