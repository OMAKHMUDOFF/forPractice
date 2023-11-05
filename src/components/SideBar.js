import { Box, Slider } from "@mui/material";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { BsChevronUp, BsChevronDown } from "react-icons/bs";
import { changeFiltersBool } from "../redux/action/GoodsAction";

function SideBar() {
  let state = useSelector((state) => state.GoodsRedux);
  let dispatch = useDispatch();
  let { isOpenPrice } = state;

  const [value, setValue] = useState([0, 52000]);
  const valueSet = (e, i) => {
    setValue(
      value.map((elem, idex) => (idex === i ? (elem = +e.target.value) : elem))
    );
  };

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  //   <Box sx={{ width: 300 }}>
  //   <Slider
  //     value={value}
  //     onChange={handleChange}
  //     valueLabelDisplay="auto"
  //     min={3000}
  //     max={100000}
  //   />
  // </Box>

  return (
    <div className="sidebar-filter">
      <div className="filter-subtitle">
        <h4>Цена, ₽</h4>
        <button onClick={() => dispatch(changeFiltersBool("isOpenPrice"))}>
          {isOpenPrice ? <BsChevronUp /> : <BsChevronDown />}
        </button>
      </div>
      <div
        className={isOpenPrice ? "opened-price-filter" : "closed-price-filter"}
      >
        <div style={{ minHeight: 0 }}>
          <div className="from-to-inputs">
            <div className="from-to-first">
              <p>от</p>
              <input
                type="number"
                onChange={(e) => valueSet(e, 0)}
                value={value[0]}
              />
            </div>
            <div className="from-to-second">
              <p>до</p>
              <input
                type="number"
                onChange={(e) => valueSet(e, 1)}
                value={value[1]}
              />
            </div>
          </div>
          <Box sx={{ width: 300 }}>
            <Slider
              value={value}
              onChange={handleChange}
              valueLabelDisplay="auto"
              min={0}
              max={1000000}
            />
          </Box>
        </div>
      </div>
    </div>
  );
}

export default SideBar;
