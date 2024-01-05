import React, { useState } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import "./singleProdstyle/singleprod.css";

// import required modules
import { FreeMode, Navigation, Thumbs } from "swiper/modules";

function SingleProduct() {
  let prodID = useParams();
  let { bestSellers, bestOffers, goodsArr } = useSelector(
    (state) => state.TotalRedux
  );
  let singleData = [...bestOffers, ...bestSellers, ...goodsArr];
  let product = singleData.filter((elem) => elem?.id === +prodID?.id)?.[0];
  const { images } = product;
  const [thumbsSwiper, setThumbsSwiper] = useState(null);

  return (
    <section className="SingleProduct">
      <Swiper
        style={{
          "--swiper-navigation-color": "#fff",
          "--swiper-pagination-color": "#fff",
        }}
        spaceBetween={10}
        thumbs={{
          swiper: thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null,
        }}
        modules={[FreeMode, Navigation, Thumbs]}
        className="mySwiper2"
      >
        {images.map((elem) => {
          return (
            <SwiperSlide>
              <img src={elem} alt="" />
            </SwiperSlide>
          );
        })}
      </Swiper>
      <Swiper
        direction="vertical"
        onSwiper={setThumbsSwiper}
        spaceBetween={10}
        slidesPerView={5}
        navigation
        loop={true}
        freeMode={true}
        watchSlidesProgress={true}
        modules={[FreeMode, Navigation, Thumbs]}
        className="mySwiper"
      >
        {images.map((elem) => {
          return (
            <SwiperSlide>
              <img src={elem} alt="" />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </section>
  );
}

export default SingleProduct;
