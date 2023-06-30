import { Stack, Typography } from "@mui/material";
import React from "react";

type Props = {
  title: string;
  children: React.ReactNode
};

const ResumeSection = (props: Props) => {
  return (
    <>
      <Typography variant="h5">{props.title}</Typography>
      <Stack spacing={1} px={2}>{props.children}</Stack>
    </>
  );
};

export default ResumeSection;
