import * as React from "react";
import TableContainer from "@mui/material/TableContainer";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import TableCell from "@mui/material/TableCell";
import TableBody from "@mui/material/TableBody";

function createData(
  id,
  timeStamp,
  date_of_attack,
  attack_type,
  severity,
  country,
  ip_adress,
  status
) {
  return {
    id,
    timeStamp,
    date_of_attack,
    attack_type,
    severity,
    country,
    ip_adress,
    status,
  };
}

const rows = [
  createData(
    1,
    "18:15",
    "01/06/2022",
    "SQL Injection",
    "Medium",
    "United States",
    "178.245.46.73",
    "Insecure"
  ),
  createData(
    2,
    "18:15",
    "01/06/2022",
    "SQL Injection",
    "High",
    "United States",
    "178.245.46.73",
    "Insecure"
  ),
  createData(
    3,
    "18:15",
    "01/06/2022",
    "SQL Injection",
    "Normal",
    "Turkey",
    "178.245.46.73",
    "Secure"
  ),
  createData(
    4,
    "18:15",
    "01/06/2022",
    "XSS Injection",
    "Low",
    "Turkey",
    "178.245.46.73",
    "Secure"
  ),
];

export default function SecurityActivityTable() {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple-table">
        <TableHead className="bg-light">
          <TableRow>
            <TableCell>TIME</TableCell>
            <TableCell align-center="center">DATE</TableCell>
            <TableCell align-center="center">ATTACK TYPE</TableCell>
            <TableCell align-center="center">SEVERITY</TableCell>
            <TableCell align-center="center">COUNTRY</TableCell>
            <TableCell align-center="center">IP ADDRESS</TableCell>
            <TableCell align-center="center">STATUS</TableCell>
          </TableRow>
        </TableHead>

        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.id}
              sx={{ "&:last-child,&:last-child th": { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.timeStamp}
              </TableCell>
              <TableCell>{row.date_of_attack}</TableCell>
              <TableCell>{row.attack_type}</TableCell>
              {row.severity === null && <TableCell></TableCell>}
              {row.severity === "Normal" && (
                <TableCell>
                  <span className="badge rounded-pill text-bg-success">
                    {row.severity}
                  </span>
                </TableCell>
              )}
              {row.severity === "Medium" && (
                <TableCell>
                  <span className="badge rounded-pill text-bg-warning">
                    {row.severity}
                  </span>
                </TableCell>
              )}
              {row.severity === "High" && (
                <TableCell>
                  <span className="badge rounded-pill text-bg-danger">
                    {row.severity}
                  </span>
                </TableCell>
              )}
              {row.severity === "Low" && (
                <TableCell>
                  <span className="badge rounded-pill text-bg-info">
                    {row.severity}
                  </span>
                </TableCell>
              )}

              <TableCell>{row.country}</TableCell>
              <TableCell>{row.ip_adress}</TableCell>
              {row.status === "Insecure" && (
                <TableCell className="text-danger">{row.status}</TableCell>
              )}
              {row.status === "Secure" && (
                <TableCell className="text-info">{row.status}</TableCell>
              )}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
