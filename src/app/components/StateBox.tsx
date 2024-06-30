import React from "react";
import { Box, Typography, useTheme } from "@mui/material";
import FlexBetween from "./FlexBetween";

export interface StateBoxProps {
  title: string;
  value: string;
  increase: number;
  icon: React.ReactNode;
  description: string;
}

const StatBox = (props: StateBoxProps) => {
  const theme = useTheme();

  return (
    <Box
      component="section"
      display="flex"
      flexDirection="column"
      justifyContent="space-between"
      p="1rem"
      flex="1 1 100%"
      sx={{
        backgroundColor: "white",
        borderRadius: "8px", // Optional: Add a border-radius for rounded corners
        boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)", // Optional: Add shadow for depth
        aspectRatio: "1", // Maintain a 1:1 aspect ratio (square shape)
      }}
    >
      <FlexBetween>
        <Typography variant="h6">{props.title}</Typography>
        {props.icon}
      </FlexBetween>

      <Typography variant="h3" fontWeight="600">
        {props.value}
      </Typography>

      <FlexBetween gap="1rem">
        <Typography
          variant="h5"
          fontStyle="italic"
          sx={{ color: theme.palette.secondary.light }}
        >
          {props.increase}
        </Typography>
        <Typography>{props.description}</Typography>
      </FlexBetween>
    </Box>
  );
};

export default StatBox;
