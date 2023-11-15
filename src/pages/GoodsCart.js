import React from "react";
import TitleNavigation from "../components/UI/TitleNavigationUI";
import { useSelector } from "react-redux";
import EmptyUi from "../components/UI/EmptyUi";
import sadCart from "../assets/img/sadCart.png";
import { Box, LinearProgress, Typography } from "@mui/material";

function GoodsCart(props) {
  let { cart } = useSelector((state) => state.TotalRedux);

  return (
    <div className="goods-cart-page">
      <TitleNavigation
        path={"/cart"}
        pathName={"Корзина товаров"}
        title={"Корзина товаров"}
      />
      {cart.length > 0 ? (
        <div className="main-cart-page">
          <div className="your-disc">
            <div className="your-disc-title">
              <p>
                Ваша скидка от суммы заказа: <span>0 ₽</span>
              </p>
            </div>
            <div className="fill-discount">
              <div className="fill-bg-box">
                <div className="fill-box">
                  
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <EmptyUi
          emptyTitle={"В вашей корзине пусто"}
          inTitle={"корзине"}
          img={sadCart}
        />
      )}
    </div>
  );
}

export default GoodsCart;
