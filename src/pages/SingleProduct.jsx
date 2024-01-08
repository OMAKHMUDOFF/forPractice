import React, { useEffect, useRef, useState } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
// Import Swiper styles
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import "./singleProdstyle/singleprod.css";

import { BsBox2Fill, BsCreditCard2Front } from "react-icons/bs";
import { FaRegAddressCard } from "react-icons/fa";
import { IoIosArrowDown } from "react-icons/io";
import { TbDiscount } from "react-icons/tb";
import TitleNavigation from "../components/UI/TitleNavigationUI";

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
            focusOnSelect={true}
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
      </div>
    </section>
  );
}

export default SingleProduct;
