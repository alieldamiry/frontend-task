/* eslint-disable @next/next/no-img-element */
import { Button, Container, Grid, Typography } from "@mui/material";
import { Box } from "@mui/system";
import Image from "next/image";
import introImg from "src/assets/images/intro-img.png";

const Intro = () => {
  return (
    <Box
      sx={{
        backgroundColor: "#21436E",
        position: "relative",
        top: "-3px",
        color: "#fff",
      }}
    >
      <Container maxWidth="xl" sx={{ py: 4 }}>
        <Grid container spacing={4}>
          <Grid item xs={12} lg={6}>
            <img style={{ width: "100%" }} src={introImg.src} alt="foodco" />
          </Grid>
          <Grid item xs={12} lg={6}>
            <Box sx={{ mb: 2 }}>
              <Typography variant="h2" sx={{ fontWeight: "normal" }}>
                The place
              </Typography>
              <Typography variant="h2" sx={{ fontWeight: "bold" }}>
                We call home
              </Typography>
            </Box>
            <Typography component="p" sx={{ lineHeight: 2 }}>
              Makadi Heights is a town built over 3.4 million square meters
              planned for development, with an elevation reaching 78 meters
              above sea level guaranteeing magnificent panoramic sea views
              residential units. Envisioned as a comprehensive town.
            </Typography>
            <Box>
              <Button variant="contained" size="large" sx={{ mr: 3, mt: 3 }}>
                Download Brochure
              </Button>
              <Button variant="contained" size="large" sx={{ mt: 3 }}>
                Show Master plan
              </Button>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Intro;
