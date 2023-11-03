// import { Box, Slider } from "@mui/material";
// import React, { useState } from "react";

function SideBar() {
  // const [value, setValue] = useState([3000, 52000]);

  // const handleChange = (event, newValue) => {
  //   setValue(newValue);
  // };
  //   <Box sx={{ width: 300 }}>
  //   <Slider
  //     value={value}
  //     onChange={handleChange}
  //     valueLabelDisplay="auto"
  //     min={3000}
  //     max={100000}
  //   />
  // </Box>
  return <div className="sidebar-filter">
    <div className="price-filter">
      <div className="filter-subtitle">
        <h4>Цена, ₽</h4>
      </div>
    </div>
  </div>;
}

export default SideBar;
