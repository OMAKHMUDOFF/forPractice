import React from "react";
import { BiSolidSend } from "react-icons/bi";
import { NavLink, Outlet } from "react-router-dom";
import logo from "../assets/img/homePage_IMG/logo 1.png";

import { useDispatch } from "react-redux";
import developer from "../assets/img/payment_style/readycode_logo_3 1.png";
import visa from "../assets/img/payment_style/виза.png";
import mastercard from "../assets/img/payment_style/мастеркард.png";
import mir from "../assets/img/payment_style/мир.png";
import sber from "../assets/img/payment_style/сбер.png";
import tinkoff from "../assets/img/payment_style/тинькоф.png";
import xalva from "../assets/img/payment_style/халва.png";
import { orderCall } from "../redux/action/NavbarAction";

function Footer() {
  let dispatch = useDispatch();
  return (
    <>
      <Outlet />
      <footer>
        <div className="top-footer">
          <div className="top-left-footer">
            <div className="logo">
              <img src={logo} alt="" />
            </div>
            <div className="limited-liability">
              <p>ООО «Стройоптторг»</p>
            </div>
          </div>
          <div className="top-right-footer">
            <div className="inn-email">
              <div className="inn-number">
                <p>ИНН: 0901051787 </p>
                <p>КПП 090101001</p>
              </div>
              <div className="email-footer">
                <span>Email:</span>
                <a href="https://www.info@stroiopttorg.ru">
                  info@stroiopttorg.ru
                </a>
              </div>
            </div>
            <div className="number-requestCall">
              <div className="footer-phone-number">
                <a href="tel: 88004440065">8 800 444 00 65</a>
                <span className="time">Ежедневно, с 8:00 до 18:00</span>
              </div>
              <div className="request-btn">
                <button onClick={() => dispatch(orderCall())}>
                  Заказать звонок
                </button>
              </div>
            </div>
          </div>
        </div>
        <hr />
        <div className="middle-footer">
          <div className="middle-top-footer">
            <div className="information-mid-footer">
              <div className="left-info-footer">
                <div className="foot-info-title">
                  <p>Информация</p>
                </div>
                <ul>
                  <li>
                    <NavLink to={"/about-company"}>О компании</NavLink>
                  </li>
                  <li>
                    <NavLink to={"/payment"}>Оплата</NavLink>
                  </li>
                  <li>
                    <NavLink to={"/delivery"}>Доставка</NavLink>
                  </li>
                  <li>
                    <NavLink to={"/refund"}>Возврат</NavLink>
                  </li>
                  <li>
                    <NavLink to={"/reviews"}>Отзывы</NavLink>
                  </li>
                </ul>
              </div>
              <div className="right-info-footer">
                <ul>
                  <li>
                    <NavLink to={"/quest-answer"}>Вопрос-ответ</NavLink>
                  </li>
                  <li>
                    <NavLink to={"/news"}>Новости</NavLink>
                  </li>
                  <li>
                    <NavLink to={"/contacts"}>Контакты</NavLink>
                  </li>
                  <li>
                    <NavLink to={"/login-registration"}>
                      Вход \ Регистрация
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to={"/promotions"}>Все акции</NavLink>
                  </li>
                </ul>
              </div>
            </div>
            <div className="catalog-mid-footer">
              <div className="left-catalog-foot">
                <div className="foot-catalog-title">
                  <p>Каталог</p>
                </div>
                <ul>
                  <li>
                    <NavLink to={"/"}>Общестроительные материалы</NavLink>
                  </li>
                  <li>
                    <NavLink to={"/"}>Все для сауны и бани</NavLink>
                  </li>
                  <li>
                    <NavLink to={"/"}>Инструмент</NavLink>
                  </li>
                  <li>
                    <NavLink to={"/"}>Отделочные материалы</NavLink>
                  </li>
                  <li>
                    <NavLink to={"/"}>Товары для дома, сада и огорода</NavLink>
                  </li>
                </ul>
              </div>
              <div className="mid-catalog-foot">
                <ul>
                  <li>
                    <NavLink to={"/"}>Электротовары</NavLink>
                  </li>
                  <li>
                    <NavLink to={"/"}>Сантехника</NavLink>
                  </li>
                  <li>
                    <NavLink to={"/"}>Столярные изделия</NavLink>
                  </li>
                  <li>
                    <NavLink to={"/"}>
                      Спецодежда и средства индивидуальной пожарной защиты
                    </NavLink>
                  </li>
                </ul>
              </div>
              <div className="right-catalog-foot">
                <ul>
                  <li>
                    <NavLink to={"/"}>
                      Водо-газоснабжение, отопление, вентиляция
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to={"/"}>
                      Метизные, такелажные и скобяные изделия
                    </NavLink>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <hr />
          <div className="middle-bot-footer">
            <div className="we-accept-payment">
              <div className="we-accept-subtitle">
                <p>Мы принимаем к оплате:</p>
              </div>
              <ul>
                <li>
                  <img src={visa} alt="" />
                </li>
                <li>
                  <img src={mastercard} alt="" />
                </li>
                <li>
                  <img src={sber} alt="" />
                </li>
                <li>
                  <img src={mir} alt="" />
                </li>
                <li>
                  <img src={xalva} alt="" />
                </li>
                <li>
                  <img src={tinkoff} alt="" />
                </li>
              </ul>
            </div>
            <div className="subscribe-newsletter">
              <p>Подпишитесь на рассылку и будьте в курсе!</p>
              <div className="send-email">
                <input type="email" placeholder="Ваш email" />
                <button>
                  <BiSolidSend />
                </button>
              </div>
            </div>
          </div>
        </div>
        <hr />
        <div className="bottom-footer">
          <div className="about-footer">
            <p>
              © 2003-2023 Интернет-магазин ООО «Стройоптторг» р/с
              40702810360000102415 в Ставропольское отделение №5230 ПАО
              Сбербанк, БИК 040702615
            </p>
          </div>
          <div className="develop">
            <img src={developer} alt="" />
          </div>
          <div className="privacy-policy">
            <NavLink to={"/"}>Политика Конфидициальности</NavLink>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
