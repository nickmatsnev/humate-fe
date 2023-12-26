import * as React from "react";
import Link from "@mui/material/Link";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import VisibilityIcon from '@mui/icons-material/Visibility';
import DeleteIcon from '@mui/icons-material/Delete';

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
  createData(0, "16 Mar, 2019", "Elvis Presley", "Tupelo, MS", "Musiker", "Description"),
  createData(1, "16 Mar, 2019", "Paul McCartney", "London, UK", "Dishwasher", "Description"),
  createData(2, "16 Mar, 2019", "Tom Scholz", "Boston, MA", "Datenschutz Arbeiter", "Description"),
  createData(3, "16 Mar, 2019", "Michael Jackson", "Gary, IN", "Pracovnik kadernictvi", "Description"),
  createData(4, "15 Mar, 2019", "Bruce Springsteen", "Long Branch, NJ", "Software Engineer", "Description"),
];

function preventDefault(event: React.MouseEvent) {
  event.preventDefault();
}

export default function Jobs() {
  // Function to handle the view action
  const handleView = (id: number) => {
    // Implement view functionality here
    console.log("View item id:", id);
  };

  // Function to handle the delete action
  const handleDelete = (id: number) => {
    // Implement delete functionality here
    console.log("Delete item id:", id);
  };

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
            <TableCell>View</TableCell>
            <TableCell>Delete</TableCell>
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
              <TableCell>
                <IconButton onClick={() => handleView(row.id)} color="primary">
                  <VisibilityIcon />
                </IconButton>
              </TableCell>
              <TableCell>
                <IconButton onClick={() => handleDelete(row.id)} color="secondary">
                  <DeleteIcon />
                </IconButton>
              </TableCell>
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
