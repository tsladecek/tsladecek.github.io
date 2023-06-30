import { Box, IconButton, Table, TableBody, TableCell, TableRow } from "@mui/material";
import React from "react";
import SchoolIcon from '@mui/icons-material/School';
import GitHubIcon from '@mui/icons-material/GitHub';

type Props = {};

type RowProps = {
  title: string;
  children: React.ReactNode;
};

const PersonalInfoRow = (props: RowProps) => {
  return (
    <TableRow>
      <TableCell
        sx={{
          fontWeight: "bold",
          color: "inherit",
          textAlign: "end",
          borderBottom: "none"
        }}
        
      >
        {props.title}:
      </TableCell>
      <TableCell
        sx={{
          textAlign: "start",
          color: "inherit",
          borderBottom: "none"
        }}
      >
        {props.children}
      </TableCell>
    </TableRow>
  );
};

const PersonalInfo = (props: Props) => {
  return (
    <Box width={400}>
      <Table size="small">
        <TableBody>
          <PersonalInfoRow title="Name">Tomas Sladecek</PersonalInfoRow>
          <PersonalInfoRow title="Country">Slovakia</PersonalInfoRow>
          <PersonalInfoRow title="Social">
            <IconButton color="inherit" href="https://github.com/tsladecek" sx={{ pt:0, pb: 0 }}><GitHubIcon /></IconButton>
            <IconButton color="inherit" href="https://scholar.google.com/citations?user=HBF37bIAAAAJ&hl=en" sx={{ pt:0, pb: 0 }}><SchoolIcon /></IconButton>
          </PersonalInfoRow>
        </TableBody>
      </Table>
    </Box>
  );
};

export default PersonalInfo;
