import { Box, Slider } from "@mui/material";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { BsChevronUp, BsChevronDown } from "react-icons/bs";
import { changeFiltersBool, setCheckBool } from "../redux/action/GoodsAction";

function SideBar() {
  let state = useSelector((state) => state.GoodsRedux);
  let dispatch = useDispatch();
  let { isOpenPrice, isOpenGoods, goodsTypeArr } = state;

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
    <div className="sidebar-filter" style={{ gap: isOpenPrice ? "40px" : "0" }}>
      <div className="price-filter">
        <div className="filter-subtitle">
          <h4>Цена, ₽</h4>
          <button onClick={() => dispatch(changeFiltersBool("isOpenPrice"))}>
            {isOpenPrice ? <BsChevronUp /> : <BsChevronDown />}
          </button>
        </div>
        <div
          className={
            isOpenPrice ? "opened-price-filter" : "closed-price-filter"
          }
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
                max={500000}
              />
            </Box>
          </div>
        </div>
      </div>
      <div className="goods-filter">
        <div className="filter-subtitle">
          <h4>Тип товара</h4>
          <button onClick={() => dispatch(changeFiltersBool("isOpenGoods"))}>
            {isOpenGoods ? <BsChevronUp /> : <BsChevronDown />}
          </button>
        </div>
        <div
          className={
            isOpenGoods ? "opened-goods-filter" : "closed-goods-filter"
          }
        >
          <div style={{ minHeight: 0 }}>
            {goodsTypeArr.map((elem, i) => {
              return (
                <div className="checkbox-goods-type" key={i}>
                  {elem.bool ? (
                    <input type="checkbox" checked />
                  ) : (
                    <input type="checkbox" />
                  )}
                  <p onClick={() => dispatch(setCheckBool(elem))}>
                    {elem.title}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default SideBar;
