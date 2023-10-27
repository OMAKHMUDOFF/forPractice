import React from "react";
import logo from "../assets/img/homePage_IMG/logo 1.png";
import { Outlet } from "react-router-dom";

function Footer() {
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
                <button>Заказать звонок</button>
              </div>
            </div>
          </div>
        </div>
        <hr />
      </footer>
    </>
  );
}

export default Footer;
