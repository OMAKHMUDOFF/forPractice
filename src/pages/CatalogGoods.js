import React from "react";
import { useSelector } from "react-redux";
import SideBar from "../components/SideBar";
import CardUi from "../components/UI/CardUi";
import DiscInfoUi from "../components/UI/DiscInfoUi"; 
import TitleNavigation from "../components/UI/TitleNavigationUI";
import { Pagination, Stack } from "@mui/material";

function CatalogGoods() {
  let totalState = useSelector((state) => state.TotalRedux);
  let { goodsArr } = totalState;
  return (
    <div className="catalogGoods">
      <TitleNavigation
        path={"/catalogGoods"}
        pathName={"Электроинструмент"}
        title={"Электроинструмент"}
      />
      <div className="sidebar-rightSide">
        <div className="sidebar-discInfo">
          <SideBar />
          <DiscInfoUi />
        </div>
        <div className="rightSide">
          <div className="sort-filtersMap">
            <h2>Sort func</h2>
            <h2>Filters map</h2>
          </div>
          <div className="goods-cards">
            {goodsArr?.map((elem) => {
              return (
                <div className="goods-card" key={elem.id}>
                  <CardUi elem={elem} />
                </div>
              );
            })}
          </div>
          <Stack spacing={2}>
            <Pagination count={10} variant="outlined" shape="rounded" />
          </Stack>
        </div>
      </div>
    </div>
  );
}

export default CatalogGoods;

//comments
/* <div className="goods-prod-img">
                  <img src={elem.img} alt={elem.prodName} />
                </div>
                {elem.hit && (
                  <div className="bestTitle">
                    <span>Хит</span>
                  </div>
                )}
                <div className="goods-articul">
                  <span>Артикул: {elem.art}</span>
                </div>
                <div className="goods-prodName">
                  <h4>{elem.prodName}</h4>
                </div>
                {elem.disc > 0 ? (
                  <div className="goods-prod-price">
                    <span>
                      <del>{elem.price} ₽</del>
                      {parseInt(elem.price - (elem.price / 100) * elem.disc)}₽
                    </span>
                    <div className="goods-prod-disc">
                      <span>-{elem.disc}%</span>
                    </div>
                  </div>
                ) : (
                  <div className="goods-prod-price">
                    <span>{elem.price} ₽</span>
                  </div>
                )}
                <div className="goods-card-btns">
                  <div className="cart-btn">
                    <button>
                      <HiOutlineShoppingCart />
                      Купить
                    </button>
                  </div>
                  <div className="like-cart-btn">
                    <button onClick={() => dispatch(setTotalLike(elem))}>
                      {elem.like ? <AiFillHeart /> : <AiOutlineHeart />}
                    </button>
                    <button>
                      <FiBarChart2 />
                    </button>
                  </div>
                </div> */
