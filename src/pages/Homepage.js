import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, A11y, Autoplay } from "swiper/modules";
import { FiChevronRight } from "react-icons/fi";
import { TbCreditCard, TbBoxSeam } from "react-icons/tb";
import { RiListCheck2 } from "react-icons/ri";
import { CiPercent } from "react-icons/ci";
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
import hardware from "../assets/img/homePage_IMG/Rectangle 31.png";
import varnishes from "../assets/img/homePage_IMG/Rectangle 31 (1).png";
import coverings from "../assets/img/homePage_IMG/Rectangle 31 (2).png";
import heating from "../assets/img/homePage_IMG/Rectangle 31 (3).png";

function Homepage() {
  let discInfo = [
    {
      img: hardware,
      title: "Метизные изделия",
      disc: 15,
    },
    {
      img: varnishes,
      title: "Лакокрасочные материалы",
      disc: 30,
    },
    {
      img: coverings,
      title: "Наполные покрытия",
      disc: 25,
    },
    {
      img: heating,
      title: "Все для отопления",
      disc: 30,
    },
  ];

  return (
    <div className="homePage">
      <div className="mainSliders-Swiper">
        <Swiper
          modules={[Navigation, Pagination, A11y, Autoplay]}
          spaceBetween={50}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
          loop={true}
          // autoplay={{
          //   delay: 2500,
          //   disableOnInteraction: false,
          // }}
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
    </div>
  );
}
export default Homepage;
