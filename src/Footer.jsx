import React from "react";
import { Box, Container, Typography, IconButton,} from "@mui/material";
import { GitHub, LinkedIn, Email } from "@mui/icons-material";

const Footer = () => {
  return (
    <Box component="footer" sx={{ bgcolor: "white", color: "#FF9000 ", mt: 2, height: "10vh"}}>
      <Container maxWidth="lg">
        <Box textAlign="center">
          <Typography variant="body2">© {new Date().getFullYear()} Vindhya Chalamolu. All rights reserved.</Typography>
          <IconButton href="#" color="inherit" sx={{ mt: 1 }}>
            <IconButton href="https://github.com/VindhyaChalamolu" target="_blank" color="inherit">
                <GitHub />
              </IconButton>
              <IconButton href="https://www.linkedin.com/in/vindhya-chalamolu-9b52871a1/" target="_blank" color="inherit">
                <LinkedIn />
              </IconButton>
              <IconButton href="mailto:vindhya.chalamolu@gmail.com" color="inherit">
                <Email />
              </IconButton>
          </IconButton>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;
