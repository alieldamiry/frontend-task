import { Button, Typography } from "@mui/material";
import { Box } from "@mui/system";
import Image from "next/image";
import React from "react";

interface propTypes {
  index: number;
  activeStep: number;
  handleStepChange: (step: number) => void;
  data: any;
}
const FeatureBox = ({
  handleStepChange,
  index,
  activeStep,
  data,
}: propTypes) => {
  return (
    <Button
      sx={{
        textAlign: "center",
        mb: 10,
        display: "block",
        color: activeStep === index ? "#21436E" : "#268FB4",
      }}
      onClick={() => handleStepChange(index)}
    >
      {data.icon}
      <Typography variant="h5" sx={{ my: 1 }}>
        {data.label}
      </Typography>
      <Typography
        variant="h6"
        sx={{
          color: "#757575",
          fontWeight: "normal",
          textTransform: "capitalize",
        }}
      >
        {data.description}
      </Typography>
    </Button>
  );
};

export default FeatureBox;
