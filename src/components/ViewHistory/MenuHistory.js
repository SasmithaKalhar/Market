import React, { useState, useEffect } from "react";
import { useStyles } from "./classes";
import Paper from "@material-ui/core/Paper";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TablePagination from "@material-ui/core/TablePagination";
import TableRow from "@material-ui/core/TableRow";
import { useHistory } from "react-router-dom";
import * as api from "../../api/index.js";

const MenuHistory = () => {
  const classes = useStyles();
  let history = useHistory();
  const columns = [
    { id: "JAN", label: "JAN", minWidth: 50 },
    { id: "FEB", label: "FEB", minWidth: 50 },
    { id: "MAR", label: "MAR", minWidth: 50 },
    { id: "APR", label: "APR", minWidth: 50 },
    { id: "MAY", label: "MAY", minWidth: 50 },
    { id: "JUN", label: "JUN", minWidth: 50 },
  ];

  // const [rows, setRows] = useState([]);

  const rows = [
    {
      JAN: "250",
      FEB: "300",
      MAR: "420",
      APR: "100",
      MAY: "50",
      JUN: "130",
    },
  ];
  // setRows(data);

  const resPush = (id) => {
    history.push(`/restaurant/${id}/search`);
  };

  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(9);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  return (
    <Paper className={classes.paper}>
      <TableContainer className={classes.container}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              {columns.map((column) => (
                <TableCell
                  className={classes.cell}
                  key={column.id}
                  align={column.align}
                  style={{ minWidth: column.minWidth }}
                >
                  {column.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {rows
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((row) => {
                return (
                  <TableRow
                    hover
                    role="checkbox"
                    tabIndex={-1}
                    key={row.code}
                    onClick={() => resPush(row.restaurantId)}
                  >
                    {columns.map((column) => {
                      const value = row[column.id];
                      return (
                        <TableCell
                          key={column.id}
                          align={column.align}
                          className={classes.cellText}
                        >
                          {/* <Moment parse="YYYY-MM-DD"> */}
                          {column.format && typeof value === "number"
                            ? column.format(value)
                            : value}
                          {/* </Moment> */}
                        </TableCell>
                      );
                    })}
                  </TableRow>
                );
              })}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[10, 25, 100]}
        component="div"
        count={rows.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onChangePage={handleChangePage}
        onChangeRowsPerPage={handleChangeRowsPerPage}
      />
    </Paper>
  );
};

export default MenuHistory;
