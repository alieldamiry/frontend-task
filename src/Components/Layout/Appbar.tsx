import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import logo from "src/assets/svgs/logo.svg";
import Image from "next/image";
import { Container } from "@mui/material";
import Logo from "../Logo";
import axios from "axios";

const Appbar = ({ weatherData }: any) => {
  const [offset, setOffset] = React.useState(0);
  console.log("weatherData", weatherData);

  React.useEffect(() => {
    const onScroll = () => setOffset(window.pageYOffset);
    window.removeEventListener("scroll", onScroll);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <Box sx={{ flexGrow: 1, color: "#fff" }}>
      <AppBar
        position="fixed"
        color="transparent"
        sx={{ boxShadow: "none" }}
        elevation={offset > 600 ? 24 : 0}
        style={{
          backgroundColor: offset > 600 ? "#21436E" : "transparent",
          color: "#fff",
          boxShadow:
            offset > 600
              ? "5px 0px 27px -5px rgba(0, 0, 0, 0.7) !important"
              : undefined,
        }}
      >
        <Container maxWidth="xl">
          <Toolbar
            sx={{
              display: "flex",
              justifyContent: "space-between",
              padding: "1rem 0",
            }}
          >
            <Box>
              <Logo />
            </Box>
            <Box sx={{ display: "flex", alignItems: "center" }}>
              {weatherData.weather.map((w: any) => (
                <Box key={w.id} sx={{ display: "flex", alignItems: "center" }}>
                  <span>{w.main}</span>
                  <img
                    src={`http://openweathermap.org/img/w/01d.png`}
                    width={60}
                    height={60}
                    // alt={w.description}
                  />
                </Box>
              ))}
              <Box sx={{ mr: 3 }}>{weatherData.main.temp} F</Box>
              <Button variant="contained" size="large" color="primary">
                Book Now
              </Button>
              <Button color="inherit">Menu</Button>
              <IconButton edge="start" color="inherit" aria-label="menu">
                <MenuIcon fontSize="large" />
              </IconButton>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
    </Box>
  );
};

export default Appbar;
