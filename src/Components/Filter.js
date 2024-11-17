import React from "react";
import { Select, MenuItem, FormControl, InputLabel, FormHelperText } from "@mui/material";

const StateFilter = ({ states, onStateChange }) => {
  const handleChange = (event) => {
    onStateChange(event.target.value); // Pass selected state to the parent component
  };

  return (
    <div>
      <FormControl variant="outlined" margin="normal" size="small" style={{ width: '200px' }}>
        <InputLabel>Select State</InputLabel>
        <Select
          onChange={handleChange}
          defaultValue=""
          label="Select State"
          size="small" // Keeps the select dropdown small
        >
          {states.map((state, index) => (
            <MenuItem key={index} value={state.name}>
              {state.name}
            </MenuItem>
          ))}
        </Select>
        <FormHelperText>Select a state from the list</FormHelperText>
      </FormControl>
    </div>
  );
};

export default StateFilter;
