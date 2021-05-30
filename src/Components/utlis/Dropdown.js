import React from "react";
import "./Dropdown.css";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
function Dropdown({ sort, setSort }) {
  return (
    <FormControl variant="outlined">
      <InputLabel id="demo-simple-select-outlined-label">Select</InputLabel>
      <Select
        labelId="demo-simple-select-outlined-label"
        id="demo-simple-select-outlined"
        value={sort}
        onChange={(e) => {
          setSort(e.target.value);
        }}
      >
        <MenuItem value={"default"}>Default sorting</MenuItem>
        <MenuItem value={"lowToHigh"}>Price Low to High</MenuItem>
        <MenuItem value={"highToLow"}>Price High to low</MenuItem>
      </Select>
    </FormControl>
  );
}

export default Dropdown;
