import * as React from "react";
import Link from "@mui/material/Link";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Typography from "@mui/material/Typography";

interface TitleProps {
  children?: React.ReactNode;
}

function Title(props: TitleProps) {
  return (
    <Typography component="h2" variant="h6" color="primary" gutterBottom>
      {props.children}
    </Typography>
  );
}

// Generate Order Data
function createData(
  id: number,
  date: string,
  name: string,
  place: string,
  jobPosition: string,
  description: string,
) {
  return { id, date, name, place, jobPosition, description };
}

const rows = [
  createData(
    0,
    "16 Mar, 2019",
    "Elvis Presley",
    "Tupelo, MS",
    "Musiker",
    "Description",
  ),
  createData(
    1,
    "16 Mar, 2019",
    "Paul McCartney",
    "London, UK",
    "Dishwasher",
    "Description",
  ),
  createData(
    2,
    "16 Mar, 2019",
    "Tom Scholz",
    "Boston, MA",
    "Datenschutz Arbeiter",
    "Description",
  ),
  createData(
    3,
    "16 Mar, 2019",
    "Michael Jackson",
    "Gary, IN",
    "Pracovnik kadernictvi",
    "Description",
  ),
  createData(
    4,
    "15 Mar, 2019",
    "Bruce Springsteen",
    "Long Branch, NJ",
    "Software Engineer",
    "Description",
  ),
];

function preventDefault(event: React.MouseEvent) {
  event.preventDefault();
}

export default function Jobs() {
  return (
    <React.Fragment>
      <Title>Declared positions</Title>
      <Table size="small">
        <TableHead>
          <TableRow>
            <TableCell>Date</TableCell>
            <TableCell>Name</TableCell>
            <TableCell>Place</TableCell>
            <TableCell>Job Position</TableCell>
            <TableCell>Description</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.id}>
              <TableCell>{row.date}</TableCell>
              <TableCell>{row.name}</TableCell>
              <TableCell>{row.place}</TableCell>
              <TableCell>{row.jobPosition}</TableCell>
              <TableCell>{row.description}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <Link color="primary" href="#" onClick={preventDefault} sx={{ mt: 3 }}>
        Add new job
      </Link>
    </React.Fragment>
  );
}
