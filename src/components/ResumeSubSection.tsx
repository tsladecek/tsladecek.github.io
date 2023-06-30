import { Typography } from "@mui/material";
import React from "react";

type Props = {
  title: string;
  children: React.ReactNode;
};

const ResumeSubSection = (props: Props) => {
  return (
    <>
      <Typography variant="h6">{props.title}</Typography>
      {props.children}
    </>
  );
};

export default ResumeSubSection;
