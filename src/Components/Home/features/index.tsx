import {
  Button,
  Container,
  Grid,
  MobileStepper,
  Paper,
  Typography,
} from "@mui/material";
import { Box } from "@mui/system";
import { useState } from "react";
import theme from "src/styles/theme";
import SwipeableViews from "react-swipeable-views";
import { autoPlay } from "react-swipeable-views-utils";
import FeatureBox from "./FeatureBox";
import {
  Step1Icon,
  Step2Icon,
  Step3Icon,
  Step4Icon,
  Step5Icon,
  Step6Icon,
} from "./stepsSvgs";

const features = [
  {
    label: "Commercial Areas",
    description: "DowntownMakadi Heights Mall",
    imgPath:
      "https://images.unsplash.com/photo-1537944434965-cf4679d1a598?auto=format&fit=crop&w=400&h=250&q=60",
    icon: <Step1Icon />,
  },
  {
    label: "Sports Facilities",
    description: "Sports Courts, Fitness CenterWater Sports Activities",
    imgPath:
      "https://images.unsplash.com/photo-1538032746644-0212e812a9e7?auto=format&fit=crop&w=400&h=250&q=60",
    icon: <Step2Icon />,
  },
  {
    label: "Kids Friendly Areas",
    description: "Kids Aqua Park Kids Areas",
    imgPath:
      "https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=400&h=250&q=80",
    icon: <Step3Icon />,
  },
  {
    label: "Central Park",
    description: "Far far away, behind the word mountains",
    imgPath:
      "https://images.unsplash.com/photo-1512341689857-198e7e2f3ca8?auto=format&fit=crop&w=400&h=250&q=60",
    icon: <Step4Icon />,
  },
  {
    label: "Hotels",
    description: "Far far away, behind the word mountains",
    imgPath:
      "https://images.unsplash.com/photo-1516733725897-1aa73b87c8e8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=250&q=60",
    icon: <Step5Icon />,
  },
  {
    label: "Medical Facilities",
    description: "Far far away, behind the word mountains",
    imgPath:
      "https://images.unsplash.com/photo-1512341689857-198e7e2f3ca8?auto=format&fit=crop&w=400&h=250&q=60",
    icon: <Step6Icon />,
  },
];
const Features = () => {
  const [activeStep, setActiveStep] = useState(0);
  const maxSteps = features.length;

  const handleStepChange = (step: number) => {
    setActiveStep(step);
  };

  return (
    <Box sx={{ color: "#21436E", py: 8 }}>
      <Container maxWidth="xl">
        <Grid container>
          <Grid item xs={12} lg={6}>
            <Box sx={{ mb: 2 }}>
              <Typography variant="h3" sx={{ fontWeight: "normal" }}>
                Discover Lifestyle
              </Typography>
              <Typography
                variant="h2"
                sx={{ fontWeight: "normal", fontSize: 90 }}
              >
                Amentities
              </Typography>
              <Typography component="p" sx={{ lineHeight: 2 }}>
                Occupying a land area of 33,000 square meters, Makadi Heights’
                stunning clubhouse
              </Typography>
            </Box>
            <Grid container>
              {features.map((feature, index) => (
                <Grid item xs={12} sm={6} key={feature.label}>
                  <FeatureBox
                    data={feature}
                    activeStep={activeStep}
                    index={index}
                    handleStepChange={handleStepChange}
                  />
                </Grid>
              ))}
            </Grid>
          </Grid>
          <Grid item xs={12} lg={6} sx={{ alignItems: "center" }}>
            <Box sx={{ flexGrow: 1, mt: 20 }}>
              <SwipeableViews
                axis={theme.direction === "rtl" ? "x-reverse" : "x"}
                index={activeStep}
                onChangeIndex={handleStepChange}
                enableMouseEvents
              >
                {features.map((step, index) => (
                  <div key={step.label}>
                    {Math.abs(activeStep - index) <= 2 ? (
                      <Box
                        component="img"
                        sx={{
                          height: 355,
                          display: "block",
                          overflow: "hidden",
                          width: "100%",
                        }}
                        src={step.imgPath}
                        alt={step.label}
                      />
                    ) : null}
                  </div>
                ))}
              </SwipeableViews>
              <MobileStepper
                sx={{ justifyContent: "center" }}
                steps={maxSteps}
                position="static"
                activeStep={activeStep}
                nextButton={null}
                backButton={null}
              />
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Features;
