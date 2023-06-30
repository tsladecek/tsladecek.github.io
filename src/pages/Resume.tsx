import React from "react";
import PageContainer from "../components/PageContainer";
import { Stack, Typography } from "@mui/material";
import ResumeSection from "../components/ResumeSection";
import ResumeSubSection from "../components/ResumeSubSection";
import PersonalInfo from "../components/PersonalInfo";
import ResumeListItem from "../components/ResumeListItem";

type Props = {};

const Resume = (props: Props) => {
  return (
    <PageContainer>
      <Typography variant="h4" sx={{ textAlign: "center" }}>
        Resume
      </Typography>

      <Stack spacing={2} pt={1}>
        <ResumeSection title="Personal Info">
          <PersonalInfo />
        </ResumeSection>
        <ResumeSection title="About me">
          Full-stack software developer with interest in endurance sports
        </ResumeSection>
        <ResumeSection title="Experience">
          <ResumeSubSection title="Geneton Ltd., 08/2020 - present">
            <ul>
              <ResumeListItem>
                Automated deployment of applications to AWS where I came in
                contact with Elastic Beanstalk, S3, EBS, RDS, Cognito
              </ResumeListItem>
              <ResumeListItem>
                Full stack development of a service for automated collection,
                monitoring and evaluation of positive covid samples. I was the
                designer and main software developer of the frontend and backend
                part of the project. Recently, we have been working on extending
                the application to accomodate diseases of any kind. We broke up
                the original monolith into microservices with one frontend app
                (React) and many backends (combination of FastAPI and simple
                rabbitmq consumers). I was the lead devops developer, and
                managed to automate the entire process using on prem cluster
                with kubernetes and gitlab.
              </ResumeListItem>
              <ResumeListItem>
                Research: Mainly regarding prediction of pathogenicity of CNVs.
                For all research see the google scholar link above
              </ResumeListItem>
            </ul>
          </ResumeSubSection>
        </ResumeSection>
        <ResumeSection title="Skills">
          <ResumeSubSection title="Programming Languages">
            Python, React, Javascript, Typescript, Bash
          </ResumeSubSection>
          <ResumeSubSection title="DevOps">
            GitLab, Kubernetes, Docker
          </ResumeSubSection>
        </ResumeSection>
        <ResumeSection title="Studies">
          <ResumeSubSection title="MSc. in Bioinformatics from Aarhus University, Denmark">
            <Stack>
              <Typography>
                Courses: Computational Thinking, Algorithms, Data Science,
                Machine Learning, Population and evoluationary genomics
              </Typography>
              <Stack direction="row">
                Thesis:
                <a href="https://drive.google.com/file/d/17fOFwYMzYEJJEuRwDFjIdjb2OPMvrph3/view?usp=sharing">
                  Protein Structure Prediction with Deep Neural Networks
                </a>
              </Stack>
            </Stack>
          </ResumeSubSection>
          <ResumeSubSection title="Bc. in Biomedical Physics from Comenius University">
            <Stack>
              <Typography>
                Math / Physics Courses: Calculus, Algebra, Mechanics,
                Electromagnetism, Optics, Nuclear physics, Quantum Mechanics
              </Typography>
              <Typography>
                Medical Courses: Anatomy, Physiology, Histology, Molecular
                Biology
              </Typography>
            </Stack>
          </ResumeSubSection>
        </ResumeSection>
      </Stack>
    </PageContainer>
  );
};

export default Resume;
