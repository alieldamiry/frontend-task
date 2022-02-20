import { Button } from "@mui/material";
import { styled } from "@mui/material/styles";
import heroImg from "src/assets/images/hero.png";

const Hero = () => {
  const StyledHero = styled("div")({
    background: `no-repeat center bottom url(${heroImg.src});`,
    backgroundSize: "cover",
    height: "70vh",
  });
  return <StyledHero></StyledHero>;
};

export default Hero;
