import React from "react";
import { HiOutlineBars2 } from "react-icons/hi2";
import { NavLink, Outlet } from "react-router-dom";

import { FiSearch } from "react-icons/fi";

import { AiOutlineClose } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import logo from "../assets/img/homePage_IMG/logo 1.png";
import { catalogOpen, orderCall } from "../redux/action/NavbarAction";
import CatalogWindow from "./CatalogWindow";

function Navbar() {
  let { botRN, catalogIsOpen } = useSelector((state) => state.NavbarRedux);
  let dispatch = useDispatch();

  let { bestSellers, bestOffers, goodsArr, cart } = useSelector(
    (state) => state.TotalRedux
  );
  let data = [...bestSellers, ...bestOffers, ...goodsArr];
  let favorites = data.filter((elem) => elem.like === true);

  return (
    <div className="catalog-navbar">
      <nav>
        <div className="top-navbar">
          <div className="nav-links">
            <ul>
              <li>
                <NavLink to="/about-company">О компании</NavLink>
              </li>
              <li>
                <NavLink to="/payment">Оплата</NavLink>
              </li>
              <li>
                <NavLink to="/deliver">Доставка</NavLink>
              </li>
              <li>
                <NavLink to="/refund">Возврат</NavLink>
              </li>
              <li>
                <NavLink to="/reviews">Отзывы</NavLink>
              </li>
              <li>
                <NavLink to="/quest-answer">Вопрос-Ответ</NavLink>
              </li>
              <li>
                <NavLink to="/news">Новости</NavLink>
              </li>
              <li>
                <NavLink to="/contacts">Контакты</NavLink>
              </li>
            </ul>
          </div>
          <div className="top-right-nav">
            <div className="nav-time">
              <span>Ежедневно, с 8:00 до 18:00</span>
            </div>
            <div className="nav-phone-number">
              <a href="tel: 88004440065">8 800 444 00 65</a>
            </div>
            <div className="nav-order-btn">
              <button onClick={() => dispatch(orderCall())}>
                Заказать звонок
              </button>
            </div>
          </div>
        </div>
        <div className="bottom-navbar">
          <div className="logo">
            <NavLink to={"/"}>
              <img src={logo} alt="logo" />
            </NavLink>
          </div>
          <div className="nav-catalog-btn">
            <button
              onClick={() => dispatch(catalogOpen())}
              style={{ background: catalogIsOpen ? "#011120" : "#186fd4" }}
            >
              <div className="btn-icon">
                {catalogIsOpen ? <AiOutlineClose /> : <HiOutlineBars2 />}
              </div>
              Каталог
            </button>
          </div>
          <div className="nav-search-input">
            <input
              type="text"
              placeholder="Найти среди 50000 товаров. Например: Дрель Bosch"
            />
            <button>
              <FiSearch />
            </button>
          </div>
          <div className="bot-right-nav">
            {botRN.map((item, i) => {
              return (
                <div className="bot-nav-iconText" key={i}>
                  <NavLink to={item.path}>
                    <div className="rIcons">{item.icon}</div>
                    <span>{item.title}</span>
                    {item.title === "Избранное" && favorites.length > 0 ? (
                      <div className="lengthView">
                        {favorites.length > 0 ? favorites.length : ""}
                      </div>
                    ) : item.title === "Корзина" && cart.length > 0 ? (
                      <div className="lengthView" style={{ right: "10px" }}>
                        {cart.length > 0 ? cart.length : ""}
                      </div>
                    ) : (
                      ""
                    )}
                  </NavLink>
                </div>
              );
            })}
          </div>
        </div>
      </nav>
      <CatalogWindow isOpen={catalogIsOpen} />
      <Outlet />
    </div>
  );
}

export default Navbar;
