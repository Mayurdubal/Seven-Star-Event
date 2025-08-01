"use client";

import React, { useState } from "react";
import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
  Divider
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const faqData = [
  {
    question: "What is Valet Parking?",
    answer:
      "A service in which guests can have their cars parked by an employee of the service provider."
  },
  {
    question: "How do I know where the Valet Booth area is?",
    answer: "You will be guided by our staff or signage at the venue."
  },
  {
    question: "What is an appropriate tip for valet parking services?",
    answer:
      "Tipping is optional, but a standard tip is around $3 to $5, depending on service quality."
  },
  {
    question: "What if something happens to my car?",
    answer:
      "We take full responsibility for your vehicle while it is in our care. Any issues should be reported immediately."
  },
  {
    question: "Where do the valets park the car?",
    answer:
      "Your vehicle is parked in a secure and designated parking area to ensure safety."
  },
  {
    question: "How is your staff trained?",
    answer:
      "Our valets undergo rigorous training in customer service, vehicle handling, and safety protocols."
  }
];

const FAQAccordion: React.FC = () => {
  const [expanded, setExpanded] = useState<string | false>(false);

  const handleChange =
    (panel: string) => (_: React.SyntheticEvent, isExpanded: boolean) => {
      setExpanded(isExpanded ? panel : false);
    };

  return (
    <div
      style={{
        maxWidth: "800px",
        margin: "auto",
        padding: "2rem 0",
        fontFamily: "'Poppins', sans-serif"
      }}
    >
      {faqData.map((item, index) => (
        <Accordion
          key={index}
          expanded={expanded === `panel${index}`}
          onChange={handleChange(`panel${index}`)}
          sx={{
            backgroundColor:
              expanded === `panel${index}` ? "#F7FAFC" : "#f0f0f0",
            boxShadow:
              expanded === `panel${index}`
                ? "0px 5px 15px rgba(40, 36, 36, 0.1)"
                : "none",
            borderRadius: "8px",
            marginBottom: "0.8rem",
            transition: "all 0.3s ease-in-out",
            "&:hover": {
              transform: "scale(1.02)",
              boxShadow: "0px 5px 15px rgba(23, 22, 22, 0.2)"
            }
          }}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon sx={{ color: "#0A2A51" }} />}
            sx={{
              fontWeight: "bold",
              color: "#0A2A51",
              padding: "1rem",
              fontSize: "1rem",
              transition: "color 0.3s ease-in-out",
              "&.Mui-expanded": { color: "#003366" }
            }}
          >
            <Typography variant="h6">{`${index + 1}. ${item.question}`}</Typography>
          </AccordionSummary>
          <Divider
            sx={{
              backgroundColor: "#5D9CEC",
              marginBottom: "0.5rem"
            }}
          />
          <AccordionDetails
            sx={{
              background:
                "linear-gradient(135deg,rgb(80, 74, 74) 0%,rgb(135, 136, 137) 100%)",
              color: "#ffffff",
              padding: "1.2rem",
              borderRadius: "0 0 8px 8px"
            }}
          >
            <Typography sx={{ fontSize: "1rem", lineHeight: "1.6" }}>
              {item.answer}
            </Typography>
          </AccordionDetails>
        </Accordion>
      ))}
    </div>
  );
};

export default FAQAccordion;
