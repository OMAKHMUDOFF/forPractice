import React from "react";
import { useDispatch, useSelector } from "react-redux";
import sadCart from "../assets/img/sadCart.png";
import ButtonUi from "../components/UI/ButtonUi";
import EmptyUi from "../components/UI/EmptyUi";
import TitleNavigation from "../components/UI/TitleNavigationUI";
import { countDec, countIn, delGoods } from "../redux/action/TotalAction";
import { TbTrashX } from "react-icons/tb";

function GoodsCart() {
  let { cart } = useSelector((state) => state.TotalRedux);
  let dispatch = useDispatch();

  return (
    <div className="goods-cart-page">
      <TitleNavigation
        path={"/cart"}
        pathName={"Корзина товаров"}
        title={"Корзина товаров"}
      />
      {cart.length > 0 ? (
        <div className="main-cart-page">
          <div className="left-cart-goods">
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
                    Добавьте в корзину товаров на <span>3 433 ₽</span> и
                    получите скидку 7%
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
            <div className="goods-table">
              <table>
                <thead>
                  <tr>
                    <th>Товар</th>
                    <th>Цена</th>
                    <th>Количество</th>
                    <th colSpan={2}>Сумма</th>
                  </tr>
                </thead>
                <tbody>
                  {cart.map((elem) => (
                    <tr key={elem.id}>
                      <td>
                        <div className="goods-img">
                          <img src={elem.img} alt={elem.prodName} />
                        </div>
                        <div className="table-prodName-art">
                          <p>{elem.prodName}</p>
                          <span>Артикул:{elem.art}</span>
                        </div>
                      </td>
                      <td>
                        <div className="table-goods-price">
                          {elem.disc > 0 ? (
                            <>
                              <p>
                                {parseInt(
                                  elem.price - (elem.price / 100) * elem.disc
                                )}{" "}
                                ₽
                              </p>
                              <del>{elem.price} ₽</del>
                            </>
                          ) : (
                            <>
                              <p>{elem.price} ₽</p>
                            </>
                          )}
                        </div>
                      </td>
                      <td className="table-count-actions">
                        <div>
                          <div className="decrement-button">
                            <button onClick={() => dispatch(countDec(elem))}>
                              -
                            </button>
                          </div>
                          <div className="goods-count">
                            <p>{elem.count}</p>
                          </div>
                          <div className="increment-button">
                            <button onClick={() => dispatch(countIn(elem))}>
                              +
                            </button>
                          </div>
                        </div>
                      </td>
                      <td>
                        <div className="table-goods-price">
                          <p>
                            {elem.disc > 0
                              ? parseInt(
                                  elem.price - (elem.price / 100) * elem.disc
                                ) * elem.count
                              : elem.price * elem.count}{" "}
                            ₽
                          </p>
                        </div>
                      </td>
                      <td>
                        <button
                          onClick={() => dispatch(delGoods(elem.id))}
                          style={{ background: "none" }}
                        >
                          <TbTrashX color="#ADADAD" size={"20px"}/>
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
          <div className="goods-total-price">
            <div className="total-price-title">
              <h4>Итого</h4>
            </div>
            <div className="promo-disc">
              <p>Скидка по промокоду</p>
              <span>0 ₽</span>
            </div>
            <div className="total-price-disc">
              <p>Скидка от суммы заказа</p>
              <span>0 ₽</span>
            </div>
            <div className="total-price-sum">
              <p>Сумма</p>
              <span>0 ₽</span>
            </div>
            <div className="promo-input">
              <input type="text" placeholder="Промокод" />
              <ButtonUi
                title={"Применить промокод"}
                variant={"primary"}
                fz={15}
                fw={550}
                pad={"25px"}
                br={"8px"}
              />
            </div>
            <div className="go-to-checkout">
              <ButtonUi
                br={"8px"}
                fw={700}
                fz={13}
                pad={"25px"}
                title={"Перейти к оформлению"}
                variant={"secondary"}
              />
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
