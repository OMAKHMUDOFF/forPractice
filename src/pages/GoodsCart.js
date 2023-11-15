import React from "react";
import { useSelector } from "react-redux";
import sadCart from "../assets/img/sadCart.png";
import EmptyUi from "../components/UI/EmptyUi";
import TitleNavigation from "../components/UI/TitleNavigationUI";

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
                <div className="fill-box"></div>
              </div>
              <div className="from-to-disc">
                <div className="from-money">
                  <p>3567 ₽</p>
                </div>
                <div className="to-money">
                  <p>7000 ₽</p>
                </div>
              </div>
            </div>
            <div className="your-disc-info">
              <div className="hmuch-for-disc">
                <p>
                  Добавьте в корзину товаров на <span>3 433 ₽</span> и получите
                  скидку 7%
                </p>
              </div>
              <div className="hover-disc-info">
                <div className="hover-box">
                  <p>Информация о скидках от суммы корзины</p>
                </div>
                <div className="hover-discounts">
                  <div className="hover-disc-title">
                    <p>Сейчас у нас действуют следующие пороги:</p>
                  </div>
                  <div className="discounts">
                    <div className="first-discount">
                      <p>
                        от <span>3 000₽</span> -
                      </p>
                      <span style={{ background: "#1b9665" }}>-5%</span>
                    </div>
                    <div className="sec-discount">
                      <p>
                        от <span>7 000₽</span> -
                      </p>
                      <span style={{ background: "#FF9900" }}>-10%</span>
                    </div>
                    <div className="third-discount">
                      <p>
                        от <span>20 000₽</span> -
                      </p>
                      <span style={{ background: "#EE063E" }}>-15%</span>
                    </div>
                  </div>
                  <div className="bottom-arrow"></div>
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
