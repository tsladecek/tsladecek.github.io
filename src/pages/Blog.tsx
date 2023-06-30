import React from "react";
import PageContainer from "../components/PageContainer";
import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Stack,
  Typography
} from "@mui/material";
import { articles } from "../components/articlesMetadata";
import { useHistory } from "react-router-dom";

type Props = {};

const Blog = (props: Props) => {
  const history = useHistory();

  return (
    <PageContainer>
      <Stack spacing={2}>
        {articles.map((a) => {
          return (
            <Card key={a.key}>
              <CardActionArea onClick={() => history.push(`/article/${a.key}`)}>
                <CardMedia
                  component="img"
                  image={a.bannerPhotoLink}
                  alt={a.key}
                  height="100"
                />
                <CardContent>
                  <Typography variant="h5">{a.title}</Typography>
                  <Typography variant="body1">{a.abstract}</Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          );
        })}
      </Stack>
    </PageContainer>
  );
};

export default Blog;
