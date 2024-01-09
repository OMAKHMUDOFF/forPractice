import React, { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
// Import Swiper styles
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import "./singleProdstyle/singleprod.css";

import { BsBox2Fill, BsCreditCard2Front } from "react-icons/bs";
import { FaHeart, FaRegAddressCard, FaRegHeart } from "react-icons/fa";
import { FaCheck } from "react-icons/fa6";
import { IoIosArrowDown } from "react-icons/io";
import { TbDiscount } from "react-icons/tb";
import TitleNavigation from "../components/UI/TitleNavigationUI";
import {
  setTotalCart,
  setTotalLike,
  singleCountDec,
  singleCountIn,
} from "../redux/action/TotalAction";
import ButtonUi from "../components/UI/ButtonUi";
import { FiBarChart2 } from "react-icons/fi";

function SingleProduct() {
  const [nav1, setNav1] = useState(null);
  const [nav2, setNav2] = useState(null);
  const slider1 = useRef(null);
  const slider2 = useRef(null);

  useEffect(() => {
    setNav1(slider1.current);
    setNav2(slider2.current);
  }, []);

  let prodID = useParams();
  let { bestSellers, bestOffers, goodsArr } = useSelector(
    (state) => state.TotalRedux
  );
  let singleData = [...bestOffers, ...bestSellers, ...goodsArr];
  let product = singleData.filter((elem) => elem?.id === +prodID?.id)?.[0];
  const { images } = product;
  const dispatch = useDispatch();
  console.log(images);

  return (
    <section className="SingleProduct">
      <TitleNavigation
        path={"/catalogGoods/:id/:art"}
        pathName={"Электроинструмент"}
        title={product.prodName}
      />
      <div className="singleSliders">
        <div className="leftSingle">
          <Slider
            asNavFor={nav1}
            ref={slider2}
            slidesToShow={5}
            swipeToSlide={true}
            arrows={false}
            vertical={true}
          >
            {images?.map((el, index) => {
              return (
                <figure key={index}>
                  <img src={el} alt="" />
                </figure>
              );
            })}
          </Slider>
          <button onClick={() => slider2.current.slickNext()}>
            <IoIosArrowDown />
          </button>
        </div>
        <div className="rightSingle">
          <Slider asNavFor={nav2} ref={slider1} arrows={false} vertical={true}>
            {images?.map((el, index) => {
              return (
                <figure key={index}>
                  <img src={el} alt="" />
                </figure>
              );
            })}
          </Slider>
        </div>
        <div className="fullInfo">
          <div className="topFullInfo">
            <div className="prodInfo">
              <p>Тип товара</p>
              <p>{product.category}</p>
            </div>
            <div className="prodNameInfo">
              <p>Имя</p>
              <p>{product.prodName}</p>
            </div>
            <div className="prodInfo">
              <p>Бренд</p>
              <p>{product.brand}</p>
            </div>
            <div className="prodInfo">
              <p>Цвет</p>
              <p>{product.color}</p>
            </div>
          </div>
          <b className="moreInfo">Больше характеристик</b>
          <div className="paymentInfo">
            <div className="paymentMethods">
              <BsCreditCard2Front
                className="payment-icon"
                style={{ strokeWidth: "1.6px", stroke: "#9BA4AB" }}
              />
              <p>Оплата любым удобным способом</p>
            </div>
            <div className="moreInCatalogInfo">
              <FaRegAddressCard className="moreInCatalog" />
              <p>Большой выбор товаров в каталоге</p>
            </div>
            <div className="fastDeliveryInfo">
              <BsBox2Fill className="fastDelivery" />
              <p>Осуществляем быструю доставку</p>
            </div>
            <div className="largePurchaseInfo">
              <TbDiscount
                className="discountLargePurchases"
                style={{ strokeWidth: "1.6px", stroke: "#9BA4AB" }}
              />
              <p>Делаем скидки на крупные покупки</p>
            </div>
          </div>
        </div>
        <div className="buy_addCart">
          <div className="productArt">
            <p>Артикул: {product.art}</p>
          </div>
          <div className="inStock">
            <p>
              <FaCheck style={{ color: "#1B9665" }} /> В наличии
            </p>
          </div>
          <div className="productDiscPrice">
            <div className="discPrice">
              <p>{product.price - (product.price / 100) * product.disc} ₽</p>
            </div>
            <div className="withoutDiscPrice">
              <del>{product.price} ₽</del>
            </div>
            <div className="discPercentage">
              <p>-{product.disc}%</p>
            </div>
          </div>
          <div className="countToBuy">
            <p className="countTitle">Количество: </p>
            <div className="count_decr_incr">
              <button onClick={() => dispatch(singleCountDec(product))}>
                -
              </button>
              <p>{product.count}</p>
              <button onClick={() => dispatch(singleCountIn(product))}>
                +
              </button>
            </div>
          </div>
          <div className="addToCart">
            <ButtonUi
              action={() => dispatch(setTotalCart(product))}
              title={"Добавить в корзину"}
              variant={"secondary"}
              fw={700}
              fz={13}
              br={"8px"}
              pad={"24px 73px"}
            />
          </div>
          <div className="buyOneClick">
            <ButtonUi
              title={"Купить в 1 клик"}
              variant={"primary"}
              fw={550}
              fz={15}
              br={"8px"}
              pad={"24px 79px"}
            />
          </div>

          <div className="compareAddFav">
            <div className="addFav_BTN">
              <button onClick={() => dispatch(setTotalLike(product))}>
                {product.like ? <FaHeart /> : <FaRegHeart />}
              </button>
              <p>в Избранное</p>
            </div>
            <div className="compareBtn">
              <button>
                <FiBarChart2 />
              </button>
              <p>Сравнить</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default SingleProduct;
