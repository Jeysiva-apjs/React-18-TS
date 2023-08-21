import Box from "@mui/material/Box";
import styles from "./Data.module.css";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import Table from "../Table";

const Data = () => {
  return (
    <div className="body">
      <Box sx={{ minWidth: 120 }}>
        <FormControl fullWidth>
          <InputLabel id="demo-simple-select-label" className={styles.textBox}>
            Category
          </InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            //value={age}
            label="Category"
            //onChange={handleChange}
            className={styles.textBox}
          >
            <MenuItem value={"All"}>All Categories</MenuItem>
            <MenuItem value={"Groceries"}>Groceries</MenuItem>
            <MenuItem value={"Utilities"}>Utilities</MenuItem>
            <MenuItem value={"Entertainment"}>Entertainment</MenuItem>
          </Select>
        </FormControl>
      </Box>
      <Table></Table>
    </div>
  );
};

export default Data;
