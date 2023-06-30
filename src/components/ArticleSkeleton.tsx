import { Typography } from "@mui/material";
import React from "react";

type Props = {
  children: string;
};

const ArticleBody = (props: Props) => {
  return <Typography sx={{ textAlign: "justify" }}>{props.children}</Typography>;
};

export default ArticleBody;

export const ArticleSection = (props: Props) => {
  return <Typography variant="h5">{props.children}</Typography>;
};

export const ArticleSubSection = (props: Props) => {
  return <Typography variant="h6">{props.children}</Typography>;
};
