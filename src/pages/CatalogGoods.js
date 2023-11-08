import React from "react";
import SideBar from "../components/SideBar";
import { useSelector } from "react-redux";

function CatalogGoods() {
  let state = useSelector((state) => state.GoodsRedux);
  let { goods } = state;
  return (
    <div className="catalogGoods">
      <SideBar />
      <div className="goods-cards">
        {goods?.map((elem) => {
          return (
            <div className="goods-card" key={elem.id}>
              <img src={elem.img} alt={elem.prodName} title={elem.prodName} />
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default CatalogGoods;
