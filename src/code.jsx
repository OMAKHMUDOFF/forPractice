import React from "react";

function code() {
  return (
    <div className="fullPage">
      <div className="fulsPages">
        <div className="tepaFull">
          <Slider
            asNavFor={nav1}
            ref={slider2}
            slidesToShow={5}
            swipeToSlide={true}
            focusOnSelect={true}
            arrows={false}
            vertical={true}
          >
            {card2?.map((el, index) => {
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
        <div className="pastFull">
          <Slider asNavFor={nav2} ref={slider1} arrows={false} vertical={true}>
            {card2?.map((el, index) => {
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
            <b>{elem.kategorya}</b>
          </div>
          <div className="pagesFull-imya">
            <p>Имя</p>
            <b>{elem.nomi}</b>
          </div>
          <div className="pagesFull">
            <p>Бренд</p>
            <b>{elem.brend}</b>
          </div>
          <div className="pagesFull">
            <p>Цвет</p>
            <b>{elem.color}</b>
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
      <div className="kupit-korzinka">
        <p>{elem.art}</p>
        <p>
          <i>
            <FaCheck />
          </i>{" "}
          В наличии
        </p>
        <div className="kupit-narx">
          {elem.skidka ? (
            <b className="b1">
              <del>{elem.narxi}₽</del>
              {(elem.narxi - (elem.narxi / 100) * elem.skidka).toFixed(2)}₽
              <b className="foiz">-{elem.skidka}%</b>
            </b>
          ) : (
            <span>{elem.narxi}₽</span>
          )}
        </div>
        <div className="kolichestva">
          <p>Количество:</p>
          <div className="plus-minus-kupits">
            <button className="plus-kupits" onClick={handleMinus}>
              <FaMinus />
            </button>
            <h1 className="count">{elem.count}</h1>
            <button className="minus-kupits" onClick={handlePlus}>
              <FaPlus />
            </button>
          </div>
        </div>
        <button className="qosh-korzinka">Добавить в корзину</button>
        <div className="like-kozinka">
          <button onClick={() => dispatch(Kupit())}>Купить в 1 клик</button>
          <button
            onClick={() => {
              dispatch(setLike(elem)) && dispatch(setingLike(elem));
            }}
          >
            {elem.like ? <AiFillHeart /> : <AiOutlineHeart />}В избранное
          </button>
        </div>
      </div>
      <ModalOyna2 />
    </div>
  );
}

export default code;
