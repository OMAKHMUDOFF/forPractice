import React from "react";
import { NavLink, Outlet } from "react-router-dom";
import { HiOutlineBars2 } from "react-icons/hi2";
import { FiBarChart2, FiSearch } from "react-icons/fi";
import { AiOutlineGift, AiOutlineHeart } from "react-icons/ai";
import { TbUserSquareRounded } from "react-icons/tb";
import logo from "../assets/img/homePage_IMG/logo 1.png";

function Navbar() {
  let botRN = [
    {
      icon: <AiOutlineGift />,
      title: "Все Акции",
    },
    {
      icon: <TbUserSquareRounded />,
      title: "Все Акции",
    },
    {
      icon: <FiBarChart2 />,
      title: "Все Акции",
    },
    {
      icon: <AiOutlineHeart />,
      title: "Все Акции",
    },
    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="33"
          height="26"
          viewBox="0 0 34 26"
          fill="none"
        >
          <path
            d="M3.5 3.5H7.06175C7.9082 3.5 8.66299 4.03286 8.94635 4.83047L9.76555 7.13636M9.76555 7.13636L13.5402 17.7612C13.8891 18.7433 14.9337 19.2928 15.9407 19.024L29.016 15.5326C29.8912 15.2989 30.5 14.5062 30.5 13.6003V9.13636C30.5 8.03179 29.6046 7.13636 28.5 7.13636H9.76555Z"
            stroke="#16191E"
            strokeWidth="1.6"
          />
          <path
            d="M9.36667 22.5C9.36667 23.6782 10.3218 24.6333 11.5 24.6333C12.6782 24.6333 13.6333 23.6782 13.6333 22.5C13.6333 21.3218 12.6782 20.3667 11.5 20.3667C10.3218 20.3667 9.36667 21.3218 9.36667 22.5ZM10.5 22.9H11.5V22.1H10.5V22.9Z"
            fill="#16191E"
          />
          <path
            d="M22.3667 22.5C22.3667 23.6782 23.3218 24.6333 24.5 24.6333C25.6782 24.6333 26.6333 23.6782 26.6333 22.5C26.6333 21.3218 25.6782 20.3667 24.5 20.3667C23.3218 20.3667 22.3667 21.3218 22.3667 22.5ZM23.5 22.9H24.5V22.1H23.5V22.9Z"
            fill="#16191E"
          />
        </svg>
      ),
      title: "Все Акции",
    },
  ];
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
            <input
              type="text"
              placeholder="Найти среди 50000 товаров. Например: Дрель Bosch"
            />
            <FiSearch />
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
      <Outlet />
    </>
  );
}

export default Navbar;
