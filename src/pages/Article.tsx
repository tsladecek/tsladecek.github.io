import React from "react";
import { Redirect, useParams } from "react-router-dom";
import PageContainer from "../components/PageContainer";
import { Typography } from "@mui/material";
import { articles } from "../components/articlesMetadata";

type Props = {};

type UrlParams = {
  articleName: string;
};

const Article = (props: Props) => {
  const articleName = useParams<UrlParams>().articleName;

  const article = articles.filter((a) => a.key === articleName)[0];

  return (
    <>
      {article ? (
        <PageContainer>
          <Typography variant="h4" sx={{ textAlign: "center" }}>
            {article.title}
          </Typography>
          <Typography variant="body2" sx={{ textAlign: "center" }}>
            {article.date.toLocaleDateString()}
          </Typography>
          <Typography variant="h6" sx={{ textAlign: "center" }}>
            Abstract
          </Typography>
          <Typography variant="body2" sx={{ textAlign: "center" }}>
            {article.abstract}
          </Typography>
          {article.publicationLink && (
            <Typography sx={{ textAlign: "center" }}>
              <a href={article.publicationLink}>Publication Link</a>
            </Typography>
          )}
          {<article.content />}
        </PageContainer>
      ) : (
        <Redirect to="/blog" />
      )}
    </>
  );
};

export default Article;
