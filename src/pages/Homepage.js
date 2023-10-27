import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, A11y, Autoplay } from "swiper/modules";
import { HiOutlineShoppingCart } from "react-icons/hi";
import { FiChevronRight, FiBarChart2 } from "react-icons/fi";
import { TbCreditCard, TbBoxSeam } from "react-icons/tb";
import { RiListCheck2 } from "react-icons/ri";
import { CiPercent } from "react-icons/ci";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import slider1 from "../assets/img/mainSliderIMG/slider1.png";
import slider2 from "../assets/img/mainSliderIMG/slider2.png";
import bath from "../assets/img/homePage_IMG/image 12.png";
import materials from "../assets/img/homePage_IMG/out (1) 1.png";
import electrical from "../assets/img/homePage_IMG/vkluchatel.png";
import drell from "../assets/img/homePage_IMG/image 3.png";
import boards from "../assets/img/homePage_IMG/klipartz 1.png";
import const_materials from "../assets/img/homePage_IMG/pngegg 1.png";
import sauna_bath from "../assets/img/homePage_IMG/image 13.png";

import { useDispatch, useSelector } from "react-redux";
import { chooseCategory } from "../redux/action/HomeAction";

function Homepage() {
  let state = useSelector((state) => state.HomeRedux);
  let dispatch = useDispatch();
  let { discInfo, categories, setCategory, bestSellers } = state;

  return (
    <div className="homePage">
      <div className="mainSliders-Swiper">
        <Swiper
          modules={[Navigation, Pagination, A11y, Autoplay]}
          spaceBetween={0}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
          loop={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
        >
          <SwiperSlide>
            <img src={slider1} alt="first slider" />
            <div className="slider-text-btn">
              <h1>Электроинструмент для любых нужд</h1>
              <p>
                У нас обновился ассортимент сантехники, мебели для ванной
                комнаты, а так же других сопутствующих товаров.
              </p>
              <div className="gtp-btn">
                <button>
                  Перейти к товарам <FiChevronRight />
                </button>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <img src={slider2} alt="slider2" />
            <div className="slider-text-btn">
              <h1>Электроинструмент для любых нужд</h1>
              <p>
                У нас обновился ассортимент сантехники, мебели для ванной
                комнаты, а так же других сопутствующих товаров.
              </p>
              <div className="gtp-btn">
                <button>
                  Перейти к товарам <FiChevronRight />
                </button>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
      <div className="information-home">
        <div className="payment-way-home">
          <div className="i-icons">
            <TbCreditCard />
          </div>
          <p>Оплата любым удобным способом</p>
        </div>
        <span></span>
        <div className="big-choice">
          <div className="i-icons">
            <RiListCheck2 />
          </div>
          <p>Большой выбор товаров в каталоге</p>
        </div>
        <span></span>
        <div className="fast-delivery">
          <div className="i-icons">
            <TbBoxSeam />
          </div>
          <p>Осуществляем быструю доставку</p>
        </div>
        <span></span>
        <div className="big-discounts">
          <div className="i-icons">
            <CiPercent />
          </div>
          <p>Делаем скидки на крупные покупки</p>
        </div>
      </div>
      <div className="home-catalog-cards">
        <div className="plumbing">
          <img src={bath} alt="bath" />
          <span>Сантехника</span>
        </div>
        <div className="materials">
          <img src={materials} alt="matereials" />
          <span>Отделочные материалы</span>
        </div>
        <div className="electrical">
          <img src={electrical} alt="" />
          <span>Электротовары</span>
        </div>
        <div className="tools">
          <img src={drell} alt="" />
          <span>Инструменты</span>
        </div>
        <div className="joinery">
          <img src={boards} alt="boards" />
          <span>Столярные изделия</span>
        </div>
        <div className="construction-materials">
          <img src={const_materials} alt="const_materials" />
          <span>Общестроительные материалы</span>
        </div>
        <div className="for-sauna/bath">
          <img src={sauna_bath} alt="for-sauna/bath" />
          <span>Общестроительные материалы</span>
        </div>
        <div className="go-to-catalog">
          <div className="chevron-icon">
            <FiChevronRight />
          </div>
          <span>Перейти в каталог</span>
        </div>
      </div>
      <div className="discounts-info">
        {discInfo.map((item, i) => {
          return (
            <div className="disc-info-card" key={item.id}>
              <img src={item.img} alt="bg" />
              <div className="disc-text">
                <span>{item.title}</span>
                <span>до -{item.disc}%</span>
              </div>
            </div>
          );
        })}
      </div>
      <div className="bestSellers">
        <div className="bSeller-label">
          <h2>Хиты продаж</h2>
          <div className="bSeller-category-btns">
            {categories.map((elem, i) => {
              return (
                <button
                  onClick={() => dispatch(chooseCategory(elem))}
                  key={i}
                  style={{
                    background: elem === setCategory ? "#F6F8FB" : "#fff",
                    color: elem === setCategory ? "#117fe3" : "#5b5b5c",
                  }}
                >
                  {elem == "" ? "Все товары" : elem}
                </button>
              );
            })}
          </div>
        </div>
        <div className="bSeller-prod-cards">
          <Swiper
            modules={[Navigation]}
            spaceBetween={20}
            slidesPerView={4}
            navigation
            loop={true}
          >
            {bestSellers
              .filter((elem) => {
                if (
                  elem.category
                    .toLowerCase()
                    .trim()
                    .includes(setCategory.toLowerCase().trim())
                ) {
                  return elem;
                } else {
                  return false;
                }
              })
              .map((elem) => {
                return (
                  <SwiperSlide key={elem.id}>
                    <div className="btitle-img">
                      <div className="bestTitle">
                        <span>Хит</span>
                      </div>
                      <div className="bSeller-card-img">
                        <img src={elem.img} alt={elem.prodName} />
                      </div>
                    </div>
                    <div className="bSeller-card-bottom">
                      <div className="bSeller-articul">
                        <span>{elem.art}</span>
                      </div>
                      <div className="bSeller-prod-name">
                        <h4>{elem.prodName}</h4>
                      </div>
                      {elem.disc > 0 ? (
                        <div className="bSeller-price">
                          <span>
                            <del>{elem.price} ₽</del>
                            {parseInt(
                              elem.price - (elem.price / 100) * elem.disc
                            )}{" "}
                            ₽
                          </span>
                          <div className="bSeller-disc">
                            <span>-{elem.disc}%</span>
                          </div>
                        </div>
                      ) : (
                        <div className="bSeller-price">
                          <span>{elem.price} ₽</span>
                        </div>
                      )}
                      <div className="bSeller-card-btns">
                        <div className="cart-btn">
                          <button>
                            <HiOutlineShoppingCart />
                            Купить
                          </button>
                        </div>
                        <div className="like-cart-btn">
                          <button>
                            {elem.like ? <AiFillHeart /> : <AiOutlineHeart />}
                          </button>
                          <button>
                            <FiBarChart2 />
                          </button>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                );
              })}
          </Swiper>
          <div className="hurry-up-buy">
            <div className="hurry-disc">
              <span>Успейте купить по скидке</span>
              <span>-{bestSellers[4].disc}%</span>
            </div>
            <div className="hurry-img">
              <img src={bestSellers[4].img} alt="" />
            </div>
            <div className="hurry-title">{bestSellers[4].prodName}</div>
            <div className="hurry-price">
              <span>
                <del>{bestSellers[4].price}₽</del>
                {parseInt(
                  bestSellers[4].price -
                    (bestSellers[4].price / 100) * bestSellers[4].disc
                )}
              </span>
            </div>
            <div className="hurry-cart">
              <button>
                <HiOutlineShoppingCart />
                Добавить в корзину
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Homepage;
