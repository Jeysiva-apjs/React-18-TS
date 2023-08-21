import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import styles from "./Tracker.module.css";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Button from "@mui/material/Button";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import Data from "../Data";

const Tracker = () => {
  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    console.log("submited");
  };
  return (
    <>
      <div className={styles.body}>
        <TextField
          id="description"
          label="Description"
          variant="outlined"
          className={styles.textBox}
        />
        <TextField
          id="amount"
          label="Amount"
          variant="outlined"
          className={styles.textBox}
        />
        <Box sx={{ minWidth: 120 }}>
          <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">Category</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              //value={age}
              label="Category"
              //onChange={handleChange}
              className={styles.textBox}
            >
              <MenuItem value={"Groceries"}>Groceries</MenuItem>
              <MenuItem value={"Utilities"}>Utilities</MenuItem>
              <MenuItem value={"Entertainment"}>Entertainment</MenuItem>
            </Select>
          </FormControl>
        </Box>

        <Button variant="contained" onClick={handleSubmit}>
          Submit
        </Button>
        <Data></Data>
      </div>
    </>
  );
};

export default Tracker;
