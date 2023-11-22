import React from "react";
import { BsClockHistory } from "react-icons/bs";
import { CiLocationOn } from "react-icons/ci";
import { HiOutlineMail } from "react-icons/hi";
import { LuPhone } from "react-icons/lu";
import { useDispatch, useSelector } from "react-redux";
import TitleNavigation from "../components/UI/TitleNavigationUI";
import { orderCall } from "../redux/action/NavbarAction";

function Contacts() {
  let state = useSelector((state) => state.ContactsRedux);
  let { departmentNum, regions } = state;
  let dispatch = useDispatch();
  return (
    <div className="contacts-page">
      <TitleNavigation
        path={"/contacts"}
        pathName={"Контакты"}
        title={"Контакты"}
      />
      <div className="main-contacts">
        <div className="how-you-contact-us">
          <div className="address-map-card">
            <div className="map-address-card">
              <iframe
                title="yandexMap"
                src="https://yandex.ru/map-widget/v1/?um=constructor%3A2ab111755e8672761c15bb9e11e26421a6dfcc425bda8e14149e35c20ba944ff&amp;source=constructor"
                width="1393"
                height="611"
                frameBorder="0"
              ></iframe>
            </div>
            <div className="address-card">
              <div className="address-location">
                <div className="address-total-title">
                  <CiLocationOn />
                  <p>Адрес:</p>
                </div>
                <div className="address">
                  <p>
                    369012, Карачаево-Черкесская Республика, г. Черкесск, ул
                    Октябрьская, дом 301
                  </p>
                </div>
              </div>
              <div className="address-phone">
                <div className="address-total-title">
                  <LuPhone />
                  <p>Телефон:</p>
                </div>
                <a href="tel: 88782284272">8 (8782) 28-42-72</a>
              </div>
              <div className="address-email">
                <div className="address-total-title">
                  <HiOutlineMail />
                  <p>Email адрес:</p>
                </div>
                <a href="https://info@stroiopttorg.ru" target="blank">
                  info@stroiopttorg.ru
                </a>
              </div>
              <div className="working-time">
                <div className="address-total-title">
                  <BsClockHistory />
                  <p>Время работы:</p>
                </div>
                <div className="daily-time">
                  <p>Ежедневно, с 8:00 до 18:00 Без перерыва и выходных</p>
                </div>
              </div>
              <div className="address-order-call">
                <button onClick={() => dispatch(orderCall())}>
                  Заказать звонок
                </button>
              </div>
            </div>
          </div>
          <div className="contacts-phone-numbers">
            <div className="phone-number-cards">
              {departmentNum.map((elem, i) => {
                return (
                  <div className="phone-number-card" key={i}>
                    <div className="depName">
                      <p>{elem.dep}</p>
                    </div>
                    <div className="depNum">
                      <a href={`tel: ${elem.numLink}`}>{elem.number}</a>
                    </div>
                  </div>
                );
              })}
            </div>
            <div className="requisites">
              <div className="reqTitle">
                <span>Реквизиты:</span>
              </div>
              <p>
                ОБЩЕСТВО С ОГРАНИЧЕННОЙ ОТВЕТСТВЕННОСТЬЮ "СТРОЙОПТТОРГ"ИНН
                0901051787КПП 090101001369000, Карачаево-Черкесская республика,
                город Черкесск, Октябрьская улица, 301р/с 40702810360000102415 в
                Ставропольское отделение №5230 ПАО Сбербанк, БИК 040702615
              </p>
            </div>
          </div>
          <div className="we-work-regions">
            <div className="reg-title">
              <h3>Работаем по регионам:</h3>
            </div>
            <div className="work-reg-cards">
              {regions.map((reg, i) => {
                return (
                  <div className="work-reg-card" key={i}>
                    <div className="reg-name">{reg.reg}</div>
                    <div className="reg-phone-num">
                      <a href={`tel: ${reg.numLink}`}>{reg.number}</a>
                    </div>
                    <div className="reg-contact-mail">
                      <a target="blank" href={`https://www.${reg.mail}`}>
                        {reg.mail}
                      </a>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
        <div className="qa-form">
          <div className="qa-form-title">
            <h2>У вас есть вопросы? С радостью ответим на них!</h2>
          </div>
          <form>
            <div className="top-label-inputs">
              <div className="name-label-input">
                <label htmlFor="name">
                  Ваше имя <span className="req-star">*</span>:
                </label>
                <input
                  required
                  type="text"
                  id="name"
                  placeholder="Введите ваше имя"
                />
              </div>
              <div className="phone-label-input">
                <label htmlFor="phone">
                  Номер телефона <span className="req-star">*</span>:
                </label>
                <input
                  required
                  type="text"
                  id="phone"
                  placeholder="+7 (     )     -       -"
                />
              </div>
            </div>
            <div className="message-area-label">
              <label htmlFor="message-area">
                Текст сообщения <span className="req-star">*</span>:
              </label>
              <textarea
                required
                id="message-area"
                placeholder="Введите ваш вопрос"
              />
            </div>
            <div className="submit-check-privpolicy">
              <button>Отправить</button>
              <div className="check-priv-policy">
                <input required type="checkbox" />
                <p>
                  Согласен с обработкой персональных данных в соответствии с
                  политикой конфиденциальности
                </p>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Contacts;
