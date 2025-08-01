"use client";

import { Container, Typography, Box } from "@mui/material";

const PrivacyPolicy = () => {
  return (
    <Container maxWidth="md" sx={{ py: 6 }}>
      <Typography variant="h4" fontWeight={700} gutterBottom>
        Privacy Policy
      </Typography>
      <Box sx={{ mt: 2 }}>
        <Typography variant="h6" fontWeight={600} gutterBottom>
          Disclaimer:
        </Typography>
        <Typography variant="body1" paragraph>
          All information related to vehicles is retrieved from data aggregators
          that are publicly available. Park+ does not represent any Government
          entity. The information is original & we are displaying the data in
          the public interest.
        </Typography>

        <Typography variant="h6" fontWeight={600} gutterBottom>
          Cancellation and Refunds
        </Typography>
        <Typography variant="body1" paragraph>
          All bookings on the Park+ mobile app are prepaid, where the user has
          to book the slot and is billed as per the number of hours chosen and
          hourly rates of the parking site. All bookings are non-cancellable and
          non-refundable unless under very special circumstances.
        </Typography>

        <Typography variant="h6" fontWeight={600} gutterBottom>
          SECTION 1 - WHAT DO WE DO WITH YOUR INFORMATION?
        </Typography>
        <Typography variant="body1" paragraph>
          We collect personal information you provide us such as your name,
          address, email, phone number, location, and vehicle license plate
          number.
        </Typography>

        <Typography variant="h6" fontWeight={600} gutterBottom>
          SECTION 2 - CONSENT
        </Typography>
        <Typography variant="body1" paragraph>
          When you provide us with personal information to complete a
          transaction, we imply that you consent to our collecting it and using
          it for that specific reason only. If we ask for your personal
          information for a secondary reason, like marketing, we will ask you
          directly for your expressed consent.
        </Typography>

        <Typography variant="h6" fontWeight={600} gutterBottom>
          SECTION 3 - DISCLOSURE
        </Typography>
        <Typography variant="body1" paragraph>
          We may disclose your personal information if we are required by law to
          do so or if you violate our Terms of Service.
        </Typography>

        <Typography variant="h6" fontWeight={600} gutterBottom>
          SECTION 4 - SECURITY
        </Typography>
        <Typography variant="body1" paragraph>
          We use industry-wide, commercially reasonable security practices such
          as encryption, firewalls, and SSL (Secure Socket Layers) to protect
          your information.
        </Typography>

        <Typography variant="h6" fontWeight={600} gutterBottom>
          SECTION 5 - COOKIES
        </Typography>
        <Typography variant="body1" paragraph>
          We use cookies to maintain session information. They are not used to
          personally identify you on other websites.
        </Typography>

        <Typography variant="h6" fontWeight={600} gutterBottom>
          SECTION 6 - AGE OF CONSENT
        </Typography>
        <Typography variant="body1" paragraph>
          By using this site, you represent that you are at least the age of
          majority in your state or province of residence.
        </Typography>

        <Typography variant="h6" fontWeight={600} gutterBottom>
          SECTION 7 - CHANGES TO THIS PRIVACY POLICY
        </Typography>
        <Typography variant="body1" paragraph>
          We reserve the right to modify this privacy policy at any time, so
          please review it frequently.
        </Typography>
      </Box>
    </Container>
  );
};

export default PrivacyPolicy;
