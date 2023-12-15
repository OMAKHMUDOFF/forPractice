import { Box, Slider } from "@mui/material";
import { BsChevronDown, BsChevronUp } from "react-icons/bs";
import { useDispatch, useSelector } from "react-redux";
import {
  changeFiltersBool,
  changePriceValue,
  getColorType,
  handleRangeValue,
  setBrandCategory,
  setCategory,
  setCheckBool,
} from "../../redux/action/GoodsAction";

function SideBar() {
  let state = useSelector((state) => state.GoodsRedux);
  let dispatch = useDispatch();
  let { isOpenPrice, isOpenGoods, isOpenBrand, isOpenMaterial, isOpenColor } =
    state;
  let { goodsTypeArr, brandArr, materialArr, colorArr, priceValue } = state;

  function categoryBool(elem, way) {
    switch (way) {
      case "Type":
        dispatch(setCheckBool(elem));
        dispatch(setCategory(elem));
        break;
      case "Brand":
        dispatch(setCheckBool(elem));
        dispatch(setBrandCategory(elem));
        break;
      default:
        dispatch(setCheckBool(elem));

        break;
    }
  }

  return (
    <aside className="sidebar-filter">
      <div
        className="price-filter"
        style={{
          marginBottom: isOpenPrice ? "40px" : "20px",
          transition: ".3s ",
        }}
      >
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
                  onChange={(e) =>
                    dispatch(changePriceValue({ ev: e, index: 0 }))
                  }
                  value={priceValue[0]}
                />
              </div>
              <div className="from-to-second">
                <p>до</p>
                <input
                  type="number"
                  onChange={(e) =>
                    dispatch(changePriceValue({ ev: e, index: 1 }))
                  }
                  value={priceValue[1]}
                />
              </div>
            </div>
            <Box sx={{ width: 300 }}>
              <Slider
                value={priceValue}
                onChange={(e) =>
                  dispatch(
                    handleRangeValue({ event: e, newValue: e.target.value })
                  )
                }
                valueLabelDisplay="auto"
                min={0}
                max={500000}
              />
            </Box>
          </div>
        </div>
      </div>
      <div
        className="goods-filter"
        style={{
          marginBottom: isOpenGoods ? "40px" : "20px",
          transition: ".3s ",
        }}
      >
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
                <div
                  className="checkbox-goods-type"
                  key={i}
                  onClick={() => categoryBool(elem, "Type")}
                >
                  <input
                    type="checkbox"
                    checked={elem.bool}
                    onChange={() => {}}
                  />
                  <p>{elem.title}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
      <div
        className="brand-filter"
        style={{
          marginBottom: isOpenBrand ? "40px" : "20px",
          transition: ".3s ",
        }}
      >
        <div className="filter-subtitle">
          <h4>Бренд</h4>
          <button onClick={() => dispatch(changeFiltersBool("isOpenBrand"))}>
            {isOpenBrand ? <BsChevronUp /> : <BsChevronDown />}
          </button>
        </div>
        <div
          className={
            isOpenBrand ? "opened-brand-filter" : "closed-brand-filter"
          }
        >
          <div style={{ minHeight: 0 }}>
            {brandArr.map((elem, i) => {
              return (
                <div
                  className="checkbox-brand-type"
                  key={i}
                  onClick={() => categoryBool(elem, "Brand")}
                >
                  <input
                    type="checkbox"
                    checked={elem.bool}
                    onChange={() => {}}
                  />
                  <p>{elem.title}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
      <div
        className="material-filter"
        style={{
          marginBottom: isOpenMaterial ? "40px" : "20px",
          transition: ".3s ",
        }}
      >
        <div className="filter-subtitle">
          <h4>Материал</h4>
          <button onClick={() => dispatch(changeFiltersBool("isOpenMaterial"))}>
            {isOpenMaterial ? <BsChevronUp /> : <BsChevronDown />}
          </button>
        </div>
        <div
          className={
            isOpenMaterial ? "opened-material-filter" : "closed-material-filter"
          }
        >
          <div style={{ minHeight: 0 }}>
            {materialArr.map((elem, i) => {
              return (
                <div
                  className="checkbox-brand-type"
                  key={i}
                  onClick={() => categoryBool(elem)}
                >
                  <input
                    type="checkbox"
                    checked={elem.bool}
                    onChange={() => {}}
                  />
                  <p>{elem.title}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
      <div
        className="color-filter"
        style={{
          marginBottom: isOpenColor ? "40px" : "20px",
          transition: ".3s ",
        }}
      >
        <div className="filter-subtitle">
          <h4>Цвет</h4>
          <button onClick={() => dispatch(changeFiltersBool("isOpenColor"))}>
            {isOpenColor ? <BsChevronUp /> : <BsChevronDown />}
          </button>
        </div>
        <div
          className={
            isOpenColor ? "opened-color-filter" : "closed-color-filter"
          }
        >
          <div style={{ minHeight: 0 }}>
            {colorArr.map((elem, i) => {
              return (
                <div
                  className="checkbox-brand-type"
                  key={i}
                  onClick={() => dispatch(getColorType(elem.color))}
                >
                  <div
                    className="color-view"
                    style={{ background: elem.translation }}
                  ></div>
                  <p>{elem.color}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </aside>
  );
}

export default SideBar;
