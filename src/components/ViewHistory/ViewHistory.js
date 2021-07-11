import React from "react";
import { useStyles } from "./classes";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import MenuHistory from "./MenuHistory";
import DishHistory from "./DishHistory";

const ViewHistory = () => {
  const classes = useStyles();

  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
    console.log(value);
  };

  return (
    <div>
      <Paper className={classes.root}>
        <Tabs
          value={value}
          onChange={handleChange}
          indicatorColor="primary"
          textColor="primary"
        >
          <Tab label="First Half" />
          <Tab label="Second Half" />
        </Tabs>
      </Paper>
      {Number(value) === 0 ? <MenuHistory /> : <DishHistory />}
    </div>
  );
};

export default ViewHistory;
