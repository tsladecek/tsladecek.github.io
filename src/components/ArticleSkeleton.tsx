import { Box, Typography } from "@mui/material";
import React from "react";

type BodyProps = {
  children: any;
};

type SectionProps = {
  title: string;
  children: React.ReactNode;
};

type ImageProps = {
  src: string;
  alt: string;
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

export const ArticleImg = (props: ImageProps) => {
  return (
    <Box pl={1}>
      <img src={props.src} alt={props.alt}  style={{ width: '100%' }}/>
    </Box>
  );
};
