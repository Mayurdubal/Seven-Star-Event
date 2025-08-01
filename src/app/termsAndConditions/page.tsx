/* eslint-disable react/no-unescaped-entities */
"use client";

import { Container, Typography, Box } from "@mui/material";

const TermsAndConditions = () => {
  return (
    <Container maxWidth="md" sx={{ py: 6 }}>
      <Typography variant="h4" fontWeight={700} gutterBottom>
        Terms & Conditions
      </Typography>
      <Box sx={{ mt: 2 }}>
        <Typography variant="h6" fontWeight={600} gutterBottom>
          ACCEPTANCE
        </Typography>
        <Typography variant="body1" paragraph>
          By using the ParkPlus mobile app or web app, you agree to be bound by
          these Terms of Use. ParkPlus reserves the right to update or revise
          these Terms at any time.
        </Typography>

        <Typography variant="h6" fontWeight={600} gutterBottom>
          GENERAL TERMS AND CONDITIONS
        </Typography>
        <Typography variant="body1" paragraph>
          ParkPlus provides services to inform customers of available parking
          locations. We do not assume responsibility for the safety of persons
          or property at selected locations, nor do we guarantee the
          availability of a specific parking spot.
        </Typography>

        <Typography variant="h6" fontWeight={600} gutterBottom>
          PRIVACY POLICY: SECURITY
        </Typography>
        <Typography variant="body1" paragraph>
          You confirm that you have read and accept our Privacy Policy. ParkPlus
          is not responsible for any security breaches or technical
          malfunctions.
        </Typography>

        <Typography variant="h6" fontWeight={600} gutterBottom>
          USER COMMENTS, FEEDBACK, AND OTHER SUBMISSIONS
        </Typography>
        <Typography variant="body1" paragraph>
          All feedback submitted to ParkPlus becomes our exclusive property. We
          may use it in any form without specific consent.
        </Typography>

        <Typography variant="h6" fontWeight={600} gutterBottom>
          LINKS TO OTHER WEB MOBILE APPS AND SERVICES
        </Typography>
        <Typography variant="body1" paragraph>
          ParkPlus is not responsible for the privacy practices or content of
          external links provided in the app.
        </Typography>

        <Typography variant="h6" fontWeight={600} gutterBottom>
          USER ACCOUNTS
        </Typography>
        <Typography variant="body1" paragraph>
          A valid 10-digit phone number is required to register. Users must not
          share their account credentials with others. ParkPlus reserves the
          right to terminate accounts violating these conditions.
        </Typography>

        <Typography variant="h6" fontWeight={600} gutterBottom>
          OWNERSHIP: SUBLICENSING
        </Typography>
        <Typography variant="body1" paragraph>
          The ParkPlus mobile app and its contents are protected by intellectual
          property laws. Unauthorized use is prohibited.
        </Typography>

        <Typography variant="h6" fontWeight={600} gutterBottom>
          UPTIME
        </Typography>
        <Typography variant="body1" paragraph>
          ParkPlus does not guarantee the availability or uptime of the mobile
          app, API, or database.
        </Typography>

        <Typography variant="h6" fontWeight={600} gutterBottom>
          TERMINATION OF USAGE
        </Typography>
        <Typography variant="body1" paragraph>
          ParkPlus may terminate user access at any time without prior notice if
          deemed necessary.
        </Typography>

        <Typography variant="h6" fontWeight={600} gutterBottom>
          DISCLAIMER AND LIABILITY LIMIT
        </Typography>
        <Typography variant="body1" paragraph>
          The app and its content are provided "as is" without any warranties.
          ParkPlus is not liable for any damages resulting from the use of the
          app.
        </Typography>

        <Typography variant="h6" fontWeight={600} gutterBottom>
          COPYRIGHT COMPLAINTS
        </Typography>
        <Typography variant="body1" paragraph>
          If you believe that any content infringes your copyright, please
          contact us with the necessary details.
        </Typography>

        <Typography variant="h6" fontWeight={600} gutterBottom>
          GOVERNING LAW
        </Typography>
        <Typography variant="body1" paragraph>
          These Terms & Conditions shall be governed by and interpreted in
          accordance with the laws of Gurgaon, Haryana, India.
        </Typography>

        <Typography variant="h6" fontWeight={600} gutterBottom>
          MODIFICATION OF MOBILE APP
        </Typography>
        <Typography variant="body1" paragraph>
          ParkPlus may modify these Terms at any time. Continued use of the app
          will constitute acceptance of the changes.
        </Typography>

        <Typography variant="h6" fontWeight={600} gutterBottom>
          ADDITIONAL COMPLIANCE CLAUSES
        </Typography>
        <Typography variant="body1" paragraph>
          Users are prohibited from sharing, uploading, or transmitting illegal
          or inappropriate content on the platform.
        </Typography>

        <Typography variant="h6" fontWeight={600} gutterBottom>
          SECURITY MEASURES
        </Typography>
        <Typography variant="body1" paragraph>
          ParkPlus ensures secure handling of user data through encryption,
          firewalls, and regular security audits.
        </Typography>
      </Box>
    </Container>
  );
};

export default TermsAndConditions;
