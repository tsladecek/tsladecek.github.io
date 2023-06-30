import { Box, Typography } from "@mui/material";
import React from "react";

type BodyProps = {
  children: string;
};

type SectionProps = {
  title: string;
  children: React.ReactNode;
};

const ArticleBody = (props: BodyProps) => {
  return (
    <Typography sx={{ textAlign: "justify" }}>{props.children}</Typography>
  );
};

export default ArticleBody;

export const ArticleSection = (props: SectionProps) => {
  return (
    <>
      <Typography variant="h5" paddingTop={2}>
        {props.title}
      </Typography>
      <Box pl={1}>{props.children}</Box>
    </>
  );
};

export const ArticleSubSection = (props: SectionProps) => {
  return (
    <>
      <Typography variant="h6" paddingTop={1}>
        {props.title}
      </Typography>
      <Box pl={1}>{props.children}</Box>
    </>
  );
};
