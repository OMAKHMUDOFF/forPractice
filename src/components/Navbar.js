import React from "react";
import { NavLink, Outlet } from "react-router-dom";
import { HiOutlineBars2 } from "react-icons/hi2";
import logo from "../assets/img/homePage_IMG/logo 1.png";

function Navbar() {
  return (
    <>
      <nav>
        <div className="top-navbar">
          <div className="nav-links">
            <ul>
              <li>
                <NavLink to="/about">О компании</NavLink>
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
            <button>
              <HiOutlineBars2 />
              Каталог
            </button>
          </div>
          <div className="nav-search-input">
            
          </div>
        </div>
      </nav>
      <Outlet />
    </>
  );
}

export default Navbar;
