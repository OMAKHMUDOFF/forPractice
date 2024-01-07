import React, { useEffect, useRef, useState } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
// Import Swiper styles
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./singleProdstyle/singleprod.css";
import Slider from "react-slick";

import { IoIosArrowDown } from "react-icons/io";
import { BsBox2Fill, BsCreditCard2Front } from "react-icons/bs";
import { TbDiscount } from "react-icons/tb";
import { FaRegAddressCard } from "react-icons/fa";

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
      <div className="singleSliders">
        <div className="topSingle">
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
                  <img src={el} />
                </figure>
              );
            })}
          </Slider>
          <button onClick={() => slider2.current.slickNext()}>
            <IoIosArrowDown />
          </button>
        </div>
        <div className="botSingle">
          <Slider asNavFor={nav2} ref={slider1} arrows={false} vertical={true}>
            {images?.map((el, index) => {
              return (
                <figure key={index}>
                  <img src={el} />
                </figure>
              );
            })}
          </Slider>
        </div>
        <div className="fullmalumot">
          <div className="pagesFull">
            <p>Тип товара</p>
            <b>{product.category}</b>
          </div>
          <div className="pagesFull-imya">
            <p>Имя</p>
            <b>{product.prodName}</b>
          </div>
          <div className="pagesFull">
            <p>Бренд</p>
            <b>{product.brand}</b>
          </div>
          <div className="pagesFull">
            <p>Цвет</p>
            <b>{product.color}</b>
          </div>
          <b className="bolshe">Больше характеристик</b>
          <div className="tolov-s">
            <div className="t-usuli">
              <BsCreditCard2Front className="kok-icons" />
              <b>Оплата любым удобным способом</b>
            </div>
            <div className="t-usuli">
              <FaRegAddressCard className="kok-icons" />
              <b>Большой выбор товаров в каталоге</b>
            </div>
            <div className="t-usuli">
              <BsBox2Fill className="kok-icons" />
              <b>Осуществляем быструю доставку</b>
            </div>
            <div className="t-usuli">
              <TbDiscount className="kok-icons" />
              <b>Делаем скидки на крупные покупки</b>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default SingleProduct;
