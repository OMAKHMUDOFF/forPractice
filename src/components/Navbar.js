import React from "react";
import { NavLink, Outlet } from "react-router-dom";
import { HiOutlineBars2 } from "react-icons/hi2";

import { FiSearch } from "react-icons/fi";

import logo from "../assets/img/homePage_IMG/logo 1.png";
import { useDispatch, useSelector } from "react-redux";
import { catalogOpen } from "../redux/action/NavbarAction";
import CatalogWindow from "./CatalogWindow";
import { AiOutlineClose } from "react-icons/ai";

function Navbar() {
  let state = useSelector((state) => state.NavbarRedux);
  let dispatch = useDispatch();
  let { botRN, catalogIsOpen } = state;

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
              <button>Заказать звонок</button>
            </div>
          </div>
        </div>
        <div className="bottom-navbar">
          <div className="logo">
            <img src={logo} alt="logo" />
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
                  <div className="rIcons">{item.icon}</div>
                  <span>{item.title}</span>
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
