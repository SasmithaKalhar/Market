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
import axios from "axios";

const DishHistory = () => {
  const classes = useStyles();
  let history = useHistory();

  const columns = [
    { id: "view", label: "DATE", minWidth: 50 },
    { id: "resName", label: "RESTAURANT\u00a0NAME", minWidth: 50 },
    { id: "feed", label: "FEED", minWidth: 200 },
    { id: "delete", label: "DELETE", minWidth: 200 },
  ];

  const [rows, setRows] = useState([]);

  const fetchResults = async () => {
    try {
      const { data } = await axios.get("/feedback/get");
      setRows(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchResults();
    
  }, []);

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

export default DishHistory;
