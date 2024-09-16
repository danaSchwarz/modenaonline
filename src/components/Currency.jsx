import { AppContext } from "../pages/AppContext";
import { useContext, useState, useEffect } from "react";
import { Select, FormControl, MenuItem, InputLabel, Box } from '@mui/material';
import { getCurrency } from "../api/CurrencyAPI.js";

export default function Currency() {
  const context = useContext(AppContext);
  const [labelValue, setLableValue] = useState("USD");

  useEffect(() => {
    getCurrency(context.currency)
      .then(rate => context.setRate(rate))
      .catch(e => console.log("Coulnt get the currency. Error:", e));
  }, [context.currency]);

  function handleCurrencyChange(event) {
    setLableValue(event.target.value);

    if (event.target.value === "EUR") {
      context.setCurrency("€");
    } else {
      context.setCurrency("$")
    }
  }

  return (
    <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Currency</InputLabel>
        <Select
          size="small"
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={labelValue}
          label="Currency"
          onChange={handleCurrencyChange}
        >
          <MenuItem value="USD">USD</MenuItem>
          <MenuItem value="EUR">EUR</MenuItem>
        </Select>
      </FormControl>
    </Box>
  )
}